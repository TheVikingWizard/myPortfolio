// import { useEffect, useState, useRef } from "react";
// import Navbar from "../components/Navbar";
// import SideNav from "../components/SideNav";
// import AboutMeContent from "../components/sections/AboutMeContent";
// import EducationContent from "../components/sections/EducationContent";
// import ExperienceContent from "../components/sections/ExperienceContent";
// import SkillsContent from "../components/sections/SkillsContent";
// import ProjectsContent from "../components/sections/ProjectsContent";
// import DynamicContent from "../components/DynamicContent";
// import ProfileImage from "../components/ProfileImage";
// import Menu from "../components/Menu";
// import experienceIcon from "../assets/experience.png";

// function Home() {
//     const [scrolled, setScrolled] = useState(false);
//     const [shrinkWrapper, setShrinkWrapper] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [sectionVisible, setSectionVisible] = useState(true); 
//     const [showMenu, setShowMenu] = useState(true);
//     const [darkMode, setDarkMode] = useState(true);
//     const [outro, setOutro] = useState(false);
//     const preserveIndexRef = useRef(false);
//     const profileRef = useRef(null);
//     const contentRef = useRef(null);
//     const introRef = useRef(null);
//     const outroRef = useRef(null);
//     const currentIndexRef = useRef(currentIndex);
//     const isMobile = window.matchMedia("(max-width: 767px)").matches;

//     const SECTIONS = [
//     { id: "about", title: "About Me", content: <AboutMeContent darkMode={darkMode}/>, icon: experienceIcon},
//     { id: "skills", title: "Skills", content: <SkillsContent darkMode={darkMode}/>, icon: experienceIcon},
//     { id: "education", title: "Education", content: <EducationContent darkMode={darkMode}/>, icon: experienceIcon},
//     { id: "experience", title: "Experience", content: <ExperienceContent darkMode={darkMode}/>, icon: experienceIcon},
//     { id: "projects", title: "Projects", content: <ProjectsContent darkMode={darkMode}/>, icon: experienceIcon}
//     ];
    
//     useEffect(() => {
//         window.scrollTo(0, 0); 
//     }, []);

//      useEffect(() => {
//         currentIndexRef.current = currentIndex;
//     }, [currentIndex]);

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 10);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     useEffect(() => {
//         setShowMenu(!isMobile); // false on mobile, true otherwise
//     }, []);
    
//     useEffect(() => {
//         if (scrolled) {
//             const timer = setTimeout(() => {
//                 setShrinkWrapper(true);
//                 if (!preserveIndexRef.current) {
//                     setCurrentIndex(0);
//                 } else {
//                     preserveIndexRef.current = false; // reset flag after use
//                 }
//             }, 1000);
//             return () => clearTimeout(timer);
//         } else {
//             setShrinkWrapper(false);
//         }
//     }, [scrolled]);
    
//     useEffect(() => {
//         const intro = introRef.current;
//         if (!shrinkWrapper && !outro && intro && !intro.classList.contains("has-faded")) {
//             intro.classList.remove("opacity-100");
//             intro.classList.add("opacity-0");
//             setTimeout(() => {
//                 intro.classList.add("transition-opacity", "duration-700", "opacity-100", "has-faded");
//             }, 50);
//         }
//     }, [shrinkWrapper, outro]);
    
//     useEffect(() => {
//         const outro = outroRef.current;
//         if (outro && outro.classList && !outro.classList.contains("has-faded")) {
//             outro.classList.remove("opacity-100");
//             outro.classList.add("opacity-0");
//             setTimeout(() => {
//                 outro.classList.add("transition-opacity", "duration-700", "opacity-100", "has-faded");
//             }, 50);
//         }
//     }, [outro]);
    
//     useEffect(() => {
//         if (shrinkWrapper) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "auto";
//         }
//     }, [shrinkWrapper]);
    
//     useEffect(() => {
//         const container = contentRef.current;
//         const preventOuterScroll = (e) => {
//             if (shrinkWrapper && !outro && container) {
//                 const isAtTop = container.scrollTop <= 0 && e.deltaY < 0;
//                 const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight && e.deltaY > 0;
//                 if (isAtTop || isAtBottom) {
//                     e.preventDefault(); 
//                 }
//             }
//         };
//         if (shrinkWrapper && !outro) {
//             container?.addEventListener("wheel", preventOuterScroll, { passive: false });
//         }
//         return () => {
//             container?.removeEventListener("wheel", preventOuterScroll);
//         };
//     }, [shrinkWrapper, outro]);
    
//     useEffect(() => {
//         const preventScroll = (e) => {
//             if (outro) {
//                 e.preventDefault();
//             }
//         };
//         if (outro) {
//             window.addEventListener("wheel", preventScroll, { passive: false });
//             window.addEventListener("touchmove", preventScroll, { passive: false });
//         }
//         return () => {
//             window.removeEventListener("wheel", preventScroll);
//             window.removeEventListener("touchmove", preventScroll);
//         };
//     }, [outro]);
    
//     useEffect(() => {
//         if (contentRef.current) {
//             contentRef.current.scrollTop = 0;
//         }
//     }, [currentIndex]);

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 768) {
//             setShowMenu(false); // auto-close menu on mobile view
//             }
//     };

//   handleResize(); // trigger on first load
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);
    
//     const animateToIndex = (newIndex) => {
//         setSectionVisible(false);
//         setTimeout(() => {
//             setCurrentIndex(newIndex);
//             setSectionVisible(true);
//         }, 900); 
//     };

// return (
//   <>
//     <Navbar scrolled={scrolled} darkMode={darkMode} setDarkMode={setDarkMode} />
//     <div className="w-full min-h-screen pt-24">
//       <section
//         className={`fixed top-0 left-0 w-full h-[100dvh] flex flex-col md:flex-row items-center items-start justify-between gap-0 ${
//           darkMode ? "bg-gray-900 text-white" : "bg-[#fdfcfc] text-black"
//         } overflow-hidden`}
//       >

//         {/* Profile + Menu Section */}
//         <div
//             onWheel={(e) => {
//                 if (shrinkWrapper) {
//                 e.preventDefault();
//                 }
//             }}
//             className={`order-2 md:order-1 relative flex-shrink-0 transition-all duration-700 ease-in-out ${
//                 !shrinkWrapper
//                 ? "aspect-square w-full h-9/20 md:w-1/2 md:h-full"
//                 : showMenu
//                 ? "w-1/5 h-full"
//                 : "w-full md:w-0 h-full"
//             }`}
//         >
//           <ProfileImage
//             darkMode={darkMode}
//             scrolled={scrolled}
//             shrinkWrapper={shrinkWrapper}
//             profileRef={profileRef}
//             showMenu={showMenu}
//           />

//           {shrinkWrapper && !showMenu && (
//             <SideNav
//                 SECTIONS={SECTIONS}
//                 currentIndex={currentIndex}
//                 setCurrentIndex={setCurrentIndex}
//                 setShowMenu={setShowMenu}
//                 darkMode={darkMode}
//                 setDarkMode={setDarkMode}
//             />
//           )}

//           {shrinkWrapper && showMenu && (
//             <Menu
//                 darkMode={darkMode}
//                 shrinkWrapper={shrinkWrapper}
//                 currentIndex={currentIndex}
//                 setCurrentIndex={setCurrentIndex}
//                 SECTIONS={SECTIONS}
//                 setShowMenu={setShowMenu}
//                 animateToIndex={animateToIndex}
//             />
//           )}
//         </div>

//         {/* DynamicContent always rendered, visibility toggled */}
//         <div className={`order-1 md:order-2 flex-1 ${
//             !shrinkWrapper
//             ? "w-full h-11/20 md:w-1/2 md:h-full"
//             : showMenu
//             ? "h-full"
//             : "w-full h-full md:w-[calc(100%-6.5rem)] md:ml-[6.5rem]"
//           }`}
//         >
//           <DynamicContent
//             darkMode={darkMode}
//             shrinkWrapper={shrinkWrapper}
//             outro={outro}
//             scrolled={scrolled}
//             sectionVisible={sectionVisible}
//             SECTIONS={SECTIONS}
//             currentIndex={currentIndex}
//             preserveIndexRef={preserveIndexRef}
//             currentIndexRef={currentIndexRef}
//             setShrinkWrapper={setShrinkWrapper}
//             setCurrentIndex={setCurrentIndex}
//             setOutro={setOutro}
//             contentRef={contentRef}
//             introRef={introRef}
//             outroRef={outroRef}
//             setDarkMode={setDarkMode}
//             setScrolled={setScrolled}
//             animateToIndex={animateToIndex}
//             showMenu={showMenu}
//             setShowMenu={setShowMenu}
//             isMobile={isMobile}
//           />
//         </div>
//       </section>

//       <div className="h-[950px] bg-transparent"></div>
//     </div>
//   </>
// );
// }

// export default Home;

import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import AboutMeContent from "../components/sections/AboutMeContent";
import EducationContent from "../components/sections/EducationContent";
import ExperienceContent from "../components/sections/ExperienceContent";
import SkillsContent from "../components/sections/SkillsContent";
import ProjectsContent from "../components/sections/ProjectsContent";
import DynamicContent from "../components/DynamicContent";
import ProfileImage from "../components/ProfileImage";
import Menu from "../components/Menu";
import experienceIcon from "../assets/experience.png";

function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [shrinkWrapper, setShrinkWrapper] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sectionVisible, setSectionVisible] = useState(true); 
    const [showMenu, setShowMenu] = useState(true);
    const [darkMode, setDarkMode] = useState(true);
    const [outro, setOutro] = useState(false);
    const preserveIndexRef = useRef(false);
    const profileRef = useRef(null);
    const contentRef = useRef(null);
    const introRef = useRef(null);
    const outroRef = useRef(null);
    const currentIndexRef = useRef(currentIndex);
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const SECTIONS = [
    { id: "about", title: "About Me", content: <AboutMeContent darkMode={darkMode}/>, icon: experienceIcon},
    { id: "skills", title: "Skills", content: <SkillsContent darkMode={darkMode}/>, icon: experienceIcon},
    { id: "education", title: "Education", content: <EducationContent darkMode={darkMode}/>, icon: experienceIcon},
    { id: "experience", title: "Experience", content: <ExperienceContent darkMode={darkMode}/>, icon: experienceIcon},
    { id: "projects", title: "Projects", content: <ProjectsContent darkMode={darkMode}/>, icon: experienceIcon}
    ];
    
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

     useEffect(() => {
        currentIndexRef.current = currentIndex;
    }, [currentIndex]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setShowMenu(!isMobile); // false on mobile, true otherwise
    }, []);
    
    useEffect(() => {
        if (scrolled) {
            const timer = setTimeout(() => {
                setShrinkWrapper(true);
                if (!preserveIndexRef.current) {
                    setCurrentIndex(0);
                } else {
                    preserveIndexRef.current = false; // reset flag after use
                }
            }, 1500);
            return () => clearTimeout(timer);
        } else {
            setShrinkWrapper(false);
        }
    }, [scrolled]);
    
    useEffect(() => {
        const intro = introRef.current;
        if (!shrinkWrapper && !outro && intro && !intro.classList.contains("has-faded")) {
            intro.classList.remove("opacity-100");
            intro.classList.add("opacity-0");
            setTimeout(() => {
                intro.classList.add("transition-opacity", "duration-700", "opacity-100", "has-faded");
            }, 50);
        }
    }, [shrinkWrapper, outro]);
    
    useEffect(() => {
        const outro = outroRef.current;
        if (outro && outro.classList && !outro.classList.contains("has-faded")) {
            outro.classList.remove("opacity-100");
            outro.classList.add("opacity-0");
            setTimeout(() => {
                outro.classList.add("transition-opacity", "duration-700", "opacity-100", "has-faded");
            }, 50);
        }
    }, [outro]);
    
    useEffect(() => {
        if (shrinkWrapper) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [shrinkWrapper]);
    
    useEffect(() => {
        const container = contentRef.current;
        const preventOuterScroll = (e) => {
            if (shrinkWrapper && !outro && container) {
                const isAtTop = container.scrollTop <= 0 && e.deltaY < 0;
                const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight && e.deltaY > 0;
                if (isAtTop || isAtBottom) {
                    e.preventDefault(); 
                }
            }
        };
        if (shrinkWrapper && !outro) {
            container?.addEventListener("wheel", preventOuterScroll, { passive: false });
        }
        return () => {
            container?.removeEventListener("wheel", preventOuterScroll);
        };
    }, [shrinkWrapper, outro]);
    
    useEffect(() => {
        const preventScroll = (e) => {
            if (outro) {
                e.preventDefault();
            }
        };
        if (outro) {
            window.addEventListener("wheel", preventScroll, { passive: false });
            window.addEventListener("touchmove", preventScroll, { passive: false });
        }
        return () => {
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
        };
    }, [outro]);
    
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [currentIndex]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
            setShowMenu(false); // auto-close menu on mobile view
            }
        };
        handleResize(); // trigger on first load
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const animateToIndex = (newIndex) => {
        setSectionVisible(false);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setSectionVisible(true);
        }, 900); 
    };

return (
  <>
    <Navbar scrolled={scrolled} darkMode={darkMode} />
    <div className="w-full min-h-screen pt-24">
<section
  className={`fixed top-0 left-0 w-full h-[100dvh] flex flex-col md:flex-row items-center items-start justify-between gap-0 ${
    darkMode ? "bg-gray-900 text-white" : "bg-[#fdfcfc] text-black"
  } overflow-hidden`}
>

        {/* Profile + Menu Section */}
        <div
            onWheel={(e) => {
                if (shrinkWrapper) {
                e.preventDefault();
                }
            }}
            className={`order-2 md:order-1 relative flex-shrink-0 transition-all duration-700 ease-in-out ${
  !shrinkWrapper
    ? "aspect-square w-full h-9/20 md:w-1/2 md:h-full"
    : showMenu
    ? "w-1/5 h-full"
    : "w-full h-0 md:w-0 md:h-full"
}`}
        >
          <ProfileImage
            darkMode={darkMode}
            scrolled={scrolled}
            shrinkWrapper={shrinkWrapper}
            profileRef={profileRef}
            showMenu={showMenu}
          />

          {shrinkWrapper && !showMenu && (
            <SideNav
                SECTIONS={SECTIONS}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                setShowMenu={setShowMenu}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
          )}

          {shrinkWrapper && showMenu && (
            <Menu
                darkMode={darkMode}
                shrinkWrapper={shrinkWrapper}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                SECTIONS={SECTIONS}
                setShowMenu={setShowMenu}
                animateToIndex={animateToIndex}
            />
          )}
        </div>

        {/* DynamicContent always rendered, visibility toggled */}
        <div className={`order-1 md:order-2 flex-1 ${
            !shrinkWrapper
            ? "w-full h-1/2 md:w-1/2 md:h-full"
            : showMenu
            ? "h-full"
            : "w-full h-full md:w-[calc(100%-6.5rem)] md:ml-[6.5rem]"
          }`}
        >
          <DynamicContent
            darkMode={darkMode}
            shrinkWrapper={shrinkWrapper}
            outro={outro}
            scrolled={scrolled}
            sectionVisible={sectionVisible}
            SECTIONS={SECTIONS}
            currentIndex={currentIndex}
            preserveIndexRef={preserveIndexRef}
            currentIndexRef={currentIndexRef}
            setShrinkWrapper={setShrinkWrapper}
            setCurrentIndex={setCurrentIndex}
            setOutro={setOutro}
            contentRef={contentRef}
            introRef={introRef}
            outroRef={outroRef}
            setDarkMode={setDarkMode}
            setScrolled={setScrolled}
            animateToIndex={animateToIndex}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            isMobile={isMobile}
          />
        </div>
      </section>

      <div className="h-[950px] bg-transparent"></div>
    </div>
  </>
);
}

export default Home;