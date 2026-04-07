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
              I am a developer driven by the pursuit of <span className="text-gold italic">uncompromising</span> quality and aesthetic excellence.
            </p>
            <div className="space-y-6 text-white/40 text-lg font-medium leading-relaxed">
              <p>
                With a deep background in systems architecture and user experience design, I bridge the gap between complex functionality and intuitive interaction.
              </p>
              <p>
                My work is defined by a meticulous attention to detail and a commitment to building digital solutions that are as robust as they are beautiful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
