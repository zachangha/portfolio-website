"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "85ce0dcd-3890-46c2-8eb0-af38717b62e5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        form.reset(); // Clear the form
      } else {
        console.error("Error:", data);
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <AnimatedSection id="contact" className="py-32 px-6 bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2">
            <h3 className="text-5xl md:text-6xl font-serif text-white/90 mb-12 gold-glow leading-tight">Contact <span className="italic italic text-gold">me.</span></h3>
            <div className="space-y-6 text-white/40 font-medium">
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-all text-white placeholder:text-white/20 font-serif text-lg"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-all text-white placeholder:text-white/20 font-serif text-lg"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-gold outline-none transition-all text-white placeholder:text-white/20 font-serif text-lg resize-none"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                className="gold-button w-full md:w-auto"
                disabled={status === "Sending..."}
              >
                {status === "Sending..." ? "Transmitting..." : "Submit"}
              </button>
              
              {status && status !== "Sending..." && (
                <p className={`mt-6 text-[10px] uppercase tracking-widest font-bold ${status.includes("success") ? "text-gold" : "text-red-500"}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
