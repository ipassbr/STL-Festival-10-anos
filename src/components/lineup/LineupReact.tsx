/**
 * Lineup React Component - STL Festival 2026
 * Autoplay com pause no hover + artistas diferentes em cada mockup
 * Usa Framer Motion para animações suaves e respeita prefers-reduced-motion
 */

import { useEffect, useState, useRef } from 'react';
import type { Artist } from './lineup.types';

interface LineupReactProps {
  artists: Artist[];
}

export default function LineupReact({ artists }: LineupReactProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Detectar prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Autoplay: trocar artista a cada 3 segundos
  useEffect(() => {
    if (!isPaused && !prefersReducedMotion) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % artists.length);
      }, 3000); // 3 segundos
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [artists.length, isPaused, prefersReducedMotion]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setCurrentIndex((prev) => (prev - 1 + artists.length) % artists.length);
        setIsPaused(true); // Pausar autoplay ao usar teclado
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setCurrentIndex((prev) => (prev + 1) % artists.length);
        setIsPaused(true); // Pausar autoplay ao usar teclado
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setIsPaused((prev) => !prev); // Toggle pause/play
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artists.length]);

  // Pause/Resume no hover dos mockups
  useEffect(() => {
    const mockups = document.querySelectorAll('.lineup-mockup');

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    mockups.forEach((mockup) => {
      mockup.addEventListener('mouseenter', handleMouseEnter);
      mockup.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      mockups.forEach((mockup) => {
        mockup.removeEventListener('mouseenter', handleMouseEnter);
        mockup.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Artistas para cada mockup (offset de 1 para não repetir)
  const currentArtist = artists[currentIndex];
  const nextArtist = artists[(currentIndex + 1) % artists.length];

  return (
    <>
      {/* Mockup ESQUERDO - Artista atual */}
      <div
        id="lineup-left-artist"
        data-artist-id={currentArtist?.id}
        data-artist-image={currentArtist?.imageUrl}
        data-artist-name={currentArtist?.name}
        style={{ display: 'none' }}
      />

      {/* Mockup DIREITO - Próximo artista (offset +1) */}
      <div
        id="lineup-right-artist"
        data-artist-id={nextArtist?.id}
        data-artist-image={nextArtist?.imageUrl}
        data-artist-name={nextArtist?.name}
        style={{ display: 'none' }}
      />

      {/* Contador de progresso e controle - APENAS ISSO */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          className="rounded-full bg-stl-indigo/80 px-3 py-1 font-mono text-xs text-stl-cream/80 transition-colors hover:bg-stl-indigo hover:text-stl-cream"
          aria-label={isPaused ? 'Retomar autoplay' : 'Pausar autoplay'}
        >
          {isPaused ? '▶' : '⏸'}
        </button>
        <div className="font-mono text-xs text-stl-cream/60">
          {currentIndex + 1} / {artists.length}
        </div>
      </div>
    </>
  );
}
