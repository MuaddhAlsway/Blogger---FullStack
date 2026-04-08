import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog, lang = "en" }) {
  const navigate = useNavigate();

  // Safe fallback for title and description
  const title = lang === "en" ? blog.titleEn || blog.title : blog.titleAr || blog.title;
  const description = lang === "en" ? blog.descriptionEn || blog.description : blog.descriptionAr || blog.description;

  const shortDescription = description ? description.slice(0, 80) : "";

  // Safe fallback for category
  const category = lang === "en" ? blog.category : blog.categoryAr || blog.category;

  return (
    <div
      onClick={() => navigate(`/blog/${blog._id}`)}
      className="w-full cursor-pointer rounded-lg bg-white overflow-hidden shadow hover:shadow-primary/25 duration-300"
    >
      <img src={blog.image} alt={title} className="aspect-video" />

      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
        {category}
      </span>

      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        <p
          className="mb-3 text-xs text-gray-600"
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        />
      </div>
    </div>
  );
}

export default BlogCard;