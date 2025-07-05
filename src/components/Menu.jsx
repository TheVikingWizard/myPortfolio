import SocialIcons from "./SocialIcons";

const Menu = ({
  darkMode,
  shrinkWrapper,
  currentIndex,
  setCurrentIndex,
  SECTIONS,
  setShowMenu,
  animateToIndex,
}) => {
  if (!shrinkWrapper) return null;

  return (
    <div
      className={`hidden md:flex relative inset-0 ${
        darkMode ? "bg-[#dfb16d]" : "bg-[#766d3b]"
      } overflow-hidden max-h-full w-full opacity-100 scale-y-100 transition-all duration-700 ease-in-out justify-center items-center flex flex-col rounded-3xl pt-4 pb-2`}
    >
      <div className="relative w-full h-full flex flex-col justify-between items-center max-w-6xl">
        {/* Section Navigation */}
        <div
          className="w-full flex-1 flex flex-col justify-center items-end gap-3 py-3"
          style={{
            paddingLeft: "clamp(3%, 4vw, 8%)", // ⬅️ slightly reduced
          }}
        >
          {SECTIONS.map(({ title, icon }, idx) => (
            <button
              key={idx}
              onClick={() => animateToIndex(idx)}
              className={`w-full flex items-center rounded-l-full transition-all duration-300 ${
                currentIndex === idx
                  ? darkMode
                    ? "bg-[#111827] scale-[1.1]"
                    : "bg-[#fdfcfc] scale-[1.1]"
                  : "bg-transparent"
              }`}
              style={{
                padding: "clamp(0.4rem, 1vw, 0.9rem)", // ⬅️ slightly reduced padding
                gap: "clamp(0.2rem, 0.8vw, 0.6rem)",   // ⬅️ slightly tighter gap
              }}
            >
              {/* Icon */}
              <img
                src={icon}
                alt={`${title} icon`}
                className="object-contain rounded-full transition-opacity duration-300"
                style={{
                  width: "clamp(1.1rem, 2vw, 1.8rem)",  // ⬅️ reduced icon size
                  height: "clamp(1.1rem, 2vw, 1.8rem)",
                  opacity: currentIndex === idx ? 1 : 0.6,
                }}
              />

              {/* Title */}
              <span
                className="font-semibold whitespace-nowrap transition-colors duration-300"
                style={{
                  fontSize: "clamp(0.75rem, 1.1vw, 1rem)",  // ⬅️ smaller font
                  color: currentIndex === idx
                    ? darkMode
                      ? "#dfb16d"
                      : "#766d3b"
                    : darkMode
                    ? "#374151"
                    : "#fdfcfc",
                }}
              >
                {title}
              </span>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div
          className={`w-5/6 border-2 ${
            darkMode ? "border-[#111827]" : "border-[#fdfcfc]"
          } rounded-full my-2`}
        ></div>

        {/* Social Icons */}
        <div className="mx-4 mt-4">
          {darkMode ? (
            <SocialIcons align="center" darkMode isMenu inverted />
          ) : (
            <SocialIcons align="center" isMenu />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;