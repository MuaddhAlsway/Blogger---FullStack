import { assets, blog_data } from "../assets/assets";
import { useState } from "react";
import { motion } from "motion/react";
import BlogCard from "./BlogCard";

function BlogList({ lang = "en" }) {
  // Dynamic categories (no need to import blogCategories)
  const blogCategories =
    lang === "en"
      ? ["All", ...new Set(blog_data.map((blog) => blog.category))]
      : ["الكل", ...new Set(blog_data.map((blog) => blog.categoryAr))];

  const [menu, setMenu] = useState(lang === "en" ? "All" : "الكل");

  return (
    <div>
      {/* Categories */}
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <div className="relative" key={item}>
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-gray-500 ${
                menu === item ? "text-white px-5 pt-0.5" : ""
              }`}
            >
              {item}

              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute left-0 right-0 top-0 h-7 -z-10 bg-primary rounded-full"
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data
          .filter((blog) =>
            menu === (lang === "en" ? "All" : "الكل")
              ? true
              : lang === "en"
              ? blog.category === menu
              : blog.categoryAr === menu
          )
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} lang={lang} />
          ))}
      </div>
    </div>
  );
}

export default BlogList;