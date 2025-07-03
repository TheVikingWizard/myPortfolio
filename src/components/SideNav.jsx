import { MdMenuOpen } from "react-icons/md";
import SocialIcons from "./SocialIcons";
import darkModeIcon from "../assets/darkMode.png";
import lightModeIcon from "../assets/lightMode.png";

const SideNav = ({ SECTIONS, currentIndex, setCurrentIndex, setShowMenu, darkMode, setDarkMode }) => {
  return (
    <div
  className={`
    fixed z-50 shadow-lg ${darkMode ? "bg-[#dfb16d]" : "bg-[#766d3b]"} rounded-full 
    flex items-center justify-center
    px-4 py-2 gap-3  /* <-- ADDED px-4, changed gap-4 to gap-3 */
    bottom-4 left-1/2 -translate-x-1/2 w-fit
    flex-row
    md:top-1/2 md:left-4 md:-translate-y-1/2 md:translate-x-0 
    md:h-11/12 md:w-14 md:flex-col md:py-6 md:px-0  /* <-- reset desktop padding */
    md:max-h-screen md:overflow-y-auto
  `}
>
      {/* 🌙 Dark Mode Button */}
      <div className="flex items-center justify-center md:mb-4 px-2 md:px-0">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#dfb16d] transition duration-300"
          title={`Toggle to ${darkMode ? "Light" : "Dark"} Mode`}
        >
          <img
            src={darkMode ? lightModeIcon : darkModeIcon}
            alt={darkMode ? "Light Mode" : "Dark Mode"}
            className="w-10 h-10 rounded-full"
          />
        </button>
      </div>

      {/* ✳️ Middle Section */}
      <div className="flex flex-row md:flex-col items-center justify-center flex-1 gap-4 px-2 md:px-0">
        {/* Social Icons – Desktop only */}
        <div className="hidden md:flex">
          <SocialIcons align="center" direction="col" />
        </div>

        {/* Divider */}
        <div className="w-[2px] h-8 md:w-8 md:h-[2px] bg-[#766d3b]"></div>

        {/* Section Buttons */}
        {SECTIONS.map(({ title, icon }, idx) => (
          <button
            key={title}
            onClick={() => setCurrentIndex(idx)}
            title={title}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 border-2 ${
              currentIndex === idx
                ? "bg-[#111827] text-white scale-110"
                : "bg-[#111827] text-gray-400 hover:bg-[#dfb16d] hover:text-white"
            }`}
          >
            <img src={icon} alt={title} className="w-6 h-6 object-contain" />
          </button>
        ))}
      </div>

      {/* 🍔 Desktop Bottom Menu Button */}
      <div className="hidden md:flex w-full items-center justify-center mt-auto">
        <button
          onClick={() => setShowMenu(true)}
          title="Open Menu"
          className="w-10 h-10 rounded-full bg-[#766d3b] text-white hover:bg-[#dfb16d] transition-all duration-300 flex items-center justify-center"
        >
          <MdMenuOpen size={20} />
        </button>
      </div>
    </div>
  );
};

export default SideNav;