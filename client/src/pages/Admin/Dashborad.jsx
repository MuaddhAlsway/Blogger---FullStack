import { assets, dashboard_data } from "../../assets/assets";
import { useEffect, useState } from "react";
import BlogTableItem from "../../components/Admin/BlogTableItem";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    draft: 0,
    recentBlogs: [],
  });

  const fetchDashboard = async () => {
    // later replace with API call
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      
      {/* ===== Top Cards ===== */}
      <div className="flex flex-wrap gap-4">
        
        {/* Blogs */}
        <div className="flex bg-white p-4 min-w-58 items-center gap-4 rounded shadow hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_1} alt="blogs icon" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.blogs}
            </p>
            <p className="text-gray-400 text-sm">Blogs</p>
          </div>
        </div>

        {/* Comments */}
        <div className="flex bg-white p-4 min-w-58 items-center gap-4 rounded shadow hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_2} alt="comments icon" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.comments}
            </p>
            <p className="text-gray-400 text-sm">Comments</p>
          </div>
        </div>

        {/* Draft */}
        <div className="flex bg-white p-4 min-w-58 items-center gap-4 rounded shadow hover:scale-105 transition-all">
          <img src={assets.dashboard_icon_3} alt="draft icon" />
          <div>
            <p className="text-xl font-semibold text-gray-600">
              {dashboardData.draft}
            </p>
            <p className="text-gray-400 text-sm">Draft</p>
          </div>
        </div>

      </div>

      {/* ===== Latest Blogs Header ===== */}
      <div className="flex items-center gap-3 m-4 mt-8 text-gray-600">
        <img src={assets.dashboard_icon_4} alt="latest blogs icon" />
        <p className="font-medium">Latest Blogs</p>
      </div>

      {/* ===== Table ===== */}
      <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg bg-white">
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
            {dashboardData.recentBlogs?.length > 0 ? (
              dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id || index}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
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
  );
}

export default Dashboard;