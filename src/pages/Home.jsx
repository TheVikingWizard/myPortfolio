import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import AboutMeContent from "../components/sections/AboutMeContent";
import EducationContent from "../components/sections/EducationContent";
import ExperienceContent from "../components/sections/ExperienceContent";
import SkillsContent from "../components/sections/SkillsContent";
import ProjectsContent from "../components/sections/ProjectsContent";
import ControlButtons from "../components/ControlButtons";
import DynamicContent from "../components/DynamicContent";
import ProfileImage from "../components/ProfileImage";
import Menu from "../components/Menu";


const SECTIONS = [
  { id: "about", title: "About Me", content: <AboutMeContent />},
  { id: "skills", title: "Skills", content: <SkillsContent />},
  { id: "education", title: "Education", content: <EducationContent />},
  { id: "experience", title: "Experience", content: <ExperienceContent /> },
  { id: "projects", title: "Projects", content: <ProjectsContent />}
];

function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [shrinkWrapper, setShrinkWrapper] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sectionVisible, setSectionVisible] = useState(true); 
    const [darkMode, setDarkMode] = useState(true);
    const [outro, setOutro] = useState(false);
    const profileRef = useRef(null);
    const contentRef = useRef(null);
    const introRef = useRef(null);
    const outroRef = useRef(null);
    
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    useEffect(() => {
        if (scrolled) {
            const timer = setTimeout(() => {
                setShrinkWrapper(true);
                setCurrentIndex(0);
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
    
    const animateToIndex = (newIndex) => {
        setSectionVisible(false);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            setSectionVisible(true);
        }, 900); 
    };

  return (
        <>
        <Navbar scrolled={scrolled} darkMode={darkMode}/>
        <div className={`w-full min-h-screen pt-24`}> 
            <section
              className={`fixed top-0 left-0 w-full h-screen
                flex flex-col md:flex-row items-center md:items-start justify-between gap-0
                ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}
                overflow-hidden`}
            >
            { (
                <>
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
                  />
                </>
              )}
                  
        {/* Profile + Menu Section */}
        <div
            onWheel={(e) => {
              if (shrinkWrapper) {
                e.preventDefault(); // ❌ Block scroll on profile/menu when shrunken
              }
            }}
            className={`relative h-full flex-shrink-0 transition-all duration-700 ease-in-out ${!shrinkWrapper ? "aspect-square" : ""} `}
            style={{ width: shrinkWrapper ? "20rem" : undefined }}
        >
            <ProfileImage
              darkMode={darkMode}
              scrolled={scrolled}
              shrinkWrapper={shrinkWrapper}
              profileRef={profileRef}
            />

            {/* Sliding Pop-up Menu */}
            {shrinkWrapper && (
              <Menu
                darkMode={darkMode}
                shrinkWrapper={shrinkWrapper}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                SECTIONS={SECTIONS}
              />
            )}
        </div>

        <DynamicContent
          darkMode={darkMode}
          shrinkWrapper={shrinkWrapper}
          outro={outro}
          scrolled={scrolled}
          sectionVisible={sectionVisible}
          SECTIONS={SECTIONS}
          currentIndex={currentIndex}
          setShrinkWrapper={setShrinkWrapper}
          setCurrentIndex={setCurrentIndex}
          setOutro={setOutro}
          contentRef={contentRef}
          introRef={introRef}
          outroRef={outroRef}
        />
      </section>
      <div className="h-[950px] bg-transparent"></div>
    </div>
    </>
  );
}

export default Home;