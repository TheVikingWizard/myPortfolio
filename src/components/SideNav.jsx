import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import SocialIcons from "./SocialIcons";
import myIcon from "../assets/myLogo.png";
import myIconInv from "../assets/myLogoInv.png";
import darkModeIcon from "../assets/darkMode.png";
import lightModeIcon from "../assets/lightMode.png";
import linkedinIconMenu from "../assets/social/linkedinMenu.png";
import linkedinIconInvMenu from "../assets/social/linkedinInvMenu.png";
import githubIconMenu from "../assets/social/githubMenu.png";
import githubIconInvMenu from "../assets/social/githubInvMenu.png";
import mediumIconMenu from "../assets/social/mediumMenu.png";
import mediumIconInvMenu from "../assets/social/mediumInvMenu.png";
import downloadIconMenu from "../assets/social/downloadMenu.png";
import downloadIconInvMenu from "../assets/social/downloadInvMenu.png";

const SideNav = ({
  SECTIONS,
  setCurrentIndex,
  currentIndex,
  setShowMenu,
  darkMode,
  isMobile
}) => {
  const [socialsVisible, setSocialsVisible] = useState(false);
  const socials = [
    {
        href: "https://www.linkedin.com/in/rijit-singh-a74438182/",
        src: darkMode
            ? linkedinIconMenu
            : linkedinIconInvMenu,
        alt: "LinkedIn",
    },
    {
        href: "https://github.com/TheVikingWizard",
        src: darkMode
            ? githubIconMenu
            : githubIconInvMenu,
        alt: "GitHub",
    },
    {
        href: "https://medium.com/@singh.rijit",
        src: darkMode
            ? mediumIconMenu
            : mediumIconInvMenu,
        alt: "Medium",
    },
    {
        href: "/resume.pdf",
        src: darkMode
            ? downloadIconMenu
            : downloadIconInvMenu,
        alt: "Download Resume",
    },
  ];
  return (
    <div
      className={`
        fixed z-50 shadow-lg
        ${darkMode ? "bg-[#dfb16d]" : "bg-[#766d3b]"}
        rounded-full md:rounded-3xl
        flex items-center
        px-4 py-2
        bottom-4 left-1/2 -translate-x-1/2 w-fit max-w-[90vw]
        flex-row
        md:top-1/2 md:left-4 md:-translate-y-1/2 md:translate-x-0
        md:h-11/12 md:w-14 md:flex-col md:px-0 md:py-4
      `}
    >
      {/* 🧑 Image */}
      <div
        className="aspect-square flex-shrink-0"
        style={{
          width: "clamp(0rem, 8vw, 2.5rem)",        
          height: "clamp(0rem, 8vw, 2.5rem)",       
          "--tw-w-sm": "clamp(1.5rem, 8vw, 2.5rem)",
        }}
      >
        {!isMobile && 
          <img
            src={darkMode ? myIcon : myIconInv}
            alt="User Icon"
            className="w-full h-full object-contain rounded-full"
          />
        }
        {isMobile && 
          <button
            onClick={()=>{
              if(!socialsVisible) {setSocialsVisible(true);}
              else { setSocialsVisible(false);}
            }}
          >
            <img
              src={darkMode ? myIcon : myIconInv}
              alt="User Icon"
              className="w-full h-full object-contain rounded-full"
            />
          </button>
        }
      </div>

      {/* 🧩 Desktop Center */}
      <div className="hidden md:flex flex-col items-center justify-center flex-1 mt-4 mb-4">
        <div className="flex flex-col items-center gap-6">
          {socials.map(({href, src, alt}, idx) => (
            <button
              key={idx}
              onClick={() => window.open(href, "_blank")}
              className="w-8 h-8 rounded-full"
              title={alt}
            >
              <img 
                src={src}
                alt={alt}
                className="w-8 h-8 rounded-full hover:scale-125"
              />
            </button>
          ))}
        </div>

        {/* 📏 Divider with equal spacing */}
        <div className={`w-5/6 h-[2px] ${darkMode ? "bg-[#766d3b]" : "bg-[#fdfcfc]"} my-[2.25rem]`} />

        <div className="flex flex-col items-center gap-3">
          {SECTIONS.slice(0, 5).map(({ title, icon }, idx) => (
            <button
              key={title}
              onClick={() => setCurrentIndex(idx)}
              title={title}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? `scale-125 border-2 ${darkMode ? "border-[#111827]" : "border-[#fdfcfc]"}`
                  : ""
              }`}
            >
              <img
                src={icon}
                alt={title}
                className="w-full h-full object-contain rounded-full hover:scale-125"
              />
            </button>
          ))}
        </div>
      </div>

      {/* 📏 Mobile Divider + Section Buttons */}
      <div
        className="md:hidden flex items-center sm:gap-4 sm:ml-4"
        style={{
          "--tw-custom-gap": "clamp(0px, 1vw, 8px)", // 0px to 8px = ~0 to 0.5rem
          gap: "var(--tw-custom-gap)",
          marginLeft: "var(--tw-custom-gap)",
        }}
      >
        {/* Divider */}
        {socialsVisible && <div className="text-gray-800"><span>{'>'}</span></div>}
        {!socialsVisible && <div className={"bg-transparent w-[10px] h-6 flex justify-center"}> <div className={`w-[2px] h-6 ${darkMode ? "bg-[#766d3b]" : "bg-[#fdfcfc]"} flex-shrink-0`}/> </div>}

        {/* Section Buttons */}
        <div className="relative">
          <div className="relative z-0 flex items-center gap-1 sm:gap-3">
            {SECTIONS.slice(0, 5).map(({ title, icon }, idx) => (
              <button
                key={title}
                onClick={() => {!socialsVisible ? setCurrentIndex(idx) : undefined}}
                title={title}
                className={`${socialsVisible ? "opacity-15" : undefined} flex items-center justify-center rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? `scale-120 border-2 ${darkMode ? "border-[#111827]" : "border-[#fdfcfc]"}`
                    : ""
                }`}
                style={{
                  width: "clamp(0rem, 8vw, 2.5rem)",
                  height: "clamp(0rem, 8vw, 2.5rem)",
                }}
              >
                <img
                  src={icon}
                  alt={title}
                  className="w-full h-full object-contain rounded-full"
                />
              </button>
            ))}
            {/* Social Buttons - Mobile */}
            {socialsVisible && 
            <div className="absolute z-10 flex flex-row justify-center items-center gap-2 sm:gap-4">
              {socials.map(({href, src, alt}, idx) => (
                <button
                  key={idx}
                  href={href}
                  className="rounded-full"
                  title={alt}
                  style={{
                    width: "clamp(0rem, 8vw, 2.5rem)",
                    height: "clamp(0rem, 8vw, 2.5rem)",
                  }}
                >
                  <img 
                    src={src}
                    alt={alt}
                    className="w-full h-full rounded-full"
                  />
                </button>
              ))}
            </div>
            }
          </div>
        </div>
      </div>

      {/* 🍔 Menu Button – Desktop only */}
      <button
        onClick={() => setShowMenu(true)}
        title="Open Menu"
        className={`hidden md:flex w-10 h-10 rounded-full ${darkMode ? "bg-[#dfb16d] text-[#111827]" : "bg-[#766d3b] text-[#fdfcfc]"} items-center justify-center mt-auto`}
      >
        <MdMenuOpen size={25} className="rotate-180" />
      </button>
    </div>
  );
};

export default SideNav;









//  <div
//       className={`
//         fixed z-50 shadow-lg
//         ${darkMode ? "bg-[#dfb16d]" : "bg-[#766d3b]"}
//         rounded-full md:rounded-3xl
//         flex items-center justify-center
//         px-4 py-2 gap-3
//         bottom-4 left-1/2 -translate-x-1/2 w-11/12
//         flex-row
//         md:top-1/2 md:left-4 md:-translate-y-1/2 md:translate-x-0
//         md:h-11/12 md:w-14 md:flex-col md:py-4 md:px-0
//         md:max-h-screen md:overflow-hidden
//       `}
//     >
//       {/* 🌙 Toggle Dark Mode – Mobile only (top-left aligned) */}
//       <div className="border border-red-500 md:hidden absolute left-2 top-2 z-10">
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#dfb16d] transition duration-300"
//           title={`Toggle to ${darkMode ? "Light" : "Dark"} Mode`}
//         >
//           <img
//             src={darkMode ? lightModeIcon : darkModeIcon}
//             alt={darkMode ? "Light Mode" : "Dark Mode"}
//             className="w-10 h-10 object-contain rounded-full"
//           />
//         </button>
//       </div>

//       {/* 🧑 Icon – Desktop only */}
//       <div className="border border-red-500 hidden md:flex absolute top-2 z-10">
//         <img
//           src={darkMode ? myIcon : myIconInv}
//           alt="Rijit Singh"
//           className="hidden md:flex w-10 h-10 object-contain rounded-full mb-2 shrink-0"
//         />
//       </div>

//       {/* 🧩 Social + Divider + Section Icons */}
// <div
//   className="lex flex-row md:flex-col items-center justify-between px-2 md:px-0 my-auto
//              md:max-h-[calc(100%-6rem)] md:overflow-y-auto md:scrollbar-none"
// >

//   {/* 🧩 Social Icons - Desktop only */}
//   <div className="hidden md:flex flex-col items-center gap-3 shrink-0 overflow-hidden">
//     <SocialIcons
//       align="center"
//       direction="col"
//       inverted={darkMode}
//       size="medium"
//     />
//   </div>

//   {/* Divider */}
//   <div
//     className={`my-[clamp(0.4rem,1.25vh,0.75rem)] md:my-[clamp(0.4rem,1.25vh,0.75rem)] w-[2px] h-8 md:w-8 md:h-[2px] shrink-0 ${
//       darkMode ? "bg-[#766d3b]" : "bg-[#fdfcfc]"
//     }`}
//   ></div>

//   {/* 📌 Section Icons */}
//   <div className="w-full flex md:flex-col justify-end md:justify-center items-center gap-[clamp(0.4rem,1.25vh,0.75rem)]">
//     {SECTIONS.map(({ title, icon }, idx) => (
//       <button
//         key={title}
//         onClick={() => setCurrentIndex(idx)}
//         title={title}
//         className={`border border-red-500 w-10 h-10 flex items-center justify-center rounded-full shrink-0 overflow-hidden transition-all duration-300`}
//       >
//         <img
//           src={icon}
//           alt={title}
//           className="w-full h-full max-w-full max-h-full object-contain rounded-full"
//         />
//       </button>
//     ))}
//   </div>
// </div>

//       {/* 🍔 Menu Button – Desktop only */}
//       <div className="border border-red-500 hidden md:flex absolute bottom-2 z-10">
//         <button
//           onClick={() => setShowMenu(true)}
//           title="Open Menu"
//           className={`w-10 h-10 rounded-full ${
//             darkMode ? "bg-[#dfb16d] text-[#111827]" : "bg-[#766d3b] text-[#fdfcfc]"
//           } transition-all duration-300 flex items-center justify-center`}
//         >
//           <MdMenuOpen size={25} className="rotate-180" />
//         </button>
//       </div>
//     </div>