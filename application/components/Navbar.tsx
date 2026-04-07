import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gold/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-serif tracking-[0.2em] text-gold hover:text-gold-light transition-all uppercase">
          Zach Angha
        </Link>
        <div className="hidden md:flex space-x-12">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-gold transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
