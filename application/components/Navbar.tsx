import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition">
          Portfolio
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#hero" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition">About</Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition">Projects</Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
