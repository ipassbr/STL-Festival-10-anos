/**
 * Lineup React Component - STL Festival 2026
 * Componente interativo para troca de imagens dos artistas durante scroll
 * Usa Framer Motion para animações suaves e respeita prefers-reduced-motion
 */

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  setupLineupScroll,
  getArtistIndex,
} from '@/scripts/lineup/lineupScroll';
import type { Artist } from './lineup.types';

interface LineupReactProps {
  artists: Artist[];
}

export default function LineupReact({ artists }: LineupReactProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const cleanupRef = useRef<(() => void) | null>(null);

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

  // Setup scroll handler
  useEffect(() => {
    cleanupRef.current = setupLineupScroll({
      onProgress: (progress) => {
        const newIndex = getArtistIndex(progress, artists.length);
        setCurrentIndex(newIndex);
      },
      threshold: { start: 0.1, end: 0.9 },
    });

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [artists.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setCurrentIndex((prev) => Math.min(artists.length - 1, prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artists.length]);

  const currentArtist = artists[currentIndex];

  // Variantes de animação para Framer Motion
  const imageVariants: Variants = {
    enter: {
      opacity: 0,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1.05,
    },
  };

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1], // ease-out
      };

  return (
    <>
      {/* Atualizar imagens nos mockups laterais via data attributes */}
      <div
        id="lineup-left-artist"
        data-artist-id={currentArtist?.id}
        data-artist-image={currentArtist?.imageUrl}
        data-artist-name={currentArtist?.name}
        style={{ display: 'none' }}
      />
      <div
        id="lineup-right-artist"
        data-artist-id={currentArtist?.id}
        data-artist-image={currentArtist?.imageUrl}
        data-artist-name={currentArtist?.name}
        style={{ display: 'none' }}
      />

      {/* Indicador visual do artista atual (acessibilidade) */}
      <div
        className="pointer-events-none fixed bottom-8 left-1/2 z-50 -translate-x-1/2"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence mode="wait">
          {currentArtist && (
            <motion.div
              key={currentArtist.id}
              initial="enter"
              animate="center"
              exit="exit"
              variants={imageVariants}
              transition={transition}
              className="rounded-full border border-stl-gold/30 bg-stl-indigo/90 px-6 py-3 backdrop-blur-sm"
            >
              <p className="font-jairo text-sm font-bold tracking-wider text-stl-cream md:text-base">
                {currentArtist.name}
                {currentArtist.genre && (
                  <span className="ml-2 text-stl-gold">
                    • {currentArtist.genre}
                  </span>
                )}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Contador de progresso (visual feedback) */}
      <div className="fixed bottom-4 right-4 z-40 font-mono text-xs text-stl-cream/60">
        {currentIndex + 1} / {artists.length}
      </div>
    </>
  );
}
