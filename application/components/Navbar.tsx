import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gold/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-serif tracking-[0.2em] text-gold hover:text-gold-light transition-all uppercase">
          Zach Angha
        </Link>
        <div className="hidden md:flex space-x-12 items-center">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-gold transition-all"
            >
              {item}
            </Link>
          ))}
          
          <div className="flex space-x-6 pl-6 border-l border-gold/10">
            <a 
              href="https://github.com/zachangha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-gold transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/zach-angha/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-gold transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}
