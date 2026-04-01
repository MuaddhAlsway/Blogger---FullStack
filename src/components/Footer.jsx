import { assets, footer_data } from "../assets/assets"

function Footer() {
  
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/5">
      
      {/* Top Footer */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">

        {/* Left: Logo + Description + Subscribe */}
        <div className="flex flex-col gap-6">
          <img className="w-32 sm:w-44" src={assets.logo} alt="QuickBlog Logo" />

          <p className="max-w-[400px] text-gray-600">
            QuickBlog is a blogging platform that allows you to share your thoughts, ideas, and stories with the world.
          </p>

          {/* Newsletter Form */}
          <form  className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
             
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right: Footer Links */}
        <div className="flex flex-wrap justify-between w-full md:w-[50%] gap-6">
          {footer_data.map((section, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900 text-base mb-2 md:mb-5">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:underline transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        © 2025 QuickBlog. All rights reserved.
      </p>
    </div>
  );
}
export default Footer