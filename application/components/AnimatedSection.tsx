"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ReactNode } from "react";

export default function AnimatedSection({ 
  children, 
  id, 
  className = "" 
}: { 
  children: ReactNode, 
  id?: string, 
  className?: string 
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id={id}
      ref={ref as any}
      className={`${className} transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {children}
    </section>
  );
}
