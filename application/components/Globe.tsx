"use client";
import React, { useEffect, useRef, useState } from 'react';
import GlobeT, { GlobeMethods } from 'react-globe.gl';
import * as THREE from 'three';

const citiesData = [
  { lat: 34.0522, lng: -118.2437, city: 'Los Angeles', info: ['Currently based out of Los Angeles, California',
    'Worked as a Support Engineer at Un1teee, helping customers find AI tools that best suit their needs, and fixing any technical issues they have ',
  ] },
  { lat: 37.7749, lng: -122.4194, city: 'San Francisco', info: ['Achieved Bachelor of Science in Computer Science at San Francisco State University', 
    'Developed a Canvas-like web application called StudentConnect, in a team of six, serving as Git Master and Backend Assistant', 
    'Created DietBase, a database system for dieting and fitness tracking applications '] },
  { lat: 30.2672, lng: -97.7431, city: 'Austin', info: ['Currently pursuing a Master of Science in Artificial Intelligence at the University of Texas at Austin (Remote)'] }
];

export default function Globe() {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [mounted, setMounted] = useState(false);
  const [countries, setCountries] = useState({ features: [] });
  const [width, setWidth] = useState(0);
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const [displayCity, setDisplayCity] = useState<any>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (selectedCity) {
      setDisplayCity(selectedCity);
      setIsClosing(false);
    } else if (displayCity) {
      setIsClosing(true);
      timeoutId = setTimeout(() => {
        setDisplayCity(null);
        setIsClosing(false);
      }, 500);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [selectedCity, displayCity]);

  useEffect(() => {
    setMounted(true);
    setWidth(window.innerWidth < 768 ? window.innerWidth : 600); // Responsive helper

    // Fetch GeoJSON for countries
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  if (!mounted) return <div className="w-[600px] h-[600px] bg-transparent" />;

  return (
    <div className="flex items-center justify-center relative">
      <GlobeT
        ref={globeEl}
        width={width}
        height={width}

        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor='rgba(0,0,0,0)'
        globeMaterial={
          // @ts-ignore
          new THREE.MeshPhongMaterial({ color: '#050505', opacity: 1, transparent: false, emissive: '#111' })
        }
        onGlobeReady={() => {
          if (globeEl.current) {
             // @ts-ignore
            globeEl.current.pointOfView({ lat: 34.05, lng: -118.24, altitude: 2 }, 0);
            // @ts-ignore
            globeEl.current.controls().autoRotate = false;
            // @ts-ignore
            globeEl.current.controls().autoRotateSpeed = 0.8;
            // @ts-ignore
            globeEl.current.controls().enableZoom = false;
          }
        }}
        polygonsData={countries.features}
        polygonCapColor={() => 'rgba(212, 175, 55, 0.05)'}
        polygonSideColor={() => 'rgba(0,0,0,0)'}
        polygonStrokeColor={() => '#D4AF37'}
        polygonAltitude={0.01}

        htmlElementsData={citiesData}
        htmlElement={(d: any) => {
          const el = document.createElement('div');
          el.className = "cursor-pointer group flex items-center justify-center p-2";
          el.style.pointerEvents = 'auto'; // CRITICAL: This allows the element to receive clicks over the WebGL canvas
          el.innerHTML = `
            <span class="flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37] group-hover:scale-150 transition-transform duration-300"></span>
            </span>
          `;
          el.onpointerdown = (e) => {
            e.stopPropagation();
            setSelectedCity(d);
            if (globeEl.current) {
              // @ts-ignore
              globeEl.current.pointOfView({ lat: d.lat, lng: d.lng, altitude: 1.8 }, 1000);
            }
          };
          return el;
        }}
      />

      <style>{`
        @keyframes popup-enter {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes popup-exit {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(20px) scale(0.95); }
        }
        
        .glass-popup {
          animation: popup-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .glass-popup-exit {
          animation: popup-exit 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      {/* Info Text Box Popup */}
      {displayCity && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:top-1/4 md:right-12 z-50 w-[90vw] md:w-full max-w-[400px] pointer-events-none perspective-[1000px]">
          <div className={`relative w-full h-full pointer-events-auto bg-gradient-to-br from-[#1a1a1a]/95 to-[#0a0a0a]/95 backdrop-blur-xl border border-[#D4AF37]/30 p-6 rounded-2xl shadow-[0_20px_50px_-10px_rgba(212,175,55,0.3)] ${isClosing ? 'glass-popup-exit' : 'glass-popup'} overflow-hidden`}>
            
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>

            <button 
              onClick={() => setSelectedCity(null)} 
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#D4AF37]/20 text-white/50 hover:text-[#D4AF37] transition-colors duration-300 z-20 cursor-pointer"
            >
              &times;
            </button>
            
            <div className="flex flex-col relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37] shadow-[0_0_12px_#D4AF37]"></span>
                </div>
                <h3 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent font-bold text-xl tracking-tight leading-none">{displayCity.city}</h3>
              </div>
              
              <div className="h-[1px] w-full bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/10 to-transparent mb-4"></div>
              
              <ul className="text-gray-300 font-light text-sm leading-relaxed list-disc list-inside space-y-1">
                {displayCity.info.map((point: string, idx: number) => (
                  <li key={idx} className="marker:text-[#D4AF37]/70">
                    <span className="ml-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
