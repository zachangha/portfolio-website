"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AnimatedSection({ 
  children, 
  id, 
  className = "" 
}: { 
  children: ReactNode, 
  id?: string, 
  className?: string 
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 60, filter: "blur(8px)", scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] // Custom spring-like easing
      }}
    >
      {children}
    </motion.section>
  );
}
