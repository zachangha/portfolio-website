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
          new THREE.MeshPhongMaterial({ color: '#1a202c', opacity: 1, transparent: false })
        }
        onGlobeReady={() => {
          if (globeEl.current) {
             // @ts-ignore
            globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 1.7 }, 0);
            // @ts-ignore
            globeEl.current.controls().autoRotate = false;
            // @ts-ignore
            globeEl.current.controls().autoRotateSpeed = 0.5;
            // @ts-ignore
            globeEl.current.controls().enableZoom = false;
          }
        }}
        polygonsData={countries.features}
        polygonCapColor={() => 'rgba(0,0,0,0)'}
        polygonSideColor={() => 'rgba(0,0,0,0)'}
        polygonStrokeColor={() => '#3b82f6'}
        polygonAltitude={0.01}
      />
    </div>
  );
}
