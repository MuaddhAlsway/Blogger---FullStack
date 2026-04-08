import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar";

function Layout() {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/'); // ✅ fixed (removed space)
  };

  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <img
          className="w-32 sm:w-40 cursor-pointer"
          src={assets.logo}
          alt="logo"
          onClick={() => navigate('/')}
        />

        <button
          onClick={logout}
          className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>

      <div className="flex h-[calc(100vh-70px)]">
        <div className="w-70 border-r border-gray-200">
          <Sidebar/>
        </div>

        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;