import SocialIcons from "./SocialIcons";

const Menu = ({
  darkMode,
  shrinkWrapper,
  currentIndex,
  setCurrentIndex,
  SECTIONS,
  setShowMenu, // ✅ new prop
  animateToIndex,
}) => {
  if (!shrinkWrapper) return null;

  return (
      <div className="hidden md:flex relative inset-0 bg-[#dfb16d] overflow-hidden max-h-full w-full opacity-100 scale-y-100 transition-all duration-700 ease-in-out justify-center items-center flex flex-col rounded-3xl pt-4 pb-2" > 
        {/* ✅ Your layout preserved, just wrapped for responsiveness */} 
        <div className="relative w-full h-full flex flex-col justify-between items-center pl-4 max-w-6xl mx-auto"> 
          {/* Section Navigation */} 
          <div className="relative w-full flex-1 flex flex-col justify-center items-start gap-6 pl-6 py-4"> 
            {SECTIONS.map(({ title, icon }, idx) => ( 
            <button 
              onClick={()=>animateToIndex(idx)} 
              key={idx} 
              className={`w-full flex items-center gap-3 rounded-l-full px-4 py-2 focus:outline-none cursor-pointer transition-colors duration-300 ${currentIndex === idx ? "bg-[#111827] scale-115" : "bg-transparent"}`} 
            > 
              {/* Icon */} 
              <img 
                src={icon} 
                alt={`${title} icon`} 
                className={`w-8 h-8 object-contain rounded-full ${ currentIndex === idx ? "opacity-100" : "opacity-60" }`} 
              /> 
                <div className={`text-lg font-semibold whitespace-nowrap transition-all duration-300 ${ currentIndex === idx ? "text-[#dfb16d]" : "text-gray-700" }`} > 
                  {title} 
                </div> 
            </button> ))} 
          </div> 
        </div> 
        <div className="w-5/6 border border-[#111827]"></div>
        {/* 🔗 Social Icons */}
        <div className="mx-4 mt-4">
          {darkMode ? (
            <SocialIcons align="center" border inverted/>
          ) : (
            <SocialIcons align="center" />
          )}
        </div>
      </div>
  );
};

export default Menu;






          // {/* Section Navigation */}
          // <div className="relative w-full flex-1 flex flex-col justify-center items-start">
          //   <div className="relative left-5/6 flex flex-col items-center justify-center pt-8">
          //     <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#766d3b] rounded-full -translate-x-1/2"></div>

          //     {SECTIONS.map(({ title }, idx) => (
          //       <div key={idx} className="relative mb-10">
          //         <button
          //           onClick={() => animateToIndex(idx)}
          //           className={`absolute right-14 top-1/2 -translate-y-1/2 text-lg whitespace-nowrap transition-all duration-300 text-right focus:outline-none cursor-pointer ${
          //             currentIndex === idx
          //               ? "font-semibold text-[#766d3b] scale-125"
          //               : "text-gray-500"
          //           }`}
          //         >
          //           {title}
          //         </button>
          //         <div
          //           onClick={() => setCurrentIndex(idx)}
          //           className={`w-5 h-5 rounded-full border-2 border-[#766d3b] shadow-md cursor-pointer transition-transform duration-300 ${
          //             currentIndex === idx
          //               ? "scale-125 bg-[#766d3b]"
          //               : "bg-white dark:bg-gray-800"
          //           }`}
          //         ></div>
          //       </div>
          //     ))}
          //   </div>
          // </div>