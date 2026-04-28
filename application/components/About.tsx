export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-black relative">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="text-xs uppercase tracking-[0.6em] font-bold text-gold mb-4 relative inline-block">
              About
              <div className="absolute -bottom-2 left-0 w-8 h-[1px] bg-gold" />
            </h2>
          </div>
          <div className="md:w-2/3 space-y-8">
            <p className="text-3xl md:text-4xl font-serif leading-tight text-white/90">
              I’m a software engineer focused on building <span className="text-gold italic">intelligent systems</span> that enhance human capability and solve real-world problems.
            </p>
            <div className="space-y-6 text-white/40 text-lg font-medium leading-relaxed">
              <p>
                During my time at San Francisco State University, I built a strong foundation in computer science and software engineering, graduating magna cum laude with a Bachelor of Science in 2024. I worked on a range of projects, including StudentConnect, a team-based platform aimed at improving student engagement, and DietBase, a database-driven system designed to help users stay on track with their dieting and fitness goals.
              </p>
              <p>
                Currently, I am pursuing a Master of Science in Artificial Intelligence at The University of Texas at Austin, where I am expanding my skills in machine learning and intelligent systems. My recent work includes developing an emotion recognition system, applying AI techniques to interpret and respond to human behavior.
              </p>
              <p>
                I’m particularly interested in artificial intelligence because of the rapid pace at which it is transforming how people work and create. As new tools and products continue to emerge, I’m motivated to be part of building systems that not only innovate, but also help individuals maximize their abilities and solve real-world problems more effectively.
              </p>
              <p>
                Outside of building software, I spend much of my time staying active, whether that’s lifting, playing soccer, or basketball. I also enjoy creative work like sewing, where I can make something tangible with my own hands, as well as video editing, a hobby I’ve been developing since I was young.
              </p>
              <p>
                I’m also drawn to competitive and strategy-based games. I play team-oriented games like Overwatch and Rocket League, where communication and coordination are key, and I enjoy games like chess that challenge me to think critically and analyze every move.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
