// BackToTopButton.jsx
import React from "react";

function BackToTopButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed right-6 bottom-6 z-50 w-12 h-12 flex items-center justify-center
                 bg-[#dfb16d] text-white rounded-full shadow-lg
                 hover:bg-[#5c542f] transition-all duration-300"
      title="Back to Top"
    >
      Up
    </button>
  );
}

export default BackToTopButton;