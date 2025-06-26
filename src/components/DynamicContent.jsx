import { useRef } from "react";
import {Typewriter} from "react-simple-typewriter";
import SocialIcons from "./SocialIcons";

const DynamicContent = ({
  darkMode,
  shrinkWrapper,
  outro,
  scrolled,
  sectionVisible,
  SECTIONS,
  currentIndex,
  setShrinkWrapper,
  setCurrentIndex,
  setOutro,
  contentRef,
  introRef,
  outroRef,
}) => {
  return (
    <div
      className={`flex-1 h-full overflow-y-auto scrollbar-none pr-4 ${darkMode ? "bg-gray-900" : "bg-[#fdfcfc]"}`}
      ref={contentRef}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {!shrinkWrapper ? (
        !outro ? (
          <div
            ref={introRef}
            className={`h-full flex items-center justify-center text-left px-8 ${
              darkMode ? "bg-gray-900" : "bg-[#fdfcfc]"
            }`}
          >
            <div
              className={`text-xl ${scrolled ? "opacity-0" : "opacity-100"} ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
              style={{ width: "40rem" }}
            >
              <h2
          className={`text-5xl font-bold mb-4 ${
            darkMode ? "text-[#dfb16d]" : "text-[#dfb16d]"
          }`}
        >
          <Typewriter
            words={["Hello, I'm Rijit Singh!"]}
            typeSpeed={60}
            deleteSpeed={0}
            delaySpeed={100000} // effectively disables re-loop
            loop={1}
            cursor
            cursorStyle="|"
          />
        </h2>
              <p className="leading-relaxed mb-6">
                Versatile Software Engineer skilled in Full Stack development,
                Data Science and Machine Learning.
              </p>
              <SocialIcons align="left" />
            </div>
          </div>
        ) : (
          <div
            ref={outroRef}
            className={`h-full flex items-center justify-center text-left px-8 ${
              darkMode ? "bg-gray-900" : "bg-[#fdfcfc]"
            }`}
          >
            <div
              className={`text-xl ${scrolled ? "opacity-0" : "opacity-100"} ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
              style={{ width: "40rem" }}
            >
              <h2 className="text-5xl font-bold mb-4 text-[#dfb16d]">
                Contact Me
              </h2>
              <p className="text-lg mb-6">
                Let’s connect! I’m always open to discussing opportunities or
                collaborations.
              </p>

              <div className="mb-6">
                <p className="mb-2 font-semibold">Email</p>
                <div className="flex items-center gap-2">
                  <span className="select-all">
                    rijitsingh100@gmail.com
                  </span>
                </div>
              </div>

              <SocialIcons align="left" />

              <button
                onClick={() => {
                  window.scrollTo({ top: 20, behavior: "smooth" });
                  setTimeout(() => {
                    setShrinkWrapper(true);
                    setCurrentIndex(0);
                    setOutro(false);
                  }, 700);
                }}
                className="mt-10 mb-8 px-4 py-2 bg-[#dfb16d] text-white rounded-full shadow hover:bg-[#766d3b] transition duration-300"
              >
                ←
              </button>
            </div>
          </div>
        )
      ) : (
        <div
          className={`space-y-24 px-8 py-12 transform transition-all duration-500 ease-in-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div
            className={`min-h-full px-8 py-6 overflow-y-auto ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <h3
              className={`text-4xl font-bold mb-4 ${
                darkMode ? "text-[#dfb16d]" : "text-[#766d3b]"
              }`}
            >
              {SECTIONS[currentIndex].title}
            </h3>
            <div
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {SECTIONS[currentIndex].content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicContent;