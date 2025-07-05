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
  animateToIndex,
  showMenu,
  setShowMenu,
  isMobile,
  delayedShowContent,
}) => {
  return (
    <div
      className={`border border-yellow-500 flex-1 overflow-y-auto scrollbar-none mt-20 ${shrinkWrapper ? "h-[calc(100vh-10rem)] mb-20" : "h-[calc(55vh-5rem)] mb-0"} md:h-full md:mt-0 md:mb-0 ${
        darkMode ? "bg-gray-900" : "bg-[#fdfcfc]"
      }
      `}
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
          setShowMenu={setShowMenu}
          isMobile={isMobile}
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

      {shrinkWrapper && delayedShowContent && !outro && (
        <ContentSection
          darkMode={darkMode}
          sectionVisible={sectionVisible}
          currentIndex={currentIndex}
          SECTIONS={SECTIONS}
          shrinkWrapper={shrinkWrapper}
        />
      )}

    </div>
  );
};

export default DynamicContent;