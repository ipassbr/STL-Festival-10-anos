# Design System - STL Festival

## 📅 Informações do Documento

- **Data de Criação:** 26 de Janeiro de 2026
- **Versão:** 1.0
- **Baseado em:** Identidade visual existente do STL Festival
- **Status:** Em desenvolvimento

---

## 🎨 Visão Geral

O Design System do STL Festival é construído sobre a identidade vibrante e energética do festival, refletindo a fusão de Reggae, Trap e Rap através de cores ousadas, tipografia expressiva e elementos visuais impactantes.

### Princípios de Design

1. **Vibrante e Energético** - Cores vivas que transmitem a energia do festival
2. **Acessível** - Contraste adequado, legibilidade garantida
3. **Moderno** - Design contemporâneo alinhado com o público
4. **Responsivo** - Experiência consistente em todos os dispositivos
5. **Performance** - Design otimizado para web (CSS-first)

---

## 🎨 Cores

### Paleta Principal

#### Verde Profundo (Primary)

```css
--stl-green: #006a47; /* Verde profundo - Cor oficial */
--stl-green-light: #009966; /* Variação mais clara */
--stl-green-dark: #004d33; /* Variação mais escura */
```

**Uso:** Elementos de natureza, CTAs secundários, backgrounds de destaque
**Descrição:** Verde profundo que representa a conexão com a natureza

#### Vermelho-Alaranjado (Accent)

```css
--stl-red: #ff4d2d; /* Vermelho-alaranjado vibrante - Cor oficial */
--stl-red-light: #ff7052; /* Variação mais clara */
--stl-red-dark: #e63d1f; /* Variação mais escura */
```

**Uso:** CTAs principais, destaques importantes, elementos de ação
**Descrição:** Cor de energia e urgência

#### Laranja Intenso (Accent)

```css
--stl-orange: #ff9d28; /* Laranja intenso - Cor oficial */
--stl-orange-light: #ffb34d; /* Variação mais clara */
--stl-orange-dark: #e68a1f; /* Variação mais escura */
```

**Uso:** Acentos, badges, elementos decorativos, hover states
**Descrição:** Laranja vibrante que transmite energia

#### Azul Teal (Secondary)

```css
--stl-teal: #007b9a; /* Azul-verde (teal) - Cor oficial */
--stl-teal-light: #009bb8; /* Variação mais clara */
--stl-teal-dark: #005f77; /* Variação mais escura */
```

**Uso:** Links, elementos informativos, backgrounds alternativos
**Descrição:** Azul-verde que adiciona sofisticação

#### Creme Claro (Neutral Light)

```css
--stl-cream: #fefbdf; /* Creme claro - Cor oficial */
--stl-cream-light: #fffef0; /* Variação mais clara */
--stl-cream-dark: #f5f2c8; /* Variação mais escura */
```

**Uso:** Backgrounds claros, cards, seções alternadas
**Descrição:** Creme suave para contraste suave

#### Azul Índigo (Dark)

```css
--stl-indigo: #1e1876; /* Azul-índigo escuro - Cor oficial */
--stl-indigo-light: #2d2499; /* Variação mais clara */
--stl-indigo-dark: #15115a; /* Variação mais escura */
```

**Uso:** Backgrounds escuros, footers, textos sobre cores claras, hero sections
**Descrição:** Índigo profundo que transmite sofisticação

### Cores Neutras

#### Grayscale

```css
--stl-white: #ffffff;
--stl-gray-50: #fafafa;
--stl-gray-100: #f5f5f5;
--stl-gray-200: #eeeeee;
--stl-gray-300: #e0e0e0;
--stl-gray-400: #bdbdbd;
--stl-gray-500: #9e9e9e;
--stl-gray-600: #757575;
--stl-gray-700: #616161;
--stl-gray-800: #424242;
--stl-gray-900: #212121;
--stl-black: #000000;
```

### Cores Semânticas

#### Success

```css
--stl-success: var(--stl-green);
--stl-success-light: var(--stl-green-light);
--stl-success-dark: var(--stl-green-dark);
```

#### Warning

```css
--stl-warning: var(--stl-orange);
--stl-warning-light: var(--stl-orange-light);
--stl-warning-dark: var(--stl-orange-dark);
```

#### Error

```css
--stl-error: var(--stl-red);
--stl-error-light: var(--stl-red-light);
--stl-error-dark: var(--stl-red-dark);
```

#### Info

```css
--stl-info: var(--stl-teal);
--stl-info-light: var(--stl-teal-light);
--stl-info-dark: var(--stl-teal-dark);
```

### Contextos de Uso

#### Backgrounds

```css
--bg-primary: var(--stl-white);
--bg-secondary: var(--stl-cream);
--bg-dark: var(--stl-indigo);
--bg-accent-1: var(--stl-green-light);
--bg-accent-2: var(--stl-teal-light);
```

#### Textos

```css
--text-primary: var(--stl-gray-900);
--text-secondary: var(--stl-gray-700);
--text-tertiary: var(--stl-gray-600);
--text-inverse: var(--stl-white);
--text-link: var(--stl-teal);
--text-link-hover: var(--stl-teal-dark);
```

#### Bordas

```css
--border-light: var(--stl-gray-200);
--border-medium: var(--stl-gray-300);
--border-dark: var(--stl-gray-400);
```

---

## 📝 Tipografia

### Fontes

#### Jairo (Display / Headings)

**Arquivo:** `/assets/fonts/jairo-condensed-rounded-font/`

```css
@font-face {
  font-family: 'Jairo';
  src:
    url('/fonts/Jairo.woff2') format('woff2'),
    url('/fonts/Jairo.woff') format('woff'),
    url('/fonts/Jairo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

**Características:**

- Condensed Rounded
- Impactante e moderna
- Ideal para títulos grandes

**Uso:**

- Hero headings
- Títulos de seção (H1, H2)
- Números grandes (contagem regressiva)
- Logo type treatments

#### Superbusy Activity (Decorativo)

**Arquivo:** `/assets/fonts/superbusy-activity-fun-pairing-font/`

```css
@font-face {
  font-family: 'Superbusy Activity';
  src:
    url('/fonts/SuperbusyActivity.woff2') format('woff2'),
    url('/fonts/SuperbusyActivity.woff') format('woff'),
    url('/fonts/SuperbusyActivity.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

**Características:**

- Fun e expressiva
- Activity-themed
- Ideal para chamadas especiais

**Uso:**

- Badges e labels especiais
- Chamadas de destaque
- Elementos decorativos
- Acentos visuais

#### Sistema (Body Text)

**Fallback:** System fonts para performance

```css
--font-system:
  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
  Cantarell, 'Helvetica Neue', sans-serif;
```

**Uso:**

- Corpo de texto
- Parágrafos
- Listas
- Textos longos

### Hierarquia Tipográfica

#### Desktop

```css
/* Display - Hero */
--font-size-display: 6rem; /* 96px */
--line-height-display: 1.1;
--font-weight-display: 700;
--font-family-display: 'Jairo', var(--font-system);

/* Heading 1 */
--font-size-h1: 4rem; /* 64px */
--line-height-h1: 1.2;
--font-weight-h1: 700;
--font-family-h1: 'Jairo', var(--font-system);

/* Heading 2 */
--font-size-h2: 3rem; /* 48px */
--line-height-h2: 1.25;
--font-weight-h2: 700;
--font-family-h2: 'Jairo', var(--font-system);

/* Heading 3 */
--font-size-h3: 2rem; /* 32px */
--line-height-h3: 1.3;
--font-weight-h3: 600;
--font-family-h3: var(--font-system);

/* Heading 4 */
--font-size-h4: 1.5rem; /* 24px */
--line-height-h4: 1.4;
--font-weight-h4: 600;
--font-family-h4: var(--font-system);

/* Body Large */
--font-size-lg: 1.25rem; /* 20px */
--line-height-lg: 1.6;
--font-weight-lg: 400;

/* Body Regular */
--font-size-base: 1rem; /* 16px */
--line-height-base: 1.6;
--font-weight-base: 400;

/* Body Small */
--font-size-sm: 0.875rem; /* 14px */
--line-height-sm: 1.5;
--font-weight-sm: 400;

/* Body XSmall */
--font-size-xs: 0.75rem; /* 12px */
--line-height-xs: 1.4;
--font-weight-xs: 400;
```

#### Mobile (Responsive Scale)

```css
/* Fluid Typography usando clamp() */
--font-size-display-fluid: clamp(3rem, 8vw, 6rem);
--font-size-h1-fluid: clamp(2.5rem, 6vw, 4rem);
--font-size-h2-fluid: clamp(2rem, 5vw, 3rem);
--font-size-h3-fluid: clamp(1.5rem, 4vw, 2rem);
--font-size-h4-fluid: clamp(1.25rem, 3vw, 1.5rem);
```

### Font Weights

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

---

## 📏 Espaçamento

### Sistema de 8px

```css
/* Base: 8px */
--spacing-0: 0;
--spacing-1: 0.25rem; /* 4px */
--spacing-2: 0.5rem; /* 8px */
--spacing-3: 0.75rem; /* 12px */
--spacing-4: 1rem; /* 16px */
--spacing-5: 1.25rem; /* 20px */
--spacing-6: 1.5rem; /* 24px */
--spacing-8: 2rem; /* 32px */
--spacing-10: 2.5rem; /* 40px */
--spacing-12: 3rem; /* 48px */
--spacing-16: 4rem; /* 64px */
--spacing-20: 5rem; /* 80px */
--spacing-24: 6rem; /* 96px */
--spacing-32: 8rem; /* 128px */
--spacing-40: 10rem; /* 160px */
--spacing-48: 12rem; /* 192px */
--spacing-64: 16rem; /* 256px */
```

### Uso por Contexto

```css
/* Componentes */
--spacing-component-padding: var(--spacing-6);
--spacing-component-gap: var(--spacing-4);

/* Seções */
--spacing-section-padding-y: var(--spacing-16);
--spacing-section-padding-x: var(--spacing-6);
--spacing-section-gap: var(--spacing-12);

/* Cards */
--spacing-card-padding: var(--spacing-6);
--spacing-card-gap: var(--spacing-4);

/* Container */
--spacing-container-padding-x: var(--spacing-6);
```

---

## 🔲 Layout e Grid

### Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: var(--spacing-6);
}

@media (min-width: 768px) {
  .container {
    padding-inline: var(--spacing-8);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-inline: var(--spacing-12);
  }
}
```

### Grid System

```css
.grid {
  display: grid;
  gap: var(--spacing-6);
}

/* Layouts Comuns */
.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

/* Responsivo */
@media (max-width: 768px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

### Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

---

## 🎭 Sombras

### Box Shadows

```css
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl:
  0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

/* Sombras Coloridas para CTAs */
--shadow-coral: 0 10px 25px -5px rgb(255 99 71 / 0.4);
--shadow-green: 0 10px 25px -5px rgb(27 109 92 / 0.4);
--shadow-turquoise: 0 10px 25px -5px rgb(27 139 155 / 0.4);
```

---

## 🔘 Border Radius

```css
--radius-none: 0;
--radius-sm: 0.25rem; /* 4px */
--radius-md: 0.5rem; /* 8px */
--radius-lg: 0.75rem; /* 12px */
--radius-xl: 1rem; /* 16px */
--radius-2xl: 1.5rem; /* 24px */
--radius-3xl: 2rem; /* 32px */
--radius-full: 9999px; /* Circular */
```

---

## 🎬 Animações e Transições

### Duração

```css
--duration-instant: 75ms;
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 700ms;
```

### Easing Functions

```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Transições Padrão

```css
--transition-all: all var(--duration-normal) var(--ease-out);
--transition-colors:
  color var(--duration-normal) var(--ease-out),
  background-color var(--duration-normal) var(--ease-out),
  border-color var(--duration-normal) var(--ease-out);
--transition-transform: transform var(--duration-normal) var(--ease-out);
--transition-opacity: opacity var(--duration-normal) var(--ease-out);
```

### Animações Pré-definidas

```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Pulse */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}
```

---

## 🔘 Componentes Base

### Botões

#### Primário (CTA Principal)

```css
.btn-primary {
  background: var(--stl-red);
  color: var(--stl-white);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-xl);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  box-shadow: 0 10px 25px -5px rgba(255, 77, 45, 0.4);
  transition: var(--transition-all);
  border: none;
  cursor: pointer;
  min-height: 44px; /* Touch-friendly */
}

.btn-primary:hover {
  background: var(--stl-red-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### Secundário

```css
.btn-secondary {
  background: var(--stl-green);
  color: var(--stl-white);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-xl);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  box-shadow: 0 10px 25px -5px rgba(0, 106, 71, 0.4);
  transition: var(--transition-all);
  border: none;
  cursor: pointer;
  min-height: 44px;
}

.btn-secondary:hover {
  background: var(--stl-green-dark);
  transform: translateY(-2px);
}
```

#### Outline

```css
.btn-outline {
  background: transparent;
  color: var(--stl-indigo);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-xl);
  font-weight: var(--font-weight-semibold);
  border: 2px solid var(--stl-indigo);
  transition: var(--transition-all);
  cursor: pointer;
  min-height: 44px;
}

.btn-outline:hover {
  background: var(--stl-indigo);
  color: var(--stl-white);
}
```

### Cards

```css
.card {
  background: var(--stl-white);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
  transition: var(--transition-all);
}

.card:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
}
```

### Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  font-family: 'Superbusy Activity', var(--font-system);
}

.badge-reggae {
  background: var(--stl-green-light);
  color: var(--stl-green-dark);
}

.badge-trap {
  background: var(--stl-coral-light);
  color: var(--stl-coral-dark);
}

.badge-rap {
  background: var(--stl-turquoise-light);
  color: var(--stl-turquoise-dark);
}
```

---

## 🖼️ Imagens

### Otimização

```css
.image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl);
}

.image-responsive {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* Aspect Ratios */
.aspect-square {
  aspect-ratio: 1 / 1;
}

.aspect-video {
  aspect-ratio: 16 / 9;
}

.aspect-portrait {
  aspect-ratio: 3 / 4;
}
```

### Badges

```css
/* Badge Base */
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition-all);
  cursor: pointer;
}

/* Badge Spotify */
.badge-spotify {
  background: #1db954; /* Spotify Green */
  color: var(--stl-white);
  box-shadow: var(--shadow-sm);
}

.badge-spotify:hover {
  background: #1ed760;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Badge Acessibilidade */
.badge-accessibility {
  background: var(--stl-teal);
  color: var(--stl-white);
  box-shadow: var(--shadow-sm);
}

.badge-accessibility:hover {
  background: #008aaa;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Badge Sizes */
.badge-sm {
  padding: var(--spacing-1) var(--spacing-3);
  font-size: var(--font-size-xs);
}

.badge-lg {
  padding: var(--spacing-3) var(--spacing-6);
  font-size: var(--font-size-base);
}
```

**Exemplo de Uso:**

```html
<!-- Badge Spotify -->
<a
  href="https://open.spotify.com/playlist/[ID]"
  target="_blank"
  class="badge badge-spotify"
>
  🎵 Ouça nossa playlist
</a>

<!-- Badge Acessibilidade -->
<a href="#acessibilidade" class="badge badge-accessibility">
  ♿ Evento Acessível
</a>
```

---

### Skeleton Loading

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--stl-gray-200) 25%,
    var(--stl-gray-100) 50%,
    var(--stl-gray-200) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
  border-radius: var(--radius-md);
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

---

## 📱 Responsividade

### Mobile First

```css
/* Base (Mobile): 320px+ */
.section {
  padding: var(--spacing-12) var(--spacing-6);
}

/* Tablet: 768px+ */
@media (min-width: 768px) {
  .section {
    padding: var(--spacing-16) var(--spacing-8);
  }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .section {
    padding: var(--spacing-24) var(--spacing-12);
  }
}
```

---

## ♿ Acessibilidade

### Focus States

```css
*:focus-visible {
  outline: 3px solid var(--stl-teal);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

### Skip Links

```css
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: var(--stl-indigo);
  color: var(--stl-white);
  padding: var(--spacing-4) var(--spacing-6);
  text-decoration: none;
  z-index: 9999;
}

.skip-link:focus {
  top: 0;
}
```

### Contraste de Cores

**Validado segundo WCAG 2.1 AA:**

- Texto normal (16px+): 4.5:1 mínimo
- Texto grande (24px+): 3:1 mínimo
- Elementos UI: 3:1 mínimo

---

## 📦 Tokens CSS (Arquivo Completo)

```css
/* /src/styles/tokens.css */

:root {
  /* ========== CORES OFICIAIS STL FESTIVAL ========== */

  /* Verde Profundo (Primary) */
  --stl-green: #006a47;
  --stl-green-light: #009966;
  --stl-green-dark: #004d33;

  /* Vermelho-Alaranjado (Accent) */
  --stl-red: #ff4d2d;
  --stl-red-light: #ff7052;
  --stl-red-dark: #e63d1f;

  /* Laranja Intenso (Accent) */
  --stl-orange: #ff9d28;
  --stl-orange-light: #ffb34d;
  --stl-orange-dark: #e68a1f;

  /* Azul Teal (Secondary) */
  --stl-teal: #007b9a;
  --stl-teal-light: #009bb8;
  --stl-teal-dark: #005f77;

  /* Creme Claro (Neutral Light) */
  --stl-cream: #fefbdf;
  --stl-cream-light: #fffef0;
  --stl-cream-dark: #f5f2c8;

  /* Azul Índigo (Dark) */
  --stl-indigo: #1e1876;
  --stl-indigo-light: #2d2499;
  --stl-indigo-dark: #15115a;

  /* Grayscale */
  --stl-white: #ffffff;
  --stl-gray-50: #fafafa;
  --stl-gray-100: #f5f5f5;
  --stl-gray-900: #212121;
  --stl-black: #000000;

  /* ========== TIPOGRAFIA ========== */

  --font-display: 'Jairo', -apple-system, sans-serif;
  --font-decorative: 'Superbusy Activity', cursive;
  --font-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  --font-size-display: clamp(3rem, 8vw, 6rem);
  --font-size-h1: clamp(2.5rem, 6vw, 4rem);
  --font-size-h2: clamp(2rem, 5vw, 3rem);
  --font-size-base: 1rem;

  /* ========== ESPAÇAMENTO ========== */

  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;

  /* ========== ANIMAÇÕES ========== */

  --duration-normal: 300ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);

  /* ========== SOMBRAS ========== */

  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  --shadow-red: 0 10px 25px -5px rgba(255, 77, 45, 0.4);
  --shadow-green: 0 10px 25px -5px rgba(0, 106, 71, 0.4);

  /* ========== BORDER RADIUS ========== */

  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;
}
```

---

## 🎨 Exemplos de Aplicação

### Hero Section

```css
.hero {
  background: linear-gradient(
    135deg,
    var(--stl-indigo) 0%,
    var(--stl-indigo-light) 100%
  );
  color: var(--stl-white);
  padding: var(--spacing-24) var(--spacing-6);
  text-align: center;
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--font-size-display);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: var(--spacing-6);
  animation: slideUp 0.8s var(--ease-out);
}

.hero__cta {
  margin-top: var(--spacing-8);
}
```

### Lineup Cards

```css
.lineup-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6);
  padding: var(--spacing-12) var(--spacing-6);
}

.artist-card {
  background: var(--stl-white);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-all);
}

.artist-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.artist-card__name {
  font-size: var(--font-size-h3);
  font-weight: 700;
  color: var(--stl-indigo);
}
```

---

## 📝 Checklist de Implementação

### Fase 1: Setup

- [ ] Instalar fontes (Jairo, Superbusy Activity)
- [ ] Criar arquivo `tokens.css` com variáveis
- [ ] Configurar Tailwind (ou CSS puro) com tokens
- [ ] Testar fontes carregam corretamente

### Fase 2: Componentes Base

- [ ] Botões (primary, secondary, outline)
- [ ] Cards
- [ ] Badges
- [ ] Inputs (se houver formulário)

### Fase 3: Seções

- [ ] Hero com animações
- [ ] Lineup grid
- [ ] Setores comparativos
- [ ] Footer

### Fase 4: Responsividade

- [ ] Testar em 320px, 768px, 1024px, 1440px
- [ ] Ajustar tipografia fluida
- [ ] Validar touch targets (44x44px)

### Fase 5: Acessibilidade

- [ ] Contraste de cores validado
- [ ] Focus states visíveis
- [ ] Skip links implementados
- [ ] Alt text em imagens

---

## 🔄 Próximos Passos

1. ✅ Design System documentado
2. 📝 **Inicializar projeto Astro** (próximo)
3. 📝 Implementar tokens CSS
4. 📝 Criar componentes base
5. 📝 Desenvolver seções

---

**Versão:** 1.0
**Status:** ✅ Aprovado para implementação
**Baseado em:** Assets existentes do STL Festival
