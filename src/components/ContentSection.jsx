const ContentSection = ({
  darkMode,
  darkModeRef,
  sectionVisible,
  currentIndex,
  SECTIONS,
  shrinkWrapper,
}) => {
  return (
    <div
      className={`pt-2 md:py-12 transform transition-all duration-500 ease-in-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${shrinkWrapper ? "md:ml-0 md:mr-18" : "mr-0"}`}
    >
      <div
        className={`min-h-full pl-8 pr-8 pb-4 md:py-0 overflow-y-auto ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        <h3
          className="text-4xl font-bold mt-4 mb-4 text-[#dfb16d]"
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