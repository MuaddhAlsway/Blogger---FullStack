import { assets } from "../../assets/assets";

function BlogTableItem({ blog, index, fetchBlogs }) {

  // ✅ SAFE TITLE (WORKS WITH ANY DATA)
  const title =
    blog?.title ||
    blog?.titleEn ||
    blog?.titleAr ||
    blog?.name ||
    "No Title";

  const date = blog?.createdAt
    ? new Date(blog.createdAt).toDateString()
    : "No Date";

  const isPublished = blog?.isPublished ?? false;

  // 🔥 Toggle publish (mock)
  const togglePublish = () => {
    blog.isPublished = !blog.isPublished;
    fetchBlogs();
  };

  // 🔥 Delete (mock)
  const deleteBlog = () => {
    alert("Delete clicked (connect backend later)");
  };

  return (
    <tr className="border border-gray-100">

      <td className="px-2 py-4">{index}</td>

      {/* ✅ TITLE WILL ALWAYS SHOW */}
      <td className="px-2 py-4 font-medium text-gray-700">
        {title}
      </td>

      <td className="px-2 py-4 max-sm:hidden">
        {date}
      </td>

      <td className="px-2 py-4 max-sm:hidden">
        <span className={isPublished ? "text-green-600" : "text-orange-600"}>
          {isPublished ? "Published" : "Unpublished"}
        </span>
      </td>

      <td className="px-2 py-4 flex gap-3">

        <button
          onClick={togglePublish}
          className="border px-2 py-1 rounded hover:bg-gray-100"
        >
          {isPublished ? "Unpublish" : "Publish"}
        </button>

        <img
          onClick={deleteBlog}
          src={assets.cross_icon}
          alt="delete"
          className="w-6 cursor-pointer hover:scale-110 transition"
        />

      </td>

    </tr>
  );
}

export default BlogTableItem;