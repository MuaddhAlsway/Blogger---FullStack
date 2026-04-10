import express from "express";
import { addBlog, addComment, getAllBlogs, getBlogComments, togglePublish } from "../controllers/blogController.js";
import upload from "../Middleware/multer.js";
import auth from "../Middleware/auth.js";
import { deleteBlogById } from "../controllers/blogController.js";

const blogRouter = express.Router();
blogRouter.post("/add",upload.single('image',),auth, addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId",auth, deleteBlogById)
blogRouter.get("/toggle-published",auth, togglePublish)
blogRouter.post('/add-comment', addComment)
blogRouter.post("/comments", getBlogComments)
export default blogRouter;