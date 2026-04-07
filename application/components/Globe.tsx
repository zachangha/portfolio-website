"use client";
import React, { useEffect, useRef, useState } from 'react';
import GlobeT, { GlobeMethods } from 'react-globe.gl';
import * as THREE from 'three';

export default function Globe() {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [mounted, setMounted] = useState(false);
  const [countries, setCountries] = useState({ features: [] });
  const [width, setWidth] = useState(0);

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
    <div className="flex items-center justify-center">
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
            globeEl.current.controls().autoRotate = true;
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

        htmlElementsData={[{ lat: 34.0522, lng: -118.2437 }]} // Los Angeles
        htmlElement={(d) => {
          const el = document.createElement('div');
          el.innerHTML = `
            <span class="flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-gold shadow-[0_0_10px_#D4AF37]"></span>
            </span>
          `;
          return el;
        }}
      />
    </div>
  );
}
