import React from "react";
import profilePic from "../assets/profile.jpg";
import profilePic2 from "../assets/profile2.jpg";
import profilePicB from "../assets/profileDark.jpg";
import profilePic2B from "../assets/profileDark2.jpg";

const ProfileImage = ({ darkMode, scrolled, shrinkWrapper, profileRef }) => {
  return (
    <div
      onWheel={(e) => {
        if (shrinkWrapper) e.preventDefault(); // prevent scroll when shrunken
      }}
      className={`relative h-full flex-shrink-0 transition-all duration-700 ease-in-out ${
        !shrinkWrapper ? "aspect-square" : ""
      }`}
      style={{ width: shrinkWrapper ? "20rem" : undefined }}
    >
      <div
        ref={profileRef}
        className={`transition-all duration-900 ease-in-out overflow-hidden z-50 ${
          scrolled ? "absolute top-4 left-4 w-70 h-70" : "relative w-full h-full"
        }`}
      >
        {/* Unscrolled Image */}
        <img
          src={darkMode ? profilePicB : profilePic}
          alt="Profile"
          className={`absolute top-0 left-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ease-in-out ${
            scrolled ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Scrolled Image */}
        <img
          src={darkMode ? profilePic2B : profilePic2}
          alt="Profile Alt"
          className={`absolute top-0 left-0 w-full h-full object-cover object-bottom transition-opacity duration-700 ease-in-out ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default ProfileImage;