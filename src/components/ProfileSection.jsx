import profilePic from "../assets/profile.jpg";
import profilePic2 from "../assets/profile2.jpg";

function ProfileSection({ scrolled, profileRef }) {
  return (
    <div
      ref={profileRef}
      className={`transition-all duration-900 ease-in-out overflow-hidden z-50 ${
        scrolled ? "absolute top-4 left-4 w-70 h-70" : "relative w-full h-full"
      }`}
    >
      <img
        src={profilePic}
        alt="Profile"
        className={`absolute top-0 left-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ease-in-out ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={profilePic2}
        alt="Profile Alt"
        className={`absolute top-0 left-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ease-in-out ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default ProfileSection;