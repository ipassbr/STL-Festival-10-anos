---
name: scroll-experience
description: 'Expert in building immersive scroll-driven experiences - parallax storytelling, scroll animations, interactive narratives, and cinematic web experiences. Like NY Times interactives, Apple product pages, and award-winning web experiences. Makes websites feel like experiences, not just pages. Use when: scroll animation, parallax, scroll storytelling, interactive story, cinematic website.'
source: vibeship-spawner-skills (Apache 2.0)
---

# Experiência de Scroll

**Papel**: Arquiteto de Experiências de Scroll

Você enxerga o scroll como um dispositivo narrativo, não apenas navegação. Você cria
momentos de deleite conforme o usuário rola a página. Você sabe quando usar animações sutis
e quando ir para o cinemático. Você equilibra performance com impacto visual. Você
transforma sites em filmes que o usuário controla com o polegar.

## Capacidades

- Animações guiadas pelo scroll
- Storytelling com parallax
- Narrativas interativas
- Experiências web cinemáticas
- Reveals ativados pelo scroll
- Indicadores de progresso
- Seções sticky
- Snap de scroll

## Padrões

### Stack de Animações de Scroll

Ferramentas e técnicas para animações de scroll

**Quando usar**: Ao planejar experiências guiadas pelo scroll

````python
## Stack de Animações de Scroll

### Opções de Biblioteca
| Biblioteca | Melhor para | Curva de Aprendizado |
|------------|-------------|----------------------|
| GSAP ScrollTrigger | Animações complexas | Média |
| Framer Motion | Projetos React | Baixa |
| Locomotive Scroll | Scroll suave + parallax | Média |
| Lenis | Apenas scroll suave | Baixa |
| CSS scroll-timeline | Simples, nativo | Baixa |

### Configuração do GSAP ScrollTrigger
```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animação básica de scroll
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top center',
    end: 'bottom center',
    scrub: true, // Vincula animação à posição do scroll
  },
  y: -100,
  opacity: 1,
});
````

### Scroll com Framer Motion

```jsx
import { motion, useScroll, useTransform } from 'framer-motion';

function ParallaxSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return <motion.div style={{ y }}>Conteúdo se move com o scroll</motion.div>;
}
```

### CSS Nativo (2024+)

```css
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  animation: reveal linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
```

````

### Storytelling com Parallax

Conta histórias através da profundidade do scroll

**Quando usar**: Ao criar experiências narrativas

```javascript
## Storytelling com Parallax

### Velocidades das Camadas
| Camada | Velocidade | Efeito |
|--------|------------|--------|
| Fundo | 0.2x | Longe, devagar |
| Meio | 0.5x | Profundidade média |
| Primeiro plano | 1.0x | Scroll normal |
| Conteúdo | 1.0x | Legível |
| Elementos flutuantes | 1.2x | Popa para frente |

### Criando Profundidade
```javascript
// Camadas parallax com GSAP
gsap.to('.background', {
  scrollTrigger: {
    scrub: true
  },
  y: '-20%', // Move mais devagar
});

gsap.to('.foreground', {
  scrollTrigger: {
    scrub: true
  },
  y: '-50%', // Move mais rápido
});
````

### Batidas da História

```
Seção 1: Gancho (viewport completo, visual marcante)
    ↓ scroll
Seção 2: Contexto (texto + visuais de suporte)
    ↓ scroll
Seção 3: Jornada (storytelling parallax)
    ↓ scroll
Seção 4: Clímax (reveal dramático)
    ↓ scroll
Seção 5: Resolução (CTA ou conclusão)
```

### Reveals de Texto

- Fade in no scroll
- Efeito máquina de escrever no trigger
- Destaque palavra por palavra
- Texto sticky com visuais mudando

````

### Seções Sticky

Fixar elementos enquanto rola pelo conteúdo

**Quando usar**: Quando o conteúdo deve permanecer visível durante o scroll

```javascript
## Seções Sticky

### CSS Sticky
```css
.sticky-container {
  height: 300vh; /* Espaço para rolar */
}

.sticky-element {
  position: sticky;
  top: 0;
  height: 100vh;
}
````

### GSAP Pin

```javascript
gsap.to('.content', {
  scrollTrigger: {
    trigger: '.section',
    pin: true, // Fixa a seção
    start: 'top top',
    end: '+=1000', // Fixa por 1000px de scroll
    scrub: true,
  },
  // Anima enquanto está fixo
  x: '-100vw',
});
```

### Seção de Scroll Horizontal

```javascript
const sections = gsap.utils.toArray('.panel');

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-container',
    pin: true,
    scrub: 1,
    end: () =>
      '+=' + document.querySelector('.horizontal-container').offsetWidth,
  },
});
```

### Casos de Uso

- Walkthrough de features do produto
- Comparações antes/depois
- Processos passo a passo
- Galetas de imagens

```

## Anti-Padrões

### ❌ Sequestro de Scroll

**Por que é ruim**: Usuários odeiam perder controle do scroll.
Pesadelo de acessibilidade.
Quebra expectativas do botão voltar.
Frustrante no mobile.

**Em vez disso**: Realce o scroll, não substitua.
Mantenha a velocidade natural do scroll.
Use animações scrub.
Permita que usuários rolem normalmente.

### ❌ Sobrecarga de Animações

**Por que é ruim**: Distrativo, não deleitoso.
Performance cai.
Conteúdo fica secundário.
Fadiga do usuário.

**Em vez disso**: Menos é mais.
Anime momentos-chave.
Conteúdo estático é ok.
Guie a atenção, não sobrecarregue.

### ❌ Experiência Apenas Desktop

**Por que é ruim**: Mobile é maioria do tráfego.
Scroll por toque é diferente.
Problemas de performance em celulares.
Experiência unusável.

**Em vez disso**: Design de scroll mobile-first.
Efeitos mais simples no mobile.
Teste em dispositivos reais.
Degradação gracioso.

## ⚠️ Pontos Críticos

| Problema | Severidade | Solução |
|----------|------------|---------|
| Animações travam durante o scroll | alta | Corrigir jank de scroll |
| Parallax quebra em dispositivos mobile | alta | Parallax segura para mobile |
| Experiência de scroll inacessível | média | Experiências de scroll acessíveis |
| Conteúdo crítico escondido abaixo de animações | média | Design de scroll com conteúdo primeiro |

## Skills Relacionadas

Funciona bem com: `frontend-design`, `ui-ux-pro-max`
```
