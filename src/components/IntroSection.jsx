import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "./SocialIcons";

const IntroSection = ({ darkMode, scrolled, introRef }) => {
  return (
    <div
      ref={introRef}
      className={`h-full w-full flex items-center md:justify-center justify-start text-left px-4 md:px-8 ${
        darkMode ? "bg-gray-900" : "bg-[#fdfcfc]"
      }`}
    >
      <div
        className={`text-xl ${
          scrolled ? "opacity-0" : "opacity-100"
        } border border-gray-500 ${
          darkMode ? "text-white" : "text-gray-800"
        } mb-0 md:mb-0 mt-auto md:mt-0`} // This moves it down only on mobile
        style={{ width: "40rem" }}
      >
        <h2 className="text-5xl font-bold mb-4 text-[#dfb16d]">
          <Typewriter
            words={["Hello, I'm Rijit Singh!"]}
            typeSpeed={60}
            deleteSpeed={0}
            delaySpeed={100000}
            loop={1}
            cursor
            cursorStyle="|"
          />
        </h2>
        <p className="leading-relaxed mb-6">
          Versatile Software Engineer skilled in Full Stack development,
          Data Science and Machine Learning.
        </p>

        {/* Mobile Only */}
        <div className="block md:hidden mt-16">
          <SocialIcons align="center" />
        </div>

        {/* Desktop and above */}
        <div className="hidden md:block">
          <SocialIcons align="left" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;