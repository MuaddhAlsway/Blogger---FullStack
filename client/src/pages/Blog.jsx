import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Moment from "moment";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

function Blog() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [comment, setComment] = useState([]);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const [lang, setLang] = useState("en"); // ✅ define first

  // ✅ Fetch Blog
  const fetchBlogData = () => {
    const blog = blog_data.find((item) => item._id === id);
    setData(blog);
  };

  // ✅ Fetch Comments
  const fetchComments = () => {
    setComment(comments_data);
  };

  // ✅ Add Comment
  const addComment = (e) => {
    e.preventDefault();

    const newComment = {
      name,
      content,
      createdAt: new Date(),
    };

    setComment((prev) => [newComment, ...prev]);
    setName("");
    setContent("");
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, [id]);

  // ✅ Wait until data loaded
  if (!data) {
    return <Loading />;
  }

  // ✅ Language switch values
  const title = lang === "en" ? data.titleEn : data.titleAr;
  const subTitle = lang === "en" ? data.subTitleEn : data.subTitleAr;
  const description =
    lang === "en" ? data.descriptionEn : data.descriptionAr;

  return (
    <div className={`relative ${lang === "ar" ? "rtl text-right" : ""}`}>
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      />

    

      {/* 🔥 Language Toggle */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setLang("en")}
          className="px-4 py-1 border rounded"
        >
          English
        </button>
        <button
          onClick={() => setLang("ar")}
          className="px-4 py-1 border rounded"
        >
          العربية
        </button>
      </div>

      {/* Header */}
      <div className="text-center mt-10 text-gray-600">
        <p className="text-primary py-4 font-medium">
          {lang === "en"
            ? `Published on ${Moment(data.createdAt).format("MMMM Do YYYY")}`
            : `تم النشر في ${Moment(data.createdAt).format("YYYY/MM/DD")}`}
        </p>

        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">
          {title}
        </h1>

        <h2 className="my-5 max-w-lg truncate mx-auto">{subTitle}</h2>

        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
          Michael Brown
        </p>
      </div>

      {/* Image + Content */}
      <div className="max-w-5xl mx-auto my-10 mt-6">
        <img
          src={data.image}
          alt="blog"
          className="rounded-3xl mb-5"
        />

        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>

        {/* Comments */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-4">
            {lang === "en"
              ? `Comments (${comment.length})`
              : `التعليقات (${comment.length})`}
          </p>

          <div className="flex flex-col gap-4">
            {comment.map((item, index) => (
              <div
                key={index}
                className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img src={assets.user_icon} alt="" className="w-6" />
                  <p className="font-medium">{item.name}</p>
                </div>

                <p className="text-sm max-w-md ml-8">
                  {item.content}
                </p>

                <div className="absolute right-4 bottom-4 text-xs">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment */}
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">
            {lang === "en" ? "Add your comment" : "أضف تعليقك"}
          </p>

          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-4 max-w-lg"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder={lang === "en" ? "Name" : "الاسم"}
              required
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />

            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder={lang === "en" ? "Comment" : "تعليق"}
              className="w-full p-2 border border-gray-300 rounded outline-none h-48"
            ></textarea>

            <button
              type="submit"
              className="bg-primary text-white rounded p-2 px-8 hover:scale-105 transition-all cursor-pointer"
            >
              {lang === "en" ? "Submit" : "إرسال"}
            </button>
          </form>
        </div>

        {/* Share */}
        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">
            {lang === "en"
              ? "Share this article"
              : "شارك هذا المقال"}
          </p>

          <div className="flex gap-4">
            <img src={assets.facebook_icon} width={50} alt="" />
            <img src={assets.twitter_icon} width={50} alt="" />
            <img src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;