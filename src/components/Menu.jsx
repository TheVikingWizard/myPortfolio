import SocialIcons from "./SocialIcons";

const Menu = ({
  darkMode,
  shrinkWrapper,
  currentIndex,
  setCurrentIndex,
  SECTIONS,
  setShowMenu, // ✅ new prop
  animateToIndex,
}) => {
  if (!shrinkWrapper) return null;

  return (
      <div
        className="hidden md:flex absolute left-6 right-6 bottom-6 border border-red-500 bg-[#dfb16d]
                  overflow-hidden origin-bottom z-40 h-[calc(100%-19.5rem)] 
                  opacity-100 scale-y-100 transition-all duration-700 ease-in-out 
                  justify-center items-center flex flex-col rounded-3xl py-6"
      >
        {/* ✅ Your layout preserved, just wrapped for responsiveness */}
        <div className="relative w-full h-full flex flex-col justify-between items-center max-w-6xl mx-auto">

          {/* 🔗 Social Icons */}
          {darkMode ? (
            <SocialIcons align="center" />
          ) : (
            <SocialIcons align="center" />
          )}

          {/* Section Navigation */}
          <div className="relative w-full flex-1 flex flex-col justify-center items-start">
            <div className="relative left-5/6 flex flex-col items-center justify-center pt-8">
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#766d3b] rounded-full -translate-x-1/2"></div>

              {SECTIONS.map(({ title }, idx) => (
                <div key={idx} className="relative mb-10">
                  <button
                    onClick={() => animateToIndex(idx)}
                    className={`absolute right-14 top-1/2 -translate-y-1/2 text-lg whitespace-nowrap transition-all duration-300 text-right focus:outline-none cursor-pointer ${
                      currentIndex === idx
                        ? "font-semibold text-[#766d3b] scale-125"
                        : "text-gray-500"
                    }`}
                  >
                    {title}
                  </button>
                  <div
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-5 h-5 rounded-full border-2 border-[#766d3b] shadow-md cursor-pointer transition-transform duration-300 ${
                      currentIndex === idx
                        ? "scale-125 bg-[#766d3b]"
                        : "bg-white dark:bg-gray-800"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* ⬅️ Back Button */}
          <button
            onClick={() => setShowMenu(false)}
            className="mt-6 w-10 h-10 rounded-full bg-[#766d3b] text-white hover:bg-[#dfb16d] transition-all duration-300 flex items-center justify-center"
            title="Back to SideNav"
          >
            ←
          </button>
        </div>
      </div>
  );
};

export default Menu;