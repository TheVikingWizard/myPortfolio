import SocialIcons from "./SocialIcons";
import arrowIcon from "../assets/arrow.png";
import arrowIcon2 from "../assets/arrowInv.png";

const OutroSection = ({
  darkMode,
  scrolled,
  setScrolled,
  outroRef,
  setShrinkWrapper,
  setCurrentIndex,
  setOutro,
  preserveIndexRef,
  currentIndexRef,
}) => {
  return (
    <div
      ref={outroRef}
      className={`h-full flex items-center justify-center text-left px-8 ${
        darkMode ? "bg-gray-900" : "bg-[#fdfcfc]"
      }`}
    >
      <div
        className={`text-xl w-full ${
          scrolled ? "opacity-0" : "opacity-100"
        } ${darkMode ? "text-white" : "text-gray-800"} mb-0 mt-0 text-center md:text-left`}
        style={{ width: "40rem" }}
      >
        {/* Combined Button + Heading Row */}
        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
          <button
            onClick={() => {
              window.scrollTo({ top: 20, behavior: "smooth" });
              setTimeout(() => {
                preserveIndexRef.current = true;
                setCurrentIndex(currentIndexRef.current);
                setShrinkWrapper(true);
                setOutro(false);
                setScrolled(true);
              }, 700);
            }}
            className="w-10 h-10 flex items-center justify-center rounded-full transition duration-300"
          >
            <img
              src={darkMode ? arrowIcon : arrowIcon2}
              alt="Go Back"
              className="w-10 h-10 rounded-full rotate-270"
            />
          </button>

          <h2 className="text-4xl md:text-5xl font-bold text-[#dfb16d]">Contact Me</h2>
        </div>

        {/* Content Block */}
        <p className="text-lg md:ml-16 mb-6">
          Let’s connect! I’m always open to discussing opportunities or
          collaborations.
        </p>

        <div className="mb-6 md:ml-16">
          <p className="leading-relaxed mb-6 mx-auto md:mx-0 gap-2"><span className="font-semibold">Email :</span><span className="ml-6">rijitsingh100@gmail.com</span></p>
        </div>

        {/* Mobile Only */}
        <div className="block md:hidden mt-8">
          <SocialIcons align="center" size="large"/>
        </div>

        {/* Desktop and above */}
        <div className="hidden md:block md:ml-16">
          <SocialIcons align="left" size="large"/>
        </div>
      </div>
    </div>
  );
};

export default OutroSection;