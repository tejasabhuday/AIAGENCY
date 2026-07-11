'use client';
import { useRef, useEffect, useState } from 'react';
import styles from './HeroVisual.module.css';

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setCoords({ x, y });
    };

    const handleMouseLeave = () => {
      setCoords({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    el.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth spring interpolation using CSS variables
  const transformStyle = {
    transform: `perspective(1000px) rotateY(${coords.x * 24}deg) rotateX(${coords.y * -20}deg) translateZ(10px)`,
  };

  const shadowStyle = {
    transform: `translate(${coords.x * -20}px, ${coords.y * -20}px) scale(0.95)`,
  };

  const ringStyle = {
    transform: `perspective(1000px) rotate(${coords.x * 30}deg) rotateX(${coords.y * 40}deg) translateZ(30px)`,
  };

  return (
    <div ref={containerRef} className={styles.container} aria-hidden="true">
      {/* Dynamic 3D Sphere Group */}
      <div className={styles.scene} style={transformStyle}>
        
        {/* Backdrop Shadow */}
        <div className={styles.shadow} style={shadowStyle} />
        
        {/* Core Sphere */}
        <div className={styles.sphere}>
          <div className={styles.metallicLight} />
        </div>
        
        {/* Architectural Rings */}
        <div className={styles.ring} style={ringStyle} />
        <div className={`${styles.ring} ${styles.ringOuter}`} />
        
      </div>
    </div>
  );
}
