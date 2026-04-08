import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./pages/Admin/Layout";  
import Dashboard from './pages/Admin/Dashborad';
import Comment from './pages/Admin/Comment';
import ListBlog from './pages/Admin/ListBlog';
import AddBlog from './pages/Admin/AddBlog';
import Login from './components/Admin/Login';
import 'quill/dist/quill.snow.css' 
function App() {
  const [lang, setLang] = useState("en");
  const location = useLocation();

  // Hide navbar in admin pages
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className={lang === "ar" ? "rtl" : "ltr"}>
      
      {/* ✅ Show Navbar only in public pages */}
      {!isAdmin && <Navbar lang={lang} setLang={setLang} />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/blog/:id" element={<Blog lang={lang} />} />
       {/* ✅ moved outside */}

        {/* Admin Routes */}
        <Route path="/admin" element={true ? <Layout /> : <Login/>}>
          <Route index element={<Dashboard />} />
          <Route path="comments" element={<Comment />} />
          <Route path="listBlog" element={<ListBlog />} />
          <Route path="addBlog" element={<AddBlog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;