export default async function Projects() {
  let projects = [];
  try {
    const res = await fetch("https://api.github.com/users/zachangha/repos?sort=updated&per_page=6", { 
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "portfolio-website"
      }
    });
    if (!res.ok) throw new Error("Failed to fetch repositories");
    const repos = await res.json();
    
    projects = await Promise.all(
      repos.map(async (repo: any) => {
        let tech: string[] = [];
        try {
          const langRes = await fetch(repo.languages_url, {
            next: { revalidate: 3600 },
            headers: { "User-Agent": "portfolio-website" },
          });
          if (langRes.ok) {
            const langs = await langRes.json();
            tech = Object.keys(langs); // Returns an array of language names
          } else {
            tech = repo.language ? [repo.language] : [];
          }
        } catch (err) {
          tech = repo.language ? [repo.language] : [];
        }

        return {
          title: repo.name,
          description: repo.description || "No description provided.",
          tech,
          url: repo.html_url,
        };
      })
    );
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
    <section id="projects" className="py-32 px-6 bg-black relative">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.6em] font-bold text-gold mb-4 relative inline-block">
            Projects
            <div className="absolute -bottom-2 left-0 w-8 h-[1px] bg-gold" />
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project: any, index: number) => (
            <a 
              key={index} 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative flex flex-col h-full bg-white/[0.03] border border-white/5 p-10 hover:border-gold/30 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className="text-gold text-2xl font-serif tracking-tighter">0{index + 1}</span>
              </div>
              
              <h3 className="text-2xl font-serif text-white/90 mb-4 group-hover:text-gold transition-colors">{project.title}</h3>
              <p className="text-white/40 text-sm mb-12 font-medium leading-relaxed">
                {project.description}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-3 mb-10">
                {project.tech.slice(0, 3).map((tag: any) => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-gold/60">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="inline-flex items-center text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 group-hover:text-gold transition-all duration-500">
                Details <span className="ml-4 w-12 h-[1px] bg-white/10 group-hover:bg-gold transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
