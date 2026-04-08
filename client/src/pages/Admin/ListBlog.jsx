import { useEffect, useState } from "react";
import { blog_data,  } from "../../assets/assets";
import BlogTableItem from "../../components/Admin/BlogTableItem";

function ListBlog() {

   const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
      // later replace with API call
      setBlogs(blog_data);
    }
    useEffect(() => {
      fetchBlogs();
    }, []);

  return (

   


    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
        <h1>All Blogs</h1>
          <div className="relative mt-4 h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg bg-white">
                <table className="w-full text-sm text-gray-500">
                  
                  <thead className="text-xs text-gray-600 text-left uppercase border-b">
                    <tr>
                      <th className="px-2 py-4 xl:px-6">#</th>
                      <th className="px-2 py-4">Blog Title</th>
                      <th className="px-2 py-4 max-sm:hidden">Date</th>
                      <th className="px-2 py-4 max-sm:hidden">Status</th>
                      <th className="px-2 py-4">Action</th>
                    </tr>
                  </thead>
        
                  <tbody>
                    {blogs.length > 0 ? (
                      blogs.map((blog, index) => (
                        <BlogTableItem
                          key={blog._id || index}
                          blog={blog}
                          fetchBlogs={fetchBlogs}
                          index={index + 1}
                        />
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center py-6 text-gray-400">
                          No blogs available
                        </td>
                      </tr>
                    )}
                  </tbody>
        
                </table>
              </div>
    </div>
  )
}
export default ListBlog