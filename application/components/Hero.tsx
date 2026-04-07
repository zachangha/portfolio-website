"use client";
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('./Globe'), { 
  ssr: false,
  loading: () => <div className="w-[600px] h-[600px] animate-pulse bg-gold/5 rounded-full" />
});

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black text-white pt-32 pb-40 md:py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gold-dark)_0%,_transparent_70%)] opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left space-y-8 z-20">
          <div className="space-y-2">
            <h2 className="text-gold text-xs uppercase tracking-[0.5em] font-bold">Based in Los Angeles</h2>
            <h1 className="text-5xl md:text-8xl font-serif tracking-tight leading-[1.1] pb-2 text-gold-gradient gold-glow">
              Zach<br />Angha
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/40 max-w-lg font-medium leading-relaxed">
            Crafting high-performance digital experiences with <span className="text-white/80">precision</span> and <span className="text-gold/80 italic font-serif">elegance.</span>
          </p>
          
          <div className="pt-4">
            <a href="#projects" className="gold-button">
              Explore Portfolio
            </a>
          </div>
        </div>
        
        <div className="flex justify-center items-center h-[400px] md:h-[600px] w-full cursor-grab active:cursor-grabbing opacity-80 hover:opacity-100 transition-opacity duration-1000 z-10">
          <Globe />
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-20 z-10">
        <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-gold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
