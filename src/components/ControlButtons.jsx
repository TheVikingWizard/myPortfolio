import homeIcon from "../assets/home.png"; // adjust path as needed
import homeIcon2 from "../assets/homeInv.png"; // adjust path as needed
import darkModeIcon from "../assets/darkMode.png";
import lightModeIcon from "../assets/lightMode.png";
import contactIcon from "../assets/contact.png";
import contactIcon2 from "../assets/contactInv.png";
import arrowIcon from "../assets/arrow.png";
import arrowIcon2 from "../assets/arrowInv.png";

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
  preserveIndexRef,
  currentIndexRef,
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
            <img src={darkMode ? arrowIcon2 : arrowIcon} alt="Previous Section" className="w-12 h-12 rounded-full" />
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
            <img src={darkMode ? arrowIcon2 : arrowIcon} alt="Next Section" className="w-12 h-12 rounded-full rotate-180" />
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
          <img src={darkMode ? homeIcon : homeIcon2} alt="Home" className="w-12 h-12 rounded-full" />
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
          title = {`Toggle to ${darkMode ? "Light" : "Dark"} Mode`}
        >
          <img src={darkMode ? lightModeIcon : darkModeIcon} alt={darkMode ? "Light Mode" : "Dark Mode"} className="w-12 h-12 rounded-full"/>
        </button>

        {/* 🆕 New Button */}
        <button
          onClick={() => {
            setOutro(true);
            setShrinkWrapper(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="w-12 h-12 flex items-center justify-center bg-[#dfb16d] text-gray-800 rounded-full shadow-lg hover:bg-[#5c542f] transition-all duration-300"
          title="Contact Me"
        >
          <img src={darkMode ? contactIcon : contactIcon2} alt="Contact Me" className="w-12 h-12 rounded-full"/>
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
          <img src={darkMode ? lightModeIcon : darkModeIcon} alt={darkMode ? "Light Mode" : "Dark Mode"} className="w-12 h-12 rounded-full"/>
        </button>

        <button
          onClick={() => window.scrollTo({ top: 20, behavior: "smooth" })}
          className={`w-12 h-12 flex items-center justify-center bg-[#dfb16d] ${
            darkMode ? "text-gray-800" : "text-[#fdfcfc]"
          } rounded-full shadow-lg hover:bg-[#5c542f] transition-all duration-300`}
          title="Scroll Down"
        >
          <img src={arrowIcon} alt="Next" className="w-12 h-12 rounded-full rotate-180"/>
        </button>
      </div>
    )}

    {/* Outro-specific controls */}
    {outro && !shrinkWrapper && (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
        <button
          onClick={() => {
            window.scrollTo({ top: 20, behavior: "smooth" });
            setTimeout(() => {
              preserveIndexRef.current = true;
              setCurrentIndex(currentIndexRef.current);  // 👈 this must come BEFORE
              setShrinkWrapper(true);                    // 👈 this must come AFTER
              setOutro(false);
            }, 700);
          }}
          className="w-12 h-12 flex items-center justify-center bg-[#766d3b] text-white rounded-full shadow-lg hover:bg-[#dfb16d] transition duration-300"
        >
          <img src={darkMode ? arrowIcon2 : arrowIcon} alt="Go Back" className="w-12 h-12 rounded-full rotate-270" />
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-12 flex items-center justify-center bg-[#766d3b] text-white rounded-full shadow-lg hover:bg-[#dfb16d] transition duration-300"
          title="Toggle Dark Mode"
        >
          <img src={darkMode ? lightModeIcon : darkModeIcon} alt={darkMode ? "Light Mode" : "Dark Mode"} className="w-12 h-12 rounded-full"/>
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
          <img src={darkMode ? homeIcon : homeIcon2} alt="Home" className="w-12 h-12 rounded-full" />
        </button>
      </div>
    )}
  </>
);
};

export default ControlButtons;