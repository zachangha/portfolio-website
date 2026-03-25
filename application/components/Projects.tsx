export default async function Projects() {
  let projects = [];
  try {
    const res = await fetch("https://api.github.com/users/zachangha/repos?sort=updated&per_page=12", { 
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "portfolio-website"
      }
    });
    if (!res.ok) throw new Error("Failed to fetch repositories");
    const repos = await res.json();
    
    projects = repos.map((repo: any) => ({
      title: repo.name,
      description: repo.description || "No description provided.",
      tech: repo.language ? [repo.language] : [],
      url: repo.html_url
    }));  
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Fallback projects if fetch fails
    projects = [
      {
        title: "Project One",
        description: "A fantastic web application built with Next.js and Tailwind CSS.",
        tech: ["Next.js", "Tailwind", "TypeScript"],
        url: "#"
      },
      {
        title: "Project Two",
        description: "An innovative mobile-first responsive website.",
        tech: ["React", "CSS Modules"],
        url: "#"
      },
      {
        title: "Project Three",
        description: "A robust backend API service.",
        tech: ["Node.js", "Express", "MongoDB"],
        url: "#"
      },
    ];
  }

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, index: number) => (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition duration-300 border border-gray-700 block"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t: string, i: number) => (
                  <span key={i} className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
