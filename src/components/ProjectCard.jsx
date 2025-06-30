function getTagColor(tag) {
  const lower = tag.toLowerCase();
  if (lower.includes("ml") || lower.includes("machine")) return "bg-blue-500";
  if (lower.includes("frontend") || lower.includes("react")) return "bg-green-500";
  if (lower.includes("backend") || lower.includes("spring")) return "bg-purple-500";
  if (lower.includes("full")) return "bg-orange-500";
  if (lower.includes("android")) return "bg-yellow-500 text-black";
  if (lower.includes("web")) return "bg-cyan-500";
  if (lower.includes("data") || lower.includes("visualization")) return "bg-pink-500";
  return "bg-gray-500"; // default fallback
}

function getTooltip(tag) {
  const lower = tag.toLowerCase();
  if (lower.includes("frontend")) return "Frontend: User interface";
  if (lower.includes("backend")) return "Backend: Server-side logic";
  if (lower.includes("full")) return "Full Stack: Both frontend and backend";
  if (lower.includes("ml")) return "Machine Learning: Predictive modeling";
  if (lower.includes("web")) return "Web App: Runs in browser";
  if (lower.includes("data")) return "Data Analysis or Visualization";
  return tag;
}

function ProjectCard({ image, title, description, tech = [], github, live, tags = [], dark = true }) {
  return (
    <div className={`flex flex-col justify-between h-full ${dark ? "bg-[#1f2937] text-[#fdfcfc]" : "bg-gray-200 text-gray-800"} p-6 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300`}>
      {/* Image */}
      <div className="relative w-full pb-[56.93%] mb-4 rounded-md overflow-hidden">
  <img
    src={image}
    alt={title}
    className="absolute top-0 left-0 w-full h-full object-contain"
  />
</div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className={`text-xl font-bold ${dark ? "text-[#dfb16d]" : "text-[#766d3b]"} mb-2`}>{title}</h3>
          <p className={`text-sm ${dark ? "text-gray-300" : "ttext-gray-800"} mb-4`}>{description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-4">
            {tech.map((iconClass, idx) => (
              <i key={idx} className={`${iconClass} colored text-2xl`} title={iconClass.split("-")[1]?.toUpperCase()} />
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-auto pt-4 flex gap-6">
          {(
            <a href={github} target="_blank" rel="noopener noreferrer" className={`text-sm ${dark ? "text-[#dfb16d]" : "text-[#766d3b]"}`}>
              GitHub →
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className={`text-sm ${dark ? "text-[#dfb16d]" : "text-[#766d3b]"}`}>
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;