import profilePic from "../assets/profile.png";
import profilePic2 from "../assets/profile2.png";

const ProfileImage = ({ darkMode, scrolled, shrinkWrapper, profileRef, showMenu }) => {
  return (
    <div
      onWheel={(e) => {
        if (shrinkWrapper) e.preventDefault(); // prevent scroll when shrunken
      }}
      className={`relative flex-shrink-0 transition-all duration-700 ease-in-out aspect-square
        ${scrolled ? "flex items-center justify-center" : ""} w-full h-full`}
    >
      <div
        ref={profileRef}
        className={`transition-all duration-900 ease-in-out overflow-hidden z-50 ${
          scrolled ? "absolute top-4 w-70 h-70" : "relative w-full h-full"
        }`}
      >
        {/* Unscrolled Image */}
        <img
          src={profilePic}
          alt="Profile"
          className={`absolute top-0 left-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ease-in-out ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Scrolled Image */}
        {showMenu && <img
          src={profilePic2}
          alt="Profile Alt"
          className={`absolute top-0 left-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ease-in-out ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        }
      </div>
    </div>
  );
};

export default ProfileImage;