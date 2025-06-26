import React from "react";
import homeIcon from "../assets/home.png"; // adjust path as needed
import contactIcon from "../assets/contact.png";

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
    {/* ⬆️⬇️ Navigation Buttons – Middle Right */}
    {shrinkWrapper && (
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
        {currentIndex > 0 && (
          <button
            onClick={() => animateToIndex(currentIndex - 1)}
            className="w-12 h-12 flex items-center justify-center bg-[#766d3b] text-white rounded-full shadow-lg hover:bg-[#dfb16d] transition-all duration-300"
            title="Previous Section"
          >
            ↑
          </button>
        )}
        {currentIndex < SECTIONS.length - 1 && (
          <button
            onClick={() => {
              animateToIndex(currentIndex + 1);
            }}
            className="w-12 h-12 flex items-center justify-center bg-[#766d3b] text-white rounded-full shadow-lg hover:bg-[#dfb16d] transition-all duration-300"
            title="Next Section"
          >
            ↓
          </button>
        )}
      </div>
    )}

    {/* ❌ Back to Intro – Top Right */}
    {shrinkWrapper && (
      <div className="fixed top-6 right-6 z-50 flex flex-col items-center gap-3">
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
      </div>
    )}

    {/* 🌙 Dark Mode Toggle & ➕ New Button – Bottom Right */}
    {shrinkWrapper && (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
        {/* 🌙 Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-12 flex items-center justify-center bg-[#766d3b] text-white rounded-full shadow-lg hover:bg-[#dfb16d] transition duration-300"
          title="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* 🆕 New Button */}
        <button
          onClick={() => {
            setOutro(true);
            setShrinkWrapper(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="w-12 h-12 flex items-center justify-center bg-[#dfb16d] text-gray-800 rounded-full shadow-lg hover:bg-[#5c542f] transition-all duration-300"
          title="New Button"
        >
          <img src={contactIcon} alt="Contact Me" className="w-12 h-12 rounded-full"/>
        </button>
      </div>
    )}

    {/* When not shrinkWrapper – original stack bottom right */}
    {!shrinkWrapper && (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-12 flex items-center justify-center bg-[#766d3b] text-white rounded-full shadow-lg hover:bg-[#dfb16d] transition duration-300"
          title="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          onClick={() => window.scrollTo({ top: 20, behavior: "smooth" })}
          className={`w-12 h-12 flex items-center justify-center bg-[#dfb16d] ${
            darkMode ? "text-gray-800" : "text-[#fdfcfc]"
          } rounded-full shadow-lg hover:bg-[#5c542f] transition-all duration-300`}
          title="Scroll Down"
        >
          ↓
        </button>
      </div>
    )}

    {/* Outro-specific controls */}
    {outro && !shrinkWrapper && (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-12 flex items-center justify-center bg-[#766d3b] text-white rounded-full shadow-lg hover:bg-[#dfb16d] transition duration-300"
          title="Toggle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

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
      </div>
    )}
  </>
);
};

export default ControlButtons;