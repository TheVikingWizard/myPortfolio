import { Link } from "react-router-dom";

function Navbar({scrolled, darkMode}) {
 const showNav = !scrolled;
  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 
        ${darkMode ? "bg-[#dfb16d]" : "bg-[#766d3b]"} backdrop-blur-md shadow-lg rounded-xl z-50 
        transition-all duration-500 ${
          showNav ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
        }`}
    >
      <div className="flex justify-between items-center px-6 py-3">
        <Link
          to="/"
          className={`text-2xl font-bold ${darkMode ? "text-gray-800" : "text-[#fdfcfc]"}`}
        >
          Rijit Singh
        </Link>
        <h3 className={`flex space-x-6 ${darkMode ? "text-gray-800" : "text-[#fdfcfc]"} font-medium`}>
          Software Engineer | Full Stack Developer | Data Science Enthusiast
        </h3>
      </div>
    </nav>
  );
}

export default Navbar;
// dfb16d