// src/components/SocialRow.jsx
import linkedinIcon from "../assets/linkedIn.jpg";
import githubIcon from "../assets/github.jpg";
import mediumIcon from "../assets/medium.jpg";
import downloadIcon from "../assets/download.jpg";
import linkedinIconInv from "../assets/linkedInInv.jpg";
import githubIconInv from "../assets/githubInv.jpg";
import mediumIconInv from "../assets/mediumInv.jpg";
import downloadIconInv from "../assets/downloadInv.jpg";

export default function SocialIcons({ inverted = false, align = "left" }) {
    const iconSize = "w-10 h-10 md:w-12 md:h-12";
    const containerClass = align === "center" ? "justify-center" : "justify-start";

    return (
        <div className={`flex ${containerClass} gap-5 mb-8`}>
            <a href="https://www.linkedin.com/in/rijit-singh-a74438182/" target="_blank" rel="noopener noreferrer">
                <img
                    src={inverted ? linkedinIconInv : linkedinIcon}
                    alt="LinkedIn"
                    title="LinkedIn"
                    className={`${iconSize} rounded-full hover:scale-125 transition-transform duration-200 ease-in-out`}
                />
            </a>
            <a href="https://github.com/TheVikingWizard" target="_blank" rel="noopener noreferrer">
                <img
                    src={inverted ? githubIconInv : githubIcon}
                    alt="GitHub"
                    title="GitHub"
                    className={`${iconSize} rounded-full hover:scale-125 transition-transform duration-200 ease-in-out`}
                />
            </a>
            <a href="https://medium.com/@singh.rijit" target="_blank" rel="noopener noreferrer">
                <img
                    src={inverted ? mediumIconInv : mediumIcon}
                    alt="Medium"
                    title="Medium"
                    className={`${iconSize} rounded-full hover:scale-125 transition-transform duration-200 ease-in-out`}
                />
            </a>
            <a href="/resume.pdf" download>
                <img
                    src={inverted ? downloadIconInv : downloadIcon}
                    alt="Download Resume"
                    title="Resume"
                    className={`${iconSize} rounded-full hover:scale-125 transition-transform duration-200 ease-in-out`}
                />
            </a>
        </div>
    );
}