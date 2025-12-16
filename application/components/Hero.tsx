export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
          Hello, I'm [Your Name]
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          A passionate developer building digital experiences.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
