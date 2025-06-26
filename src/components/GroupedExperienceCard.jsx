function GroupedExperienceCard({ logo, organization, experiences = [] }) {
  return (
    <div className="relative pl-10 border-l-4 border-[#766d3b] space-y-12">
      {/* Shared Timeline Dot with Logo */}
      <div className="absolute -left-6 top-2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-[#766d3b] flex items-center justify-center overflow-hidden shadow-md">
        <img src={logo} alt={`${organization} Logo`} className="w-10 h-10 object-contain" />
      </div>

      {/* Individual Experience Cards */}
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-1 group hover:scale-[1.01] transition-transform duration-300"
        >
          <h3 className="text-xl font-bold text-[#dfb16d]">{exp.role}</h3>
          <p className="text-base font-semibold">{organization}</p>
          <p className="text-sm text-gray-400">{exp.duration}</p>
          <p className="text-sm text-gray-300 whitespace-pre-line">{exp.description}</p>

          {/* Tools Row */}
          <div className="flex flex-wrap gap-4 mt-2">
            {exp.tools.map((tool, toolIdx) => (
              <i
                key={toolIdx}
                className={`devicon-${tool} colored text-4xl`}
                title={tool.split("-")[0].toUpperCase()}
              ></i>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroupedExperienceCard;