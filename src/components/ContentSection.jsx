const ContentSection = ({
  darkMode,
  darkModeRef,
  sectionVisible,
  currentIndex,
  SECTIONS,
}) => {
  return (
    <div
      className={`space-y-24 px-8 py-12 transform transition-all duration-500 ease-in-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } border border-green-500`}
    >
      <div
        className={`min-h-full px-8 py-6 overflow-y-auto ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        <h3
          className="text-4xl font-bold mb-4 text-[#dfb16d]"
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
  );
};

export default ContentSection;