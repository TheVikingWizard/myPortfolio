// src/components/SocialRow.jsx
import linkedinIcon from "../assets/social/linkedIn.jpg";
import githubIcon from "../assets/social/github.jpg";
import mediumIcon from "../assets/social/medium.jpg";
import downloadIcon from "../assets/social/download.jpg";
import linkedinIconInv from "../assets/social/linkedinInv.png";
import linkedinIconMenu from "../assets/social/linkedinMenu.png";
import linkedinIconInvMenu from "../assets/social/linkedinInvMenu.png";
import githubIconInv from "../assets/social/githubInv.png";
import githubIconMenu from "../assets/social/githubMenu.png";
import githubIconInvMenu from "../assets/social/githubInvMenu.png";
import mediumIconInv from "../assets/social/mediumInv.png";
import mediumIconMenu from "../assets/social/mediumMenu.png";
import mediumIconInvMenu from "../assets/social/mediumInvMenu.png";
import downloadIconInv from "../assets/social/downloadInv.png";
import downloadIconMenu from "../assets/social/downloadMenu.png";
import downloadIconInvMenu from "../assets/social/downloadInvMenu.png";

export default function SocialIcons({
  darkMode = false,
  inverted = false,
  border = false,
  isMenu = false,
  align = "left",
  direction = "row", // "row" (default) or "col"
  size = "auto",     // ✅ "large" | "medium" | "auto"
}) {
  const containerClass = align === "center" ? "justify-center" : "justify-start";
  const isColumn = direction === "col";
  const layoutDirection = isColumn ? "flex-col items-center py-4" : "flex-row";

  // ✅ Icon sizing logic based on prop
  const iconStyle =
    size === "large"
      ? { width: "3rem", height: "3rem" } // w-12 h-12
      : size === "medium"
      ? { width: "2.5rem", height: "2.5rem" } // w-10 h-10
      : {
          width: "clamp(1.5rem, 2.5vw, 3rem)",
          height: "clamp(1.5rem, 2.5vw, 3rem)",
        };

  return (
    <div
      className={`${
        isMenu
          ? `rounded-l-full rounded-r-full px-2 py-2 ${
              darkMode ? "bg-[#111827]" : "bg-[#fdfcfc]"
            }`
          : ""
      } flex ${layoutDirection} ${containerClass} mb-4`}
      style={{
        gap: isColumn
          ? "clamp(0.75rem, 2vw, 1.75rem)"
          : "clamp(0.5rem, 1.5vw, 1.25rem)",
      }}
    >
      {[
        {
          href: "https://www.linkedin.com/in/rijit-singh-a74438182/",
          src: isMenu
            ? darkMode
              ? linkedinIconMenu
              : linkedinIconInvMenu
            : inverted
            ? linkedinIconInv
            : linkedinIcon,
          alt: "LinkedIn",
        },
        {
          href: "https://github.com/TheVikingWizard",
          src: isMenu
            ? darkMode
              ? githubIconMenu
              : githubIconInvMenu
            : inverted
            ? githubIconInv
            : githubIcon,
          alt: "GitHub",
        },
        {
          href: "https://medium.com/@singh.rijit",
          src: isMenu
            ? darkMode
              ? mediumIconMenu
              : mediumIconInvMenu
            : inverted
            ? mediumIconInv
            : mediumIcon,
          alt: "Medium",
        },
        {
          href: "/resume.pdf",
          src: isMenu
            ? darkMode
              ? downloadIconMenu
              : downloadIconInvMenu
            : inverted
            ? downloadIconInv
            : downloadIcon,
          alt: "Download Resume",
          download: true,
        },
      ].map(({ href, src, alt, download }, idx) => (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...(download ? { download: true } : {})}
        >
          <img
            src={src}
            alt={alt}
            title={alt}
            className={`rounded-full ${
              border ? "border-6 border-[#111827]" : ""
            } hover:scale-125 transition-transform duration-200 ease-in-out`}
            style={iconStyle}
          />
        </a>
      ))}
    </div>
  );
}