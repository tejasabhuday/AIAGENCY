'use client';
import { useEffect, useRef } from 'react';
import styles from './SpotlightBg.module.css';

export default function SpotlightBg() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = bgRef.current;
      if (!el) return;
      el.style.setProperty('--x', `${e.clientX}px`);
      el.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={bgRef} className={styles.spotlightBg} aria-hidden="true" />
  );
}
