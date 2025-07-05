function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-[#1f2937] text-white rounded-lg p-6 w-[90%] max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-gray-400 hover:text-white"
        >
          ×
        </button>

        <img src={project.image} alt={project.title} className="rounded-md w-full h-52 object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-[#dfb16d]">{project.title}</h2>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((icon, idx) => (
            <i key={idx} className={`${icon} colored text-3xl`} title={icon.split("-")[1]}></i>
          ))}
        </div>

        <div className="flex gap-4 mb-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#dfb16d] hover:underline">
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#dfb16d] hover:underline">
              Live Demo
            </a>
          )}
        </div>

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 text-sm text-gray-400">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-2 py-1 border border-gray-600 rounded">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;