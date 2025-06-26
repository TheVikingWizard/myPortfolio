import { useState } from "react";
import ProjectCard from "../ProjectCard";
import projectImg from "../../assets/demoProject.png";
import portfolioImg from "../../assets/portfolio.png";
import jerseystoreImg from "../../assets/jerseyStore.png";
import { motion, AnimatePresence } from "framer-motion";

// ✅ All Projects
const allProjects = [
  {
    id: "jersey-store",
    image: jerseystoreImg,
    title: "Jersey Store",
    description: "A full-stack e-commerce site with cart, checkout, search, login/signup, and admin panel.",
    tech: ["devicon-react-original", "devicon-spring-plain", "devicon-postgresql-plain", "devicon-javascript-plain"],
    github: "https://github.com/yourusername/jersey-store",
    live: "https://jersey-store.vercel.app",
    tags: ["Full Stack", "Spring Boot", "React"],
    category: ["Featured", "Full Stack"]
  },
  {
    id: "bus-route-planner",
    image: projectImg,
    title: "Bus Route Planner",
    description: "C++ based Dijkstra and A*-powered tool to recommend optimal Delhi bus routes.",
    tech: ["devicon-cplusplus-plain"],
    github: "https://github.com/yourusername/bus-route-planner",
    tags: ["OOP/DSA"],
    category: ["Featured", "OOP/DSA"]
  },
  {
    id: "portfolio",
    image: portfolioImg,
    title: "Portfolio Website",
    description: "My animated personal website built with Vite, Tailwind, React and Devicon.",
    tech: ["devicon-react-original", "devicon-vitejs-plain", "devicon-tailwindcss-plain"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.vercel.app",
    tags: ["Frontend", "Portfolio"],
    category: ["Featured", "UI/UX"]
  },
  {
    id: "android-news",
    image: projectImg,
    title: "Android News App",
    description: "News reader app built with Kotlin and MVVM architecture.",
    tech: ["devicon-kotlin-plain", "devicon-androidstudio-plain"],
    github: "https://github.com/yourusername/android-news-app",
    tags: ["Android", "Kotlin"],
    category: ["Android Projects"]
  },
  {
    id: "drdo-sensor-ml",
    image: projectImg,
    title: "DRDO Sensor ML",
    description: "Sensor signal classification and anomaly detection pipeline with sklearn & matplotlib.",
    tech: ["devicon-python-plain", "devicon-scikitlearn-plain", "devicon-matplotlib-plain"],
    github: "https://github.com/yourusername/drdo-sensor-ml",
    tags: ["Research", "ML"],
    category: ["Experimental / Research", "Data Science & ML"]
  }
];

// ✅ Categories
const categories = [
  "All",
  "Featured",
  "Full Stack",
  "OOP/DSA",
  "Data Science & ML",
  "Android Projects",
  "Dev Tools / Automation",
  "Mini Projects",
];

// ✅ Grouping
const groupedProjects = categories.reduce((acc, category) => {
  acc[category] = category === "All"
    ? allProjects
    : allProjects.filter(p => Array.isArray(p.category) && p.category.includes(category));
  return acc;
}, {});

export default function ProjectsContent() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section className="py-12">
      {/* Tabs */}
      <div className="hidden md:flex gap-4 mb-6 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded transition-all duration-300 text-sm font-medium ${
              activeTab === cat
                ? "bg-[#dfb16d] text-white"
                : "bg-gray-800 text-gray-400 hover:bg-[#dfb16d] hover:text-white"
            }`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Animated grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="hidden md:grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <AnimatePresence mode="wait">
            {groupedProjects[activeTab].map((project, idx) => (
              <motion.div
                key={`${activeTab}-${project.id || idx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Mobile Accordion */}
      <div className="md:hidden">
        {categories.map(cat => (
          <details key={cat} className="mb-4">
            <summary className="cursor-pointer text-lg font-semibold text-[#dfb16d]">{cat}</summary>
            <div className="grid gap-6 mt-4">
              {groupedProjects[cat].map((project, idx) => (
                <ProjectCard key={project.id || idx} {...project} />
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}