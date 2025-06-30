import IntroSection from "./IntroSection";
import OutroSection from "./OutroSection";
import ContentSection from "./ContentSection";
import ControlButtons from "./ControlButtons";

const DynamicContent = ({
  darkMode,
  shrinkWrapper,
  outro,
  introRef,
  outroRef,
  darkModeRef,
  scrolled,
  sectionVisible,
  currentIndex,
  SECTIONS,
  contentRef,
  setShrinkWrapper,
  setOutro,
  setCurrentIndex,
  preserveIndexRef,
  currentIndexRef,
  setDarkMode,
  setScrolled,
  animateToIndex
}) => {
  console.log("RENDER CHECK", {
  shrinkWrapper,
  outro,
  currentIndex,
  section: SECTIONS[currentIndex]?.title || "N/A"
});
  return (
    <div
      className={`flex-1 h-full overflow-y-auto scrollbar-none ${scrolled ? "ml-18" : ""} pr-18 ${
        darkMode ? "bg-gray-900" : "bg-[#fdfcfc]"
      } border border-red-500`}
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

      {/* Control Buttons */}
        <ControlButtons
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          shrinkWrapper={shrinkWrapper}
          setShrinkWrapper={setShrinkWrapper}
          scrolled={scrolled}
          setScrolled={setScrolled}
          outro={outro}
          setOutro={setOutro}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          animateToIndex={animateToIndex}
          SECTIONS={SECTIONS}
          preserveIndexRef={preserveIndexRef}
          currentIndexRef={currentIndexRef}
        />

      {!shrinkWrapper && !outro && (
        <IntroSection
          darkMode={darkMode}
          scrolled={scrolled}
          introRef={introRef}
        />
      )}

      {!shrinkWrapper && outro && (
        <OutroSection
          darkMode={darkMode}
          scrolled={scrolled}
          introRef={outroRef}
          setShrinkWrapper={setShrinkWrapper}
          setCurrentIndex={setCurrentIndex}
          setOutro={setOutro}
          preserveIndexRef={preserveIndexRef}
          currentIndexRef={currentIndexRef}
        />
      )}

      {shrinkWrapper && !outro && (
        <ContentSection
          darkMode={darkMode}
          sectionVisible={sectionVisible}
          currentIndex={currentIndex}
          SECTIONS={SECTIONS}
        />
      )}

    </div>
  );
};

export default DynamicContent;