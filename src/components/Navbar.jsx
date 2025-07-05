import { Link } from "react-router-dom";
import darkModeIcon from "../assets/darkMode.png";
import lightModeIcon from "../assets/lightMode.png";
import arrowIcon from "../assets/arrow.png";
import arrowIcon2 from "../assets/arrowInv.png";

function Navbar({scrolled, darkMode, setDarkMode, outro, setOutro, currentIndexRef, preserveIndexRef, setCurrentIndex, setShrinkWrapper}) {
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
    <div className="flex items-center gap-4">
      <h3
        className={`hidden md:flex text-2xl font-bold ${darkMode ? "text-gray-800" : "text-[#fdfcfc]"}`}
      >
        Rijit Singh
      </h3>
      <h3
        className={`md:hidden text-2xl font-bold ${darkMode ? "text-gray-800" : "text-[#fdfcfc]"}`}
      >
        RS
      </h3>
    </div>

    {/* Middle Section (hidden on mobile) */}
    <h3 className={`hidden md:flex space-x-6 ${darkMode ? "text-gray-800" : "text-[#fdfcfc]"} font-medium`}>
      Software Engineer | Full Stack Developer | Data Science Enthusiast
    </h3>

    {/* Toggle Buttons - mobile only */}
    <div className="md:hidden flex items-center gap-3">
      {/* Return Button */}
      {outro && <button
        onClick={() => {
            window.scrollTo({ top: 20, behavior: "smooth" });
            setTimeout(() => {
              preserveIndexRef.current = true;
              setCurrentIndex(currentIndexRef.current);  // 👈 this must come BEFORE
              setShrinkWrapper(true);                    // 👈 this must come AFTER
              setOutro(false);
            }, 700);
          }}
        className="w-10 h-10 rounded-full"
        title="Return"
      >
        <img src={darkMode ? arrowIcon : arrowIcon2} alt="Return" className="w-10 h-10 rounded-full rotate-270" />
      </button>}
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-10 h-10 flex items-center justify-center text-white rounded-full transition duration-300"
        title="Toggle Dark Mode"
      >
        <img
          src={darkMode ? lightModeIcon : darkModeIcon}
          alt={darkMode ? "Light Mode" : "Dark Mode"}
          className="w-10 h-10 rounded-full"
        />
      </button>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
// dfb16d