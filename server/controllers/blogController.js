import ImageKit from "imagekit";
import fs from "fs";
import Blog from "../models/Blog.js";
import Comment from "../models/comment.js";

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

export const addBlog = async (req, res) => {
    try {
        const { title, subtitle, description, category, isPublished } =
            JSON.parse(req.body.blog);

        const imageFile = req.file;

        // check required fields
        if (!title || !description || !category || !imageFile) {
            return res.json({
                success: false,
                message: "Missing required fields"
            });
        }

        const fileBuffer = fs.readFileSync(imageFile.path);

        // upload image
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        });

        // generate optimized URL
        const imageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: "auto" },
                { format: "webp" },
                { width: "1280" }
            ]
        });

        // save to DB
        await Blog.create({
            title,
            subtitle,
            description,
            category,
            image: imageUrl,
            isPublished
        });

        res.json({
            success: true,
            message: "Blog added successfully"
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export const getAllBlogs = async(req,res) => {
    try{
         const blogs = await Blog.find({isPublished: true})
          res.json({
            success: true,
           blogs
        });
    } catch(error){

         res.json({
            success: false,
            message: error.message
        });
    }
   
}

export const getBlogById  = async (req,res) => {
try{
    const {blogId} = req.params;
    const blog = await Blog.findById(blogId)
    if(!blog){
        return res.json({success: false, messa1ge:"Blog not found"})
    }
    res.json({success: true, blog})
}
catch(error){
    res.json({success: false, message: error.message})
}
}


export const deleteBlogById  = async (req,res) => {
try{
    const {id} = req.body
    await Blog.findIdAndDelete()

    // Delete all comments associated with the blog
    await Comment.deleteMany({blog: id});
    res.json({success: true, message: 'Blog delete successfully'})
}
catch(error){
    res.json({success: false, message: error.message})
}
}


export const togglePublish = async (req,res) =>{
    try{
        const {id} = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
         res.json({success: true, message: 'Blog status updated'})
    } 
    catch (error){
        res.json({success: false, message: error.message})
    }
}


export const addComment = async (req, res) => {
    try{
        const {blog, name, content} = req.body
        await Comment.create({blog, name, content});
         res.json({success: true, message: 'Comment added for review'})
    }
    catch{
 res.json({success: false, message: error.message})
    }
}

export const getBlogComments = async (req, res) => {
    try{
        const {blogId} = req.body
        const comments = await Comment.find({blog: blogId, isAppreoved: true }).sort({createdAt: -1});
        res.json({success: true, comments})
    } catch(error){
        res.json({sucess: false, message: error.message})
    }

}
