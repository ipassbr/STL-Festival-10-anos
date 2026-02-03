/**
 * Preloader - Componente de cortinas verticais
 * Exibe logo e frase motivacional, abre ao scroll virtual
 * O scroll não move a página, apenas controla a animação das cortinas
 *
 * Stack: Astro + React Islands + Framer Motion
 */

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface PreloaderProps {
  logoSrc: string;
  phraseTop: string;
  phraseBottom: string;
}

// Flag global para prevenir múltiplas instâncias
let preloaderInstance: boolean = false;

export default function Preloader({
  logoSrc,
  phraseTop,
  phraseBottom,
}: PreloaderProps) {
  const [isComplete, setIsComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Sempre renderizar o preloader (mas verificar instância única)
  const [shouldRender] = useState(() => {
    if (typeof window === 'undefined') return true;

    // Se já existe uma instância, não renderizar outra
    if (preloaderInstance) {
      console.warn('[Preloader] Instância duplicada detectada e bloqueada');
      return false;
    }

    preloaderInstance = true;
    return true;
  });

  // Initialize reducedMotion with the current value
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Motion value para progresso animado
  const progressMotion = useMotionValue(0);
  const springProgress = useSpring(progressMotion, {
    stiffness: 150, // Aumentado para resposta mais rápida
    damping: 25, // Reduzido para animação mais ágil
  });

  // Verificar preferência de reduced motion
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Detectar se é mobile
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMobile = () => {
      const isTouchDevice =
        'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsMobile(isTouchDevice && isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ref para manter progresso atual sem causar re-renders
  const progressRef = useRef(0);

  // Transformar progresso animado em valores de animação
  const topCurtainY = useTransform(springProgress, [0, 100], ['0%', '-100%']);
  const bottomCurtainY = useTransform(springProgress, [0, 100], ['0%', '100%']);
  const logoOpacity = useTransform(springProgress, [0, 50, 100], [1, 0, 0]);
  const phraseOpacity = useTransform(springProgress, [0, 50, 100], [1, 0, 0]);
  const preloaderOpacity = useTransform(springProgress, [50, 100], [1, 0]);

  // Auto-play no mobile
  useEffect(() => {
    if (!isMobile || reducedMotion || isComplete || !shouldRender) return;

    // Flag para prevenir múltiplas execuções
    let hasStarted = false;

    const autoPlayTimer = setTimeout(() => {
      if (hasStarted) return;
      hasStarted = true;

      let currentProgress = 0;
      const autoPlayInterval = setInterval(() => {
        currentProgress += 2;

        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(autoPlayInterval);
        }

        progressRef.current = currentProgress;
        progressMotion.set(currentProgress);
        window.dispatchEvent(
          new CustomEvent('preloader-progress', { detail: currentProgress })
        );

        if (currentProgress >= 100) {
          setIsComplete(true);
          window.dispatchEvent(new CustomEvent('preloader-complete'));

          setTimeout(() => {
            document.body.style.overflow = '';
            window.scrollTo(0, 0);
          }, 500);
        }
      }, 50);

      return () => clearInterval(autoPlayInterval);
    }, 500);

    return () => {
      clearTimeout(autoPlayTimer);
      hasStarted = false;
    };
  }, [isMobile, reducedMotion, isComplete, shouldRender, progressMotion]);

  // Capturar eventos de scroll e controlar progresso (apenas desktop)
  useEffect(() => {
    if (isComplete || reducedMotion || isMobile || !shouldRender) return;

    let lastTouchY = 0;
    let isProcessing = false; // Flag para prevenir execuções simultâneas

    const updateProgress = (newProgress: number) => {
      if (isProcessing) return;

      progressRef.current = newProgress;
      progressMotion.set(newProgress);
      window.dispatchEvent(
        new CustomEvent('preloader-progress', { detail: newProgress })
      );

      if (newProgress >= 100 && !isComplete) {
        isProcessing = true;
        setIsComplete(true);
        window.dispatchEvent(new CustomEvent('preloader-complete'));

        // Garantir que usuário permanece no topo (seção Hero)
        window.scrollTo(0, 0);
        setTimeout(() => {
          document.body.style.overflow = '';
          isProcessing = false;
        }, 500);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isComplete) return;

      e.preventDefault();
      e.stopPropagation();

      // Incrementar progresso baseado na direção do scroll
      // Aumentado para animação mais rápida
      const delta = e.deltaY > 0 ? 8 : -8; // Velocidade de abertura aumentada
      const newProgress = Math.max(
        0,
        Math.min(100, progressRef.current + delta)
      );
      updateProgress(newProgress);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches[0]) {
        lastTouchY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isComplete || !e.touches[0]) return;

      e.preventDefault();

      const touchY = e.touches[0].clientY;
      const deltaY = lastTouchY - touchY;
      const delta = deltaY > 0 ? 12 : -12; // Touch mais rápido e responsivo
      const newProgress = Math.max(
        0,
        Math.min(100, progressRef.current + delta)
      );

      updateProgress(newProgress);
      lastTouchY = touchY;
    };

    // Prevenir scroll padrão enquanto preloader está ativo
    document.body.style.overflow = 'hidden';
    // Garantir que usuário permanece no topo durante toda a animação
    window.scrollTo(0, 0);

    // Remover listeners existentes antes de adicionar novos (prevenir duplicatas)
    window.removeEventListener('wheel', handleWheel);
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);

    // Adicionar listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Sincronizar motion value inicial
    progressMotion.set(progressRef.current);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = '';
      isProcessing = false;
    };
  }, [isComplete, reducedMotion, isMobile, shouldRender, progressMotion]);

  // Remover do DOM após conclusão
  useEffect(() => {
    if (!isComplete) return;

    const removalTimer = setTimeout(() => {
      const preloader = document.getElementById('stl-preloader-root');
      if (preloader) {
        preloader.remove();
        // Resetar flag global após remover
        preloaderInstance = false;
      }
    }, 1000);

    return () => clearTimeout(removalTimer);
  }, [isComplete]);

  // Cleanup global ao desmontar componente
  useEffect(() => {
    return () => {
      // Resetar flag quando componente é desmontado
      preloaderInstance = false;
    };
  }, []);

  // Se reduced motion, completo, ou já foi exibido (em produção), não renderizar preloader
  if (reducedMotion || isComplete || !shouldRender) {
    return null;
  }

  return (
    <motion.div
      id="stl-preloader-root"
      className="fixed inset-0 z-[9999]"
      style={{ opacity: preloaderOpacity }}
    >
      {/* Screen reader only text */}
      <span className="sr-only">
        Carregando conteúdo do STL Festival.
        {!isMobile && ' Role a página para continuar.'}
        {isMobile && ' Aguarde, carregamento automático.'}
      </span>

      {/* Cortina Superior */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0 top-0 flex h-1/2 items-center justify-center bg-black"
        style={{
          y: topCurtainY,
        }}
      >
        <motion.div
          className="pointer-events-none flex flex-col items-center justify-center gap-6 px-6 md:px-8"
          style={{ opacity: phraseOpacity }}
        >
          {/* Logo */}
          <motion.img
            src={logoSrc}
            alt="STL Festival"
            className="h-40 w-40 object-contain sm:h-48 sm:w-48 md:h-56 md:w-56"
            width="224"
            height="224"
            loading="eager"
            decoding="async"
            style={{ opacity: logoOpacity }}
          />

          {/* Primeira parte da frase - Fonte Superbusy Activity (IDV) */}
          <motion.p
            className="max-w-xl px-4 text-center text-2xl font-light text-white sm:text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily:
                "var(--font-decorative, 'Superbusy Activity'), cursive, sans-serif",
            }}
          >
            {phraseTop}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Cortina Inferior */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 right-0 flex h-1/2 items-center justify-center bg-black"
        style={{
          y: bottomCurtainY,
        }}
      >
        {/* Segunda parte da frase - Fonte Jairo (IDV) */}
        <motion.p
          className="pointer-events-none max-w-2xl px-6 text-center text-lg leading-relaxed text-white sm:text-xl md:px-8 md:text-2xl lg:text-3xl"
          style={{
            opacity: phraseOpacity,
            fontFamily:
              "var(--font-heading, 'Jairo'), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          {phraseBottom}
        </motion.p>
      </motion.div>

      {/* Indicador de Scroll - Apenas Desktop - Centralizado */}
      {!isMobile && (
        <motion.div
          className="pointer-events-none fixed left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3"
          style={{ opacity: phraseOpacity }}
        >
          {/* Mouse SVG minimalista com brilho pulsante */}
          <motion.svg
            width="24"
            height="38"
            viewBox="0 0 24 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              filter: [
                'drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))',
                'drop-shadow(0 0 12px rgba(255, 255, 255, 0.9))',
                'drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Corpo do mouse */}
            <rect
              x="1"
              y="1"
              width="22"
              height="36"
              rx="11"
              stroke="white"
              strokeWidth="1.5"
              fill="transparent"
            />

            {/* Linha central do scroll */}
            <line
              x1="12"
              y1="10"
              x2="12"
              y2="16"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </motion.svg>

          {/* Texto "Scroll" */}
          <p
            className="text-xs font-light tracking-widest text-white opacity-50"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            SCROLL
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
