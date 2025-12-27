"use client";
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('./Globe'), { 
  ssr: false,
  loading: () => <div className="w-[600px] h-[600px] animate-pulse bg-gray-800/20 rounded-full" />
});

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 text-white pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-left z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
            Hello, I'm Zach
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg">
            A passionate developer building digital experiences across the globe.
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
        
        <div className="flex justify-center items-center h-[500px] w-full cursor-grab active:cursor-grabbing">
          <Globe />
        </div>
      </div>
    </section>
  );
}
