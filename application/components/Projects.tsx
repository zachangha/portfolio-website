export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A fantastic web application built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
    },
    {
      title: "Project Two",
      description: "An innovative mobile-first responsive website.",
      tech: ["React", "CSS Modules"],
    },
    {
      title: "Project Three",
      description: "A robust backend API service.",
      tech: ["Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition duration-300 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
