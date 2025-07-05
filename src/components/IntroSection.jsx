import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "./SocialIcons";

const IntroSection = ({ darkMode, scrolled, introRef }) => {
  return (
<div
  ref={introRef}
  className={`h-full w-full flex flex-col justify-end md:justify-center items-center px-4 md:px-8 ${
    darkMode ? "bg-transparent" : "bg-[#fdfcfc]"
  }`}
>
  <div
    className={`text-xl w-full max-w-3xl ${
      scrolled ? "opacity-0" : "opacity-100"
    } ${
      darkMode ? "text-white" : "text-gray-800"
    } mb-0 mt-0 text-center md:text-left`}
  >
    <h2 className="text-5xl font-bold mb-4 text-[#dfb16d] mx-auto md:mx-0">
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
    <p className="leading-relaxed mb-6 mx-auto md:mx-0">
      Versatile Software Engineer skilled in Full Stack development,
      Data Science and Machine Learning.
    </p>

    {/* Mobile Only */}
    <div className="block md:hidden mt-8">
      <SocialIcons align="center" size="large"/>
    </div>

    {/* Desktop and above */}
    <div className="hidden md:block">
      <SocialIcons align="left" size="large"/>
    </div>
  </div>
</div>
  );
};

export default IntroSection;