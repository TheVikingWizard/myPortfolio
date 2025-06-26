import React from "react";
import homeIcon from "../assets/home.png"; // adjust path as needed

const ControlButtons = ({
  darkMode,
  setDarkMode,
  shrinkWrapper,
  setShrinkWrapper,
  scrolled,
  setScrolled,
  outro,
  setOutro,
  currentIndex,
  setCurrentIndex,
  animateToIndex,
  SECTIONS,
}) => {
  return (
    <>
      {shrinkWrapper && (
        <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4 items-center">
          {/* ↑ Previous Section */}
          {currentIndex > 0 && (
            <button
              onClick={() => animateToIndex(currentIndex - 1)}
              className="w-12 h-12 flex items-center justify-center bg-[#766d3b] text-white rounded-full shadow-lg hover:bg-[#dfb16d] transition-all duration-300"
              title="Previous Section"
            >
              ↑
            </button>
          )}

          {/* ↓ Next Section */}
          {currentIndex < SECTIONS.length && (
            <button
              onClick={() => {
                if (currentIndex === SECTIONS.length - 1) {
                  setOutro(true);
                  setShrinkWrapper(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  animateToIndex(currentIndex + 1);
                }
              }}
              className="w-12 h-12 flex items-center justify-center bg-[#766d3b] text-white rounded-full shadow-lg hover:bg-[#dfb16d] transition-all duration-300"
              title="Next Section"
            >
              ↓
            </button>
          )}
        </div>
      )}

      {/* 🌙 + ⬆️/⬇️/❌ — Main Button Stack */}
      <div
        className={`fixed z-50 flex flex-col gap-3 items-center ${
          shrinkWrapper ? "top-6 right-6" : "bottom-6 right-6"
        }`}
      >
        {shrinkWrapper ? (
          <>
            {/* ❌ Back to Intro */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setTimeout(() => {
                  setShrinkWrapper(false);
                  setOutro(false);
                  setScrolled(false);
                  setCurrentIndex(-1);
                }, 500);
              }}
              className={`w-12 h-12 flex items-center justify-center bg-[#dfb16d] ${
                darkMode ? "text-gray-800" : "text-[#fdfcfc]"
              } rounded-full shadow-lg hover:bg-[#5c542f] transition-all duration-300`}
              title="Back to Intro"
            >
              <img src={homeIcon} alt="Home" className="w-12 h-12 rounded-full" />
            </button>

            {/* 🌙 Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-12 h-12 flex items-center justify-center bg-[#766d3b] text-white rounded-full shadow-lg hover:bg-[#dfb16d] transition duration-300"
              title="Toggle Dark Mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </>
        ) : outro ? (
          <>
            {/* 🌙 Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-12 h-12 flex items-center justify-center bg-[#766d3b] text-white rounded-full shadow-lg hover:bg-[#dfb16d] transition duration-300"
              title="Toggle Dark Mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* 🏠 Back to Intro */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setTimeout(() => {
                  setShrinkWrapper(false);
                  setOutro(false);
                  setScrolled(false);
                  setCurrentIndex(-1);
                }, 500);
              }}
              className={`w-12 h-12 flex items-center justify-center bg-[#dfb16d] ${
                darkMode ? "text-gray-800" : "text-[#fdfcfc]"
              } rounded-full shadow-lg hover:bg-[#5c542f] transition-all duration-300`}
              title="Back to Intro"
            >
              <img src={homeIcon} alt="Home" className="w-12 h-12 rounded-full" />
            </button>
          </>
        ) : (
          <>
            {/* 🌙 Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-12 h-12 flex items-center justify-center bg-[#766d3b] text-white rounded-full shadow-lg hover:bg-[#dfb16d] transition duration-300"
              title="Toggle Dark Mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* ↓ Scroll Prompt */}
            <button
              onClick={() => window.scrollTo({ top: 20, behavior: "smooth" })}
              className={`w-12 h-12 flex items-center justify-center bg-[#dfb16d] ${
                darkMode ? "text-gray-800" : "text-[#fdfcfc]"
              } rounded-full shadow-lg hover:bg-[#5c542f] transition-all duration-300`}
              title="Scroll Down"
            >
              ↓
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ControlButtons;