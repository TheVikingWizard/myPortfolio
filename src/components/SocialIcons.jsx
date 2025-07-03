// src/components/SocialRow.jsx
import linkedinIcon from "../assets/social/linkedIn.jpg";
import githubIcon from "../assets/social/github.jpg";
import mediumIcon from "../assets/social/medium.jpg";
import downloadIcon from "../assets/social/download.jpg";
import linkedinIconInv from "../assets/social/linkedinInv.png";
import githubIconInv from "../assets/social/githubInv.png";
import mediumIconInv from "../assets/social/mediumInv.png";
import downloadIconInv from "../assets/social/downloadInv.png";

export default function SocialIcons({
  inverted = false,
  align = "left",
  iconSize = "aspect-square w-12", // default
  direction = "row", // "row" (default) or "col"
  gap = "gap-6",
}) {
  const containerClass = align === "center" ? "justify-center" : "justify-start";
  const isColumn = direction === "col";

  const layoutDirection = isColumn
    ? `flex-col items-center ${gap} py-4`  // Increased gap and padding
    : `flex-row ${gap}`;

  const finalIconSize = isColumn
    ? "w-10 h-10"         // Larger size for vertical layout
    : iconSize;

  return (
    <div className={`flex ${layoutDirection} ${containerClass} mb-4 border border-red-500`}>
      <a href="https://www.linkedin.com/in/rijit-singh-a74438182/" target="_blank" rel="noopener noreferrer">
        <img
          src={inverted ? linkedinIconInv : linkedinIcon}
          alt="LinkedIn"
          title="LinkedIn"
          className={`${finalIconSize} rounded-full hover:scale-125 transition-transform duration-200 ease-in-out`}
        />
      </a>
      <a href="https://github.com/TheVikingWizard" target="_blank" rel="noopener noreferrer">
        <img
          src={inverted ? githubIconInv : githubIcon}
          alt="GitHub"
          title="GitHub"
          className={`${finalIconSize} rounded-full hover:scale-125 transition-transform duration-200 ease-in-out`}
        />
      </a>
      <a href="https://medium.com/@singh.rijit" target="_blank" rel="noopener noreferrer">
        <img
          src={inverted ? mediumIconInv : mediumIcon}
          alt="Medium"
          title="Medium"
          className={`${finalIconSize} rounded-full hover:scale-125 transition-transform duration-200 ease-in-out`}
        />
      </a>
      <a href="/resume.pdf" download>
        <img
          src={inverted ? downloadIconInv : downloadIcon}
          alt="Download Resume"
          title="Resume"
          className={`${finalIconSize} rounded-full hover:scale-125 transition-transform duration-200 ease-in-out`}
        />
      </a>
    </div>
  );
}