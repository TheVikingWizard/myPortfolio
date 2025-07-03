// import profilePic from "../assets/profile.png";
// import profilePic2 from "../assets/profile2.png";

// const ProfileImage = ({ darkMode, scrolled, shrinkWrapper, profileRef, showMenu }) => {
//   return (
// <div
//   onWheel={(e) => {
//     if (shrinkWrapper) e.preventDefault();
//   }}
//   className="relative flex-shrink-0 transition-all duration-700 ease-in-out aspect-square w-full h-full"
// >
//   <div
//     ref={profileRef}
//     className={`transition-all duration-700 ease-in-out overflow-hidden z-50 flex items-end justify-center
//       ${shrinkWrapper
//         ? "relative w-full h-full md:absolute md:h-70"
//         : "relative w-full h-full"}`}
//   >
//     {/* Wrapper to constrain and position image */}
//     <div className="w-full h-full flex items-end justify-center">
//       {/* Unscrolled Image */}
//       <img
//         src={shrinkWrapper && showMenu ? profilePic2 : profilePic}
//         alt="Profile"
//         className={`transition-all duration-700 ease-in-out object-contain max-w-full max-h-full absolute bottom-0
//           ${shrinkWrapper ? "opacity-100" : "opacity-100"}`}
//       />
//     </div>
//   </div>
// </div>
//   );
// };

// export default ProfileImage;


// import profilePic from "../assets/profile.png";
// import profilePic2 from "../assets/profile2.png";

// const ProfileImage = ({ darkMode, scrolled, shrinkWrapper, profileRef, showMenu }) => {
//   return (
//     <div
//       onWheel={(e) => {
//         if (shrinkWrapper) e.preventDefault(); // prevent scroll when shrunken
//       }}
//       className={`relative h-full flex-shrink-0 transition-all duration-700 ease-in-out ${
//         !shrinkWrapper ? "aspect-square" : ""
//       }`}
//     >
//       <div
//         ref={profileRef}
//         className={`transition-all duration-900 ease-in-out overflow-hidden z-50 ${
//           scrolled ? "absolute top-4 left-4 w-70 h-70" : "relative w-full h-full"
//         }`}
//       >
//         {/* Unscrolled Image */}
//         <img
//           src={darkMode ? profilePic : profilePic}
//           alt="Profile"
//           className={`absolute top-0 left-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ease-in-out ${
//             scrolled ? "opacity-0" : "opacity-100"
//           }`}
//         />

//         {/* Scrolled Image */}
//         <img
//           src={darkMode ? profilePic2 : profilePic2}
//           alt="Profile Alt"
//           className={`absolute top-0 left-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ease-in-out ${
//             scrolled ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProfileImage;

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
    className={`transition-all duration-900 ease-in-out overflow-hidden z-50 flex items-end justify-center
      ${scrolled
        ? "relative w-full h-full md:absolute md:top-4 md:w-70 md:h-70"
        : "relative w-full h-full"}`}
  >
    {/* Wrapper to constrain and position image */}
    <div className="w-full h-full flex items-end justify-center">
      {/* Unscrolled Image */}
      <img
        src={profilePic}
        alt="Profile"
        className={`transition-opacity duration-700 ease-in-out object-contain max-w-full max-h-full
          absolute bottom-0 ${scrolled ? "opacity-0" : "opacity-100"}`}
      />

      {/* Scrolled Image (only visible if showMenu is true) */}
      {showMenu && (
        <img
          src={profilePic2}
          alt="Profile Alt"
          className={`transition-opacity duration-700 ease-in-out object-contain max-w-full max-h-full
            absolute bottom-0 ${scrolled ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  </div>
</div>
  );
};

export default ProfileImage;