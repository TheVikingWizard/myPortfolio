import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "./SocialIcons";

const IntroSection = ({ darkMode, scrolled, introRef }) => {
  return (
    <div
      ref={introRef}
      className={`h-full flex items-center justify-center text-left px-8 ${
        darkMode ? "bg-gray-900" : "bg-[#fdfcfc]"
      }`}
    >
      <div
        className={`text-xl ${scrolled ? "opacity-0" : "opacity-100"} border border-gray-500 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
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
        <SocialIcons align="left" />
      </div>
    </div>
  );
};

export default IntroSection;