import IntroSection from "./IntroSection";
import OutroSection from "./OutroSection";
import ContentSection from "./ContentSection";

const DynamicContent = ({
  darkMode,
  shrinkWrapper,
  outro,
  introRef,
  outroRef,
  scrolled,
  sectionVisible,
  currentIndex,
  SECTIONS,
  contentRef,
  setShrinkWrapper,
  setOutro,
  setCurrentIndex,
  preserveIndexRef,
  currentIndexRef
}) => {
  console.log("RENDER CHECK", {
  shrinkWrapper,
  outro,
  currentIndex,
  section: SECTIONS[currentIndex]?.title || "N/A"
});
  return (
    <div
      className={`flex-1 h-full overflow-y-auto scrollbar-none pr-4 ${
        darkMode ? "bg-gray-900" : "bg-[#fdfcfc]"
      }`}
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