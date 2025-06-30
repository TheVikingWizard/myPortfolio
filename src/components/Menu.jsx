import SocialIcons from "./SocialIcons";

const Menu = ({ darkMode, shrinkWrapper, currentIndex, setCurrentIndex, SECTIONS }) => {
    if (!shrinkWrapper) return null;

    return (
        <div
            className="absolute left-0 bottom-0 w-full px-4 overflow-hidden origin-bottom z-40
                       h-[calc(100%-19.5rem)] mt-[1rem] opacity-100 scale-y-100 transition-all duration-700 ease-in-out border border-red-500"
        >
            <div
                className={`w-[17.5rem] h-full ${darkMode ? "bg-[#111827]" : "bg-[#fdfcfc]"} flex flex-col items-center py-6`}
            >
                {/* 🔗 Social Icons Row */}
                {darkMode ? <SocialIcons align="center" inverted /> : <SocialIcons align="center" />}

                {/* Section Navigation */}
                <div className="relative w-full flex-1 flex flex-col justify-center items-start border border-green-500">
                    <div className="relative left-5/6 flex flex-col items-center justify-center pt-8 border borderr-red-500">
                        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#766d3b] rounded-full -translate-x-1/2"></div>

                        {SECTIONS.map(({ title }, idx) => (
                            <div key={idx} className="relative mb-10">
                                <button
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`absolute right-14 top-1/2 -translate-y-1/2 text-lg whitespace-nowrap transition-all duration-300 text-right focus:outline-none cursor-pointer ${
                                        currentIndex === idx
                                            ? "font-semibold text-[#dfb16d] scale-125"
                                            : "text-gray-500"
                                    }`}
                                >
                                    {title}
                                </button>
                                <div
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-5 h-5 rounded-full border-2 border-[#766d3b] shadow-md cursor-pointer transition-transform duration-300 ${
                                        currentIndex === idx
                                            ? "scale-125 bg-[#766d3b]"
                                            : "bg-white dark:bg-gray-800"
                                    }`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
