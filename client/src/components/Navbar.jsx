import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Navbar({ lang, setLang }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">

      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer"
      />

      <div className="flex items-center gap-4">

        {/* 🌍 Language Switch */}
        <div className="flex border rounded-full overflow-hidden">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 text-sm ${
              lang === "en" ? "bg-primary text-white" : ""
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLang("ar")}
            className={`px-3 py-1 text-sm ${
              lang === "ar" ? "bg-primary text-white" : ""
            }`}
          >
            AR
          </button>
        </div>

        {/* Login Button */}
        <button
          onClick={() => navigate("/admin")}
          className="flex items-center gap-2 rounded-full text-sm bg-primary text-white px-6 py-2.5"
        >
          {lang === "en" ? "Login" : "تسجيل الدخول"}

          <img src={assets.arrow} alt="arrow" className="w-3" />
        </button>

      </div>
    </div>
  );
}

export default Navbar;