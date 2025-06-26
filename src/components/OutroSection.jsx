import SocialIcons from "./SocialIcons";

const OutroSection = ({darkMode, scrolled, outroRef,setShrinkWrapper,setCurrentIndex,setOutro,preserveIndexRef,currentIndexRef}) => {
    return (
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
      preserveIndexRef.current = true;
      setCurrentIndex(currentIndexRef.current);  // 👈 this must come BEFORE
      setShrinkWrapper(true);                    // 👈 this must come AFTER
      setOutro(false);
    }, 700);
  }}
                className="mt-10 mb-8 px-4 py-2 bg-[#dfb16d] text-white rounded-full shadow hover:bg-[#766d3b] transition duration-300"
                >
                ←
                </button>
            </div>
        </div>
    );
};

export default OutroSection;