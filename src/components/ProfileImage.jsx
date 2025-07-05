import profilePic from "../assets/profile.png";
import profilePic2 from "../assets/profile2.png";

const ProfileImage = ({ darkMode, scrolled, shrinkWrapper, profileRef, showMenu }) => {
  return (
    <div
      onWheel={(e) => {
        if (shrinkWrapper) e.preventDefault();
      }}
      className="relative flex-shrink-0 transition-all duration-700 ease-in-out aspect-square w-full h-full"
    >
      <div
        ref={profileRef}
        className={`transition-all duration-900 ease-in-out overflow-hidden z-50 flex items-end justify-center relative w-full h-full`}
      >
        {/* Wrapper to constrain and position image */}
        <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
          {/* Unscrolled Image */}
          <img
            src={profilePic}
            alt="Profile"
            className={`absolute w-full h-full object-contain object-bottom transition-opacity duration-700 ease-in-out ${
              shrinkWrapper ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Scrolled Image */}
          {showMenu && (
            <img
              src={profilePic2}
              alt="Profile Alt"
              className={`absolute w-full h-full object-contain object-bottom transition-opacity duration-700 ease-in-out ${
                shrinkWrapper ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;