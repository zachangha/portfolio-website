"use client";
import React, { useEffect, useRef, useState } from 'react';
import GlobeT, { GlobeMethods } from 'react-globe.gl';
import * as THREE from 'three';

const citiesData = [
  { lat: 34.0522, lng: -118.2437, city: 'Los Angeles', info: 'Current residence' },
  { lat: 37.7749, lng: -122.4194, city: 'San Francisco', info: 'Achieved Bachelor of Science in Computer Science at San Francisco State University' },
  { lat: 30.2672, lng: -97.7431, city: 'Austin', info: 'Currently pursuing a Master of Science in Artificial Intelligence at the University of Texas at Austin' }
];

export default function Globe() {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [mounted, setMounted] = useState(false);
  const [countries, setCountries] = useState({ features: [] });
  const [width, setWidth] = useState(0);
  const [selectedCity, setSelectedCity] = useState<any>(null);

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

      {/* Info Text Box Popup */}
      {selectedCity && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:top-1/4 md:right-12 bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#D4AF37]/30 p-6 rounded-2xl shadow-[0_15px_40px_-10px_rgba(212,175,55,0.4)] z-50 w-full max-w-[280px]">
          <button 
            onClick={() => setSelectedCity(null)} 
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#D4AF37]/20 text-white/50 hover:text-[#D4AF37] transition-all duration-300"
          >
            &times;
          </button>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"></span>
              </div>
              <h3 className="text-white font-semibold text-xl tracking-wide">{selectedCity.city}</h3>
            </div>
            
            <div className="h-[1px] w-full bg-gradient-to-r from-[#D4AF37]/50 to-transparent mb-3"></div>
            
            <p className="text-gray-300 font-light text-sm leading-relaxed">{selectedCity.info}</p>
          </div>
        </div>
      )}
    </div>
  );
}
