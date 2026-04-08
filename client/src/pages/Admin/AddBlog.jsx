import { useState } from "react"
import { assets, blogCategoriesEn } from "../../assets/assets"
import Quill from 'quill'
import { useEffect, useRef } from "react"
function AddBlog() {

const editorRef = useRef(null);
const quillRef = useRef(null);

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [category, setCategory] = useState('Startup')
  const [isPublished, setIsPublished] = useState(false)


  const generateContent = async () => {
    setTitle("How to start a startup in 2024")
    setSubtitle("A comprehensive guide to launching your startup successfully")
  }


  const onSumbitHandler = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if(!quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow'
      });
    }
  }, []);

  return (
   <form onSubmit={onSumbitHandler} className="flex-1 bg-blue-50/50 text-gray-600
   h-full overflow-scroll">
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img src={!image ?assets.upload_area : URL.createObjectURL(image)} alt="" className="mt-2 h-16 rounded cursor-pointer"/>
           <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
</label>
           <p className="mt-4">
            Blog Title </p>
           <input type="text" placeholder="type here" required
           className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded" onChange={e => setTitle(e.target.value)}  value={title}/>
        
        <p className="mt-4">Sub Title </p>
           <input type="text" placeholder="type here" required
           className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded" onChange={e => setSubtitle(e.target.value)}  value={subtitle}/>

           <p className="mt-4">Blog Description </p>
          <div className="max-w-lg h-74 ph-16 sm:pb-10 pt-2 relative">
            <div ref={editorRef}>
              
            </div>
           
           <button type="button" className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer" onClick={generateContent}>
            Generate With AI
           </button>
          </div>

          <p className="mt-4"> Blog category</p>
          <select onChange={e => setCategory(e.target.value)} name="category" className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded" >
            <option value="">Select category</option>
            {blogCategoriesEn.map((item, index) => {
              return <option key={index} value={item}>{item}</option>
            })}
          </select>

          <div className="flex gap-2 mt-4">
            <p>Published</p>
            <input type="checkbox" checked={isPublished} className="scale-125 cursor-pointer" onChange={e=> setIsPublished(e.target.checked)} />
          </div>

          <button type="submit" className="bg-primary text-white  py-2 mt-8 w-40 h-10 rounded ">
            Submit Blog
          </button>
      </div>
   </form>
  )
}
export default AddBlog