import { useEffect, useState } from "react";

function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(() =>
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.theme = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="ml-4 px-3 py-1 text-sm font-medium rounded bg-gray-200 dark:bg-gray-700 dark:text-white hover:scale-105 transition-transform"
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeToggleButton;