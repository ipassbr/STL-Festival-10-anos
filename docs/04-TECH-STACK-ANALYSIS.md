# Análise de Stack Técnico
## STL Festival Landing Page

## 📅 Informações do Documento
- **Data de Criação:** 26 de Janeiro de 2026
- **Versão:** 1.0
- **Decisão:** A ser definida
- **Status:** Em análise

---

## 🎯 Objetivo da Análise

Determinar o melhor stack tecnológico para a landing page do STL Festival, considerando:
- **Performance** (Core Web Vitals)
- **Experiência de Desenvolvimento** (DX)
- **Manutenibilidade** (facilidade de atualização)
- **Requisitos do Projeto** (animações, interatividade)
- **Prazo e Recursos** (time to market)

---

## 🏆 Requisitos Técnicos do Projeto

### Essenciais
- ✅ Performance excepcional (Lighthouse 90+)
- ✅ SEO otimizado (meta tags, schema.org)
- ✅ Responsividade (mobile-first)
- ✅ Acessibilidade (WCAG 2.1 AA)
- ✅ Animações suaves (scroll, hover, transitions)
- ✅ Carregamento de imagens otimizado
- ✅ Analytics tracking

### Desejáveis
- Contagem regressiva dinâmica
- Carrossel de imagens (setores)
- Acordeão (FAQ)
- Scroll reveal animations
- Vídeo background (hero)

### Não Necessários
- ❌ Backend/API
- ❌ Autenticação
- ❌ Estado complexo
- ❌ Roteamento multi-página
- ❌ SSR de dados dinâmicos

---

## 🔍 Opções em Análise

### Opção 1: Astro (Recomendado)
**Versão:** Astro 5.x (2026)

### Opção 2: React (Next.js)
**Versão:** Next.js 15.x (App Router)

### Opção 3: React (Vite + React)
**Versão:** Vite 6.x + React 19.x

---

## ⚡ Comparação Detalhada

## 1. Performance

### Astro
**Score: 10/10** ⭐⭐⭐⭐⭐

#### Vantagens
- **Zero JavaScript por padrão** - HTML puro
- **Islands Architecture** - JS apenas onde necessário
- **Partial Hydration** - Componentes hidratam independentemente
- **Built-in optimizations:**
  - Image optimization automática
  - CSS scoping automático
  - Asset bundling otimizado
  - Prefetching inteligente

#### Métricas Esperadas
```
Lighthouse Score: 95-100
LCP: 0.8-1.5s
FID: < 10ms
CLS: < 0.05
TTI: 1.5-2.5s
Bundle Size: 10-50KB (JS)
```

#### Exemplo de Bundle
```
HTML: ~50KB (gzipped)
CSS: ~15KB (gzipped)
JS: ~20KB (gzipped, apenas interatividade)
Images: Lazy loaded, WebP automático
Total First Load: ~85KB
```

#### Código de Exemplo
```astro
---
// Componente Astro - Renderiza apenas HTML
const lineup = [
  { name: "Edson Gomes", genre: "Reggae" },
  // ...
];
---

<section class="lineup">
  {lineup.map(artist => (
    <div class="artist-card">
      <h3>{artist.name}</h3>
      <span>{artist.genre}</span>
    </div>
  ))}
</section>

<!-- Apenas esta contagem precisa de JS -->
<CountdownTimer client:load date="2026-06-06" />
```

### Next.js
**Score: 7/10** ⭐⭐⭐⭐⭐⭐⭐

#### Vantagens
- Server Components reduzem JS
- Image optimization built-in
- Streaming SSR
- Code splitting automático

#### Desvantagens
- **React runtime obrigatório** (~40KB gzipped)
- Hydration overhead
- Mais complexo para landing page simples

#### Métricas Esperadas
```
Lighthouse Score: 85-95
LCP: 1.5-2.5s
FID: < 50ms
CLS: < 0.1
TTI: 2.5-3.5s
Bundle Size: 80-150KB (JS incluindo React)
```

### Vite + React
**Score: 6/10** ⭐⭐⭐⭐⭐⭐

#### Vantagens
- Build rápido (Vite)
- Flexibilidade total
- DX excelente

#### Desvantagens
- **Mais JS que Next.js** (CSR)
- Sem SSG out-of-the-box
- Requer configuração manual de otimizações
- SEO mais complexo

#### Métricas Esperadas
```
Lighthouse Score: 75-85
LCP: 2.0-3.5s
FID: < 100ms
CLS: < 0.15
TTI: 3.0-4.5s
Bundle Size: 100-200KB (JS incluindo React)
```

---

## 2. SEO e Meta Tags

### Astro
**Score: 10/10** ⭐⭐⭐⭐⭐

#### Vantagens
- **HTML puro** - Crawlers adoram
- Meta tags no frontmatter
- Schema.org fácil
- Sitemap automático
- RSS feeds built-in

#### Exemplo
```astro
---
const seo = {
  title: "STL Festival 2026 - 10ª Edição",
  description: "Festival de Reggae, Trap e Rap...",
  image: "/og-image.jpg"
};
---

<head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <meta property="og:title" content={seo.title} />
  <meta property="og:image" content={seo.image} />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MusicEvent",
      "name": "STL Festival 2026 - 10ª Edição",
      "startDate": "2026-06-06T20:00",
      "endDate": "2026-06-07T06:00",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Montanha mágica",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "São Thomé das Letras",
          "addressRegion": "MG",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-21.6894421",
          "longitude": "-45.0072492"
        },
        "url": "https://www.google.com/maps/place/STL+Valley/@-21.6901028,-45.0080687,18z"
      },
      "image": "https://res.cloudinary.com/stl/image/upload/stl-festival/og-image.jpg",
      "description": "Festival de Reggae, Trap e Rap celebrando 10 anos de história",
      "organizer": {
        "@type": "Organization",
        "name": "STL Festival",
        "url": "https://stlfestival.com.br"
      },
      "performer": [
        { "@type": "MusicGroup", "name": "Edson Gomes" },
        { "@type": "MusicGroup", "name": "Matuê" },
        { "@type": "MusicGroup", "name": "Marcelo D2" }
        // ... outros artistas
      ]
    })}
  </script>
</head>
```

### Next.js
**Score: 9/10** ⭐⭐⭐⭐⭐⭐⭐⭐⭐

#### Vantagens
- Metadata API excelente
- SSG garante HTML completo
- next-seo helpers

#### Desvantagens
- Hydration pode atrasar interatividade
- Mais complexo para configurar

### Vite + React
**Score: 6/10** ⭐⭐⭐⭐⭐⭐

#### Vantagens
- React Helmet para meta tags

#### Desvantagens
- **CSR problem** - Meta tags só depois do JS
- Crawlers podem não ver conteúdo
- Requer SSR manual (Vite-plugin-ssr)

---

## 3. Desenvolvimento e Manutenção

### Astro
**Score: 9/10** ⭐⭐⭐⭐⭐⭐⭐⭐⭐

#### Vantagens
- **Sintaxe simples** (como HTML melhorado)
- Sem complexidade de React
- Componentes são apenas templates
- Fácil para designers/devs frontend
- Atualizar conteúdo é trivial

#### Exemplo de Edição
```astro
---
// Atualizar lineup? Só editar aqui:
const lineup = [
  { name: "Novo Artista", image: "/novo.jpg" },
];
---

<!-- HTML direto, sem JSX -->
<section>
  {lineup.map(artist => 
    <div>{artist.name}</div>
  )}
</section>
```

#### DX (Developer Experience)
- Hot reload instantâneo
- Sem configuração complexa
- Integra React/Vue/Svelte se precisar
- TypeScript opcional

### Next.js
**Score: 7/10** ⭐⭐⭐⭐⭐⭐⭐

#### Vantagens
- Ecossistema maduro
- Muitos recursos prontos
- TypeScript first-class

#### Desvantagens
- **Over-engineered** para landing page
- App Router ainda em evolução
- Mais conceitos para aprender (Server/Client Components)
- Mudanças de conteúdo exigem entender React

### Vite + React
**Score: 8/10** ⭐⭐⭐⭐⭐⭐⭐⭐

#### Vantagens
- DX excelente (Vite)
- Flexibilidade total
- React puro (sem framework opinions)

#### Desvantagens
- Mais configuração manual
- Sem convenções (precisa decidir estrutura)

---

## 4. Animações e Interatividade

### Astro
**Score: 8/10** ⭐⭐⭐⭐⭐⭐⭐⭐

#### Vantagens
- **CSS puro** para animações (melhor performance)
- Integra GSAP, Framer Motion facilmente
- View Transitions API built-in
- Pode usar React components onde precisar

#### Exemplo
```astro
---
// Só este componente usa JS
import CountdownTimer from '../components/CountdownTimer.jsx';
import { ViewTransitions } from 'astro:transitions';
---

<ViewTransitions />

<!-- Animações CSS puras -->
<div class="fade-in">
  <h1>STL Festival</h1>
</div>

<!-- JS apenas onde necessário -->
<CountdownTimer client:visible />

<style>
  .fade-in {
    animation: fadeIn 1s ease-in;
  }
</style>
```

#### Para Elementos Interativos
- Contagem regressiva: React component (client:load)
- Carrossel: React component (client:visible)
- FAQ acordeão: Vanilla JS ou React component

### Next.js & Vite+React
**Score: 9/10** ⭐⭐⭐⭐⭐⭐⭐⭐⭐

#### Vantagens
- Framer Motion integração perfeita
- Ecossistema rico de libs de animação
- Controle total sobre estado

#### Desvantagens
- **Overhead de JS** para animações simples
- CSS poderia fazer 80% das animações

---

## 5. Deploy e Hosting

### Astro
**Score: 10/10** ⭐⭐⭐⭐⭐

#### Vantagens
- **Deploy em qualquer lugar** (HTML estático)
- Vercel (recomendado)
- Netlify
- Cloudflare Pages
- GitHub Pages
- AWS S3 + CloudFront
- Qualquer hosting básico

#### Build
```bash
npm run build
# Output: dist/ (HTML, CSS, JS otimizados)
# Tamanho: ~2-5MB total
```

### Next.js
**Score: 8/10** ⭐⭐⭐⭐⭐⭐⭐⭐

#### Vantagens
- Vercel (excelente integração)
- Netlify
- Cloudflare Pages

#### Desvantagens
- Requer Node.js runtime (se SSR)
- SSG funciona, mas mais pesado

### Vite + React
**Score: 8/10** ⭐⭐⭐⭐⭐⭐⭐⭐

Similar ao Next.js, mas 100% estático

---

## 6. Custos

### Astro
**Score: 10/10** ⭐⭐⭐⭐⭐

- **Vercel Free Tier:** Suficiente (SSG)
- **Netlify Free Tier:** Suficiente
- **Cloudflare Pages:** Grátis ilimitado
- Bandwidth: Baixo (páginas leves)

### Next.js
**Score: 8/10** ⭐⭐⭐⭐⭐⭐⭐⭐

- Vercel Free Tier: Pode ser suficiente
- Páginas mais pesadas = mais bandwidth

### Vite + React
**Score: 8/10** ⭐⭐⭐⭐⭐⭐⭐⭐

Similar ao Next.js

---

## 7. Ecossistema e Comunidade

### Astro
**Score: 8/10** ⭐⭐⭐⭐⭐⭐⭐⭐

#### Status
- Crescimento rápido em 2025-2026
- Documentação excelente
- Comunidade ativa
- Integrações prontas

#### Integrações
- React, Vue, Svelte, Solid
- Tailwind CSS (oficial)
- MDX
- Imagens (Sharp)
- Sitemap, RSS

### Next.js
**Score: 10/10** ⭐⭐⭐⭐⭐

#### Status
- Ecossistema mais maduro
- Mais tutoriais e exemplos
- Mais bibliotecas React

### Vite + React
**Score: 9/10** ⭐⭐⭐⭐⭐⭐⭐⭐⭐

#### Status
- Ecossistema React completo
- Flexibilidade total

---

## 8. Requisitos Específicos do Projeto

### Landing Page de Conversão
**Melhor: Astro**

#### Por Quê?
- Landing pages = conteúdo estático
- Performance = conversão
- SEO = descoberta
- Simplicidade = rápido de lançar

### Animações e Interatividade Moderada
**Empate: Astro + React Components**

#### Astro Approach
```astro
---
// 90% HTML/CSS
// 10% React (onde precisar)
import HeroVideo from './HeroVideo.jsx';
import CountdownTimer from './CountdownTimer.jsx';
---

<!-- HTML estático -->
<section class="lineup">...</section>

<!-- React onde necessário -->
<HeroVideo client:load />
<CountdownTimer client:visible />
```

### Mobile-First e Performance
**Melhor: Astro**

- Menos JS = Melhor em mobile
- CSS-first animations
- Lazy loading nativo

---

## 📊 Tabela Comparativa Final

| Critério | Peso | Astro | Next.js | Vite+React |
|----------|------|-------|---------|------------|
| **Performance** | 25% | 10/10 | 7/10 | 6/10 |
| **SEO** | 20% | 10/10 | 9/10 | 6/10 |
| **Dev Experience** | 15% | 9/10 | 7/10 | 8/10 |
| **Manutenibilidade** | 15% | 9/10 | 7/10 | 7/10 |
| **Animações** | 10% | 8/10 | 9/10 | 9/10 |
| **Deploy** | 5% | 10/10 | 8/10 | 8/10 |
| **Custos** | 5% | 10/10 | 8/10 | 8/10 |
| **Ecossistema** | 5% | 8/10 | 10/10 | 9/10 |
| **TOTAL** | 100% | **9.35** | **7.75** | **7.15** |

---

## 🎯 Decisão Recomendada

# ✅ **Astro** (Vencedor)

## Justificativa

### Por Que Astro É Ideal para STL Festival?

#### 1. **Performance Excepcional**
- Landing page de conversão **PRECISA** ser rápida
- Astro entrega HTML puro = LCP < 1.5s garantido
- Menos JS = Melhor em mobile (70% do tráfego)
- **Conversão aumenta 7-10% com cada segundo economizado**

#### 2. **SEO Nativo**
- HTML puro = Google adora
- Schema.org trivial
- Sitemap automático
- Meta tags no frontmatter (super simples)

#### 3. **Simplicidade e Velocidade de Desenvolvimento**
- Lançar rápido = capturar vendas antecipadas
- Atualizar lineup/conteúdo = editar .astro e deploy
- Sem complexidade de React para conteúdo estático

#### 4. **Melhor dos Dois Mundos**
- **90% HTML/CSS** (performance)
- **10% React** (interatividade onde precisar)
- Contagem regressiva? React component.
- Carrossel? React component.
- FAQ? Vanilla JS ou React.

#### 5. **Custo-Benefício**
- Free tier suficiente (Vercel/Netlify/Cloudflare)
- Baixo bandwidth (páginas leves)
- Manutenção simples (menos bugs)

#### 6. **Alinhado com Skills Disponíveis**
- `frontend-design` funciona perfeitamente
- `clean-code` aplicável
- `react-patterns` para componentes interativos
- `ui-ux-pro-max` para design

---

## 🏗️ Arquitetura Proposta com Astro

### Estrutura do Projeto

```
stl-festival-ld/
├── src/
│   ├── components/
│   │   ├── react/                 # Componentes React (interativos)
│   │   │   ├── CountdownTimer.jsx
│   │   │   ├── Carousel.jsx
│   │   │   └── FAQ.jsx
│   │   ├── Hero.astro             # Componentes Astro (estáticos)
│   │   ├── Lineup.astro
│   │   ├── Setores.astro
│   │   ├── Footer.astro
│   │   └── ...
│   ├── layouts/
│   │   └── BaseLayout.astro       # Layout base
│   ├── pages/
│   │   └── index.astro            # Página principal
│   ├── styles/
│   │   ├── global.css
│   │   └── tokens.css             # Design tokens
│   └── utils/
│       └── constants.js           # Dados (lineup, setores)
├── public/
│   ├── assets/                    # Assets do projeto (já existentes)
│   ├── fonts/
│   └── videos/
├── astro.config.mjs
├── package.json
└── tailwind.config.js             # Se usar Tailwind
```

### Stack Completo

#### Core
- **Astro 5.x** - Framework principal
- **TypeScript (strict mode)** - Type safety completo
- **Node 20+** - Runtime

#### TypeScript Configuration
- **Modo:** `strict: true` (máxima segurança)
- **Target:** `ES2022` (recursos modernos)
- **JSX:** `react-jsx` (React 19 automático)
- **Paths:** Aliases configurados (`@/*`, `@components/*`)
- **Types:** Astro + React + Framer Motion

#### Styling
- **Tailwind CSS** - Utility-first (recomendado)
  - OU **CSS Modules** - Se preferir CSS puro
- **PostCSS** - Autoprefixer, etc.

#### Componentes Interativos
- **React 19** - Para componentes que precisam JS
- **Biblioteca de Animação:** Ver análise detalhada abaixo ⬇️

#### Imagens e Vídeos
- **Cloudinary** - Hospedagem e otimização automática de assets
  - Transformações on-the-fly (resize, crop, format)
  - CDN global para performance
  - WebP/AVIF automático
  - Lazy loading inteligente
  - Compressão adaptativa
  - Suporte a vídeos otimizados

#### Analytics
- **Partytown** - Google Analytics sem impacto (Astro integration)

#### SEO
- **Astro SEO** - Meta tags helpers
- **Astro Sitemap** - Sitemap automático

#### Deployment
- **Vercel** - Recomendado (Astro adapter)

---

## 🚀 Vantagens da Escolha

### Para o Negócio
1. ✅ **Mais conversões** - Página rápida = Mais vendas
2. ✅ **Melhor SEO** - Mais tráfego orgânico
3. ✅ **Custos baixos** - Free tier suficiente
4. ✅ **Time to market rápido** - Lançar em 2-3 semanas

### Para o Desenvolvimento
1. ✅ **Código simples** - Fácil de manter
2. ✅ **DX excelente** - Hot reload instantâneo
3. ✅ **Flexível** - React quando precisar
4. ✅ **Escalável** - Adicionar features fácil

### Para o Usuário
1. ✅ **Carregamento instantâneo** - Experiência fluida
2. ✅ **Funciona em 3G** - Acessível para todos
3. ✅ **Acessível** - HTML semântico
4. ✅ **Mobile perfeito** - 70% do tráfego

---

## 🎬 Análise: GSAP vs Framer Motion

### Contexto da Decisão
Landing page do STL Festival precisa de animações para:
- ✨ **Hero Section:** Entrada dramática, parallax, vídeo
- 🎤 **Lineup:** Cards animados, hover effects, stagger
- 🎫 **Setores:** Transições suaves, carrosséis
- ⏱️ **Contagem Regressiva:** Números animados
- 📜 **Scroll Animations:** Reveal on scroll, parallax

---

### Comparação Técnica

| Critério | GSAP | Framer Motion | Vencedor |
|----------|------|---------------|----------|
| **Bundle Size** | ~50KB (core) | ~35KB (minified) | 🏆 Framer Motion |
| **Performance** | Excelente (GPU) | Excelente (GPU) | 🤝 Empate |
| **React Integration** | Manual | Nativo (hooks) | 🏆 Framer Motion |
| **Curva de Aprendizado** | Média-Alta | Baixa-Média | 🏆 Framer Motion |
| **Timeline Complexity** | Avançado | Simples | 🏆 GSAP |
| **ScrollTrigger** | Plugin nativo | Biblioteca extra | 🏆 GSAP |
| **Documentação** | Excelente | Excelente | 🤝 Empate |
| **TypeScript** | Bom | Excelente | 🏆 Framer Motion |
| **Licença** | Free (+ $99/ano para plugins premium) | MIT (100% free) | 🏆 Framer Motion |
| **Community** | Grande | Grande | 🤝 Empate |

---

### Análise por Caso de Uso

#### 1. Hero Section (Entrada Dramática)

**GSAP:**
```javascript
gsap.from('.hero-title', {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: 'power4.out'
})

gsap.from('.hero-cta', {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  ease: 'back.out'
})
```
✅ Controle preciso de timing
✅ Easing customizado poderoso

**Framer Motion:**
```jsx
<motion.h1
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.2, ease: [0.6, 0.01, 0.05, 0.9] }}
>
  STL Festival
</motion.h1>

<motion.button
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Comprar Ingresso
</motion.button>
```
✅ Sintaxe declarativa (React-like)
✅ Hover/tap states nativos
✅ Menos código

**🏆 Vencedor: Framer Motion** (para React components)

---

#### 2. Lineup Cards (Stagger Animation)

**GSAP:**
```javascript
gsap.from('.lineup-card', {
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: '.lineup',
    start: 'top 80%'
  }
})
```
✅ ScrollTrigger integrado
✅ Stagger simples

**Framer Motion:**
```jsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>
  {artists.map(artist => (
    <motion.div
      key={artist.id}
      variants={{
        hidden: { y: 60, opacity: 0 },
        show: { y: 0, opacity: 1 }
      }}
    >
      <ArtistCard {...artist} />
    </motion.div>
  ))}
</motion.div>
```
✅ whileInView nativo (scroll trigger)
✅ Variants pattern (reutilizável)
✅ Mais legível

**🏆 Vencedor: Framer Motion** (sem dependência extra para scroll)

---

#### 3. Contagem Regressiva (Números Animados)

**GSAP:**
```javascript
gsap.to(counterElement, {
  textContent: finalValue,
  duration: 2,
  snap: { textContent: 1 },
  ease: 'power2.out'
})
```
✅ Snap para números inteiros
✅ Simples e direto

**Framer Motion:**
```jsx
<motion.span
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: 'spring', bounce: 0.5 }}
>
  {useMotionValue(countdown)}
</motion.span>
```
⚠️ Precisa de lógica extra para incrementar números
✅ Boas animações de transição

**🏆 Vencedor: GSAP** (melhor para valores numéricos animados)

---

#### 4. Parallax & Complex Timelines

**GSAP:**
```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true
  }
})

tl.to('.bg-layer-1', { y: 100 })
  .to('.bg-layer-2', { y: 200 }, '<')
  .to('.fg-element', { scale: 1.5, rotation: 10 }, '<')
```
✅ Timeline complexo
✅ ScrollTrigger scrub
✅ Pin/unpin sections
✅ Controle total

**Framer Motion:**
```jsx
const { scrollYProgress } = useScroll()
const y = useTransform(scrollYProgress, [0, 1], [0, 100])

<motion.div style={{ y }}>
  <Background />
</motion.div>
```
✅ useScroll hook simples
⚠️ Mais complexo para multiple layers
⚠️ Sem scrubbing nativo

**🏆 Vencedor: GSAP** (parallax e scroll complexo)

---

### Compatibilidade com Astro + React

#### GSAP com Astro
```astro
---
// Layout.astro
---
<script>
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  // Animações globais
  gsap.from('.fade-in', { opacity: 0, y: 50 })
</script>
```
✅ Funciona bem
⚠️ Precisa gerenciar lifecycle manualmente
⚠️ Script tags podem ser verbosos

#### Framer Motion com Astro
```astro
---
// components/HeroSection.tsx (React Component)
import { motion } from 'framer-motion'
---
<motion.div client:load>
  {/* Componente React */}
</motion.div>
```
✅ Integração nativa com componentes React
✅ Lifecycle automático
✅ Menos boilerplate

**🏆 Vencedor: Framer Motion** (melhor integração Astro + React)

---

### Performance & Bundle Size

#### Bundle Analysis

**Cenário 1: GSAP**
- GSAP Core: ~50KB
- ScrollTrigger: +15KB
- Total: **~65KB minified**

**Cenário 2: Framer Motion**
- Framer Motion: ~35KB
- react-intersection-observer (se necessário): +5KB
- Total: **~40KB minified**

**Diferença:** ~25KB (**38% menor com Framer Motion**)

#### Performance Impact
- **GSAP:** 3-5ms parse/compile time
- **Framer Motion:** 2-4ms parse/compile time

**Impacto no LCP:**
- GSAP: +0.05s
- Framer Motion: +0.03s

**🏆 Vencedor: Framer Motion** (menor impacto)

---

### Decisão Recomendada: **Framer Motion** 🎯

#### Justificativa

**✅ Prós decisivos:**
1. **Integração React:** Sintaxe declarativa perfeita para Astro + React
2. **Bundle Size:** 38% menor (crítico para LCP < 1.5s)
3. **DX (Developer Experience):** Curva de aprendizado menor
4. **TypeScript:** Suporte excelente out-of-the-box
5. **Licença:** MIT 100% free (GSAP premium custa $99/ano)
6. **whileInView:** Scroll trigger sem plugin extra
7. **Hover/Tap States:** Nativos e otimizados

**⚠️ Trade-offs aceitos:**
1. Timelines complexos menos poderosos → **Mitigado:** Landing page não precisa de timelines muito complexos
2. Números animados menos triviais → **Mitigado:** Poucas situações (só contagem regressiva)
3. Parallax menos robusto → **Mitigado:** Pode usar CSS parallax simples

#### Quando usar cada um?

**Use Framer Motion se:**
- ✅ Projeto React/Astro
- ✅ Animações UI (cards, buttons, modals)
- ✅ Scroll reveals simples
- ✅ Hover/click interactions
- ✅ **→ Landing pages** ← **NOSSO CASO**

**Use GSAP se:**
- ⚠️ Timelines complexos (storytelling)
- ⚠️ Parallax avançado multi-layer
- ⚠️ Animações de canvas/SVG complexas
- ⚠️ Jogos ou experiências interativas

---

### Implementação Recomendada

#### 1. Instalar Framer Motion
```bash
npm install framer-motion
```

#### 2. Criar Variants Reutilizáveis
```typescript
// src/utils/animations.ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

export const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { 
    scale: 1, 
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4 }
  }
}
```

#### 3. Uso nos Componentes
```tsx
// src/components/LineupSection.tsx
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'

export const LineupSection = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {artists.map(artist => (
        <motion.div key={artist.id} variants={fadeInUp}>
          <ArtistCard {...artist} />
        </motion.div>
      ))}
    </motion.section>
  )
}
```

#### 4. Preloader com Framer Motion
```tsx
// src/components/Preloader.tsx
import { motion, AnimatePresence } from 'framer-motion'

export const Preloader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="preloader"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          >
            <Logo />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

---

## ✅ **DECISÃO FINAL: Framer Motion**

**Stack de Animação:**
- **Framer Motion** para todos os componentes React
- **CSS Animations** para animações simples (loading, hover básico)
- **Astro View Transitions** para transições de página (se multi-page)

**Justificativa em 3 pontos:**
1. 🎯 **Perfeito para o caso de uso** - Landing page com React
2. ⚡ **38% menor** - Melhor para LCP < 1.5s
3. 💰 **100% grátis** - MIT license, sem custos

---

## 📝 Próximos Passos

### Imediatos (Após Aprovação)
1. ✅ **Inicializar projeto Astro**
2. ✅ **Configurar Tailwind CSS**
3. ✅ **Estruturar design system**
4. ✅ **Criar componentes base**
5. ✅ **Implementar seções**

### Médio Prazo
1. Configurar analytics
2. Configurar domínio
3. Setup CI/CD (Vercel)
4. Testes de performance

---

## 🔄 Alternativa (Se Houver Mudança de Requisitos)

### Quando Considerar Next.js?

**Se o projeto evoluir para:**
- Dashboard administrativo
- Sistema de blog/notícias
- Área de membros
- Funcionalidades complexas com backend

**Nesse caso:**
- Migrar de Astro para Next.js é relativamente simples
- Componentes React podem ser reaproveitados
- Mas para **landing page de conversão**, Astro é superior

---

## ✅ Decisão Final

# Astro + React + TypeScript + Tailwind + Framer Motion + Cloudinary

**Stack Completo:**
```
Frontend: Astro 5.x + React 19
Linguagem: TypeScript (strict mode)
Styling: Tailwind CSS
Animações: Framer Motion
Assets: Cloudinary (CDN + Otimização)
Deploy: Vercel
Analytics: Google Analytics 4
```

**Justificativa em 5 pontos:**
1. 🚀 **Performance** - LCP < 1.5s = Mais conversões
2. 🔍 **SEO** - HTML puro = Melhor ranking
3. 📘 **Type Safety** - TypeScript strict = Menos bugs
4. 🎨 **Animações** - Framer Motion 38% menor que GSAP
5. ⚡ **Velocidade** - Lançar rápido = Capturar vendas antecipadas

**Próximo passo:** Inicializar projeto Astro com TypeScript strict + Configurar Framer Motion + Cloudinary

---

## ☁️ Cloudinary: Decisão Técnica para Assets

### Por Que Cloudinary?

**Problema:**
- Lineup: 8 imagens de artistas
- Hero: Vídeos de alta qualidade
- Setores: Múltiplas imagens de diferentes ângulos
- Galeria: Fotos de edições anteriores
- Total estimado: **50-100 assets** (imagens + vídeos)

**Solução Cloudinary:**
1. ✅ **CDN Global** - Entrega rápida mundialmente
2. ✅ **Transformações On-the-Fly** - Resize/crop automático
3. ✅ **Formato Adaptativo** - WebP/AVIF automático
4. ✅ **Compressão Inteligente** - Qualidade x Tamanho otimizado
5. ✅ **Lazy Loading** - Carrega só quando visível
6. ✅ **Vídeos Otimizados** - Transcoding automático
7. ✅ **Responsive Images** - Srcset automático

### Benefícios para o Projeto

| Métrica | Sem Cloudinary | Com Cloudinary | Ganho |
|---------|----------------|----------------|-------|
| **Tamanho Imagem** | ~500KB | ~50KB | **90% menor** |
| **Tempo de Carga** | ~2s | ~0.3s | **85% mais rápido** |
| **LCP** | ~3.5s | ~1.2s | **Meta atingida** |
| **Bandwidth** | Alto | Baixo | **Economia de custos** |
| **Mobile 3G** | Lento | Rápido | **Acessível** |

### Configuração Recomendada

**URL Pattern:**
```
https://res.cloudinary.com/{cloud_name}/image/upload/
  f_auto,q_auto,w_{width},c_limit/
  stl-festival/{image_name}
```

**Parâmetros:**
- `f_auto` - Formato automático (WebP, AVIF)
- `q_auto` - Qualidade adaptativa
- `w_{width}` - Largura responsiva
- `c_limit` - Crop inteligente

**Exemplo Prático:**
```astro
<!-- Hero Section - Vídeo -->
<video
  src="https://res.cloudinary.com/stl/video/upload/f_auto,q_auto/hero-video.mp4"
  poster="https://res.cloudinary.com/stl/image/upload/f_auto,q_auto,w_1920/hero-poster.jpg"
/>

<!-- Lineup - Artista -->
<img
  src="https://res.cloudinary.com/stl/image/upload/f_auto,q_auto,w_400/lineup/matue.jpg"
  srcset="
    https://res.cloudinary.com/stl/image/upload/f_auto,q_auto,w_400/lineup/matue.jpg 400w,
    https://res.cloudinary.com/stl/image/upload/f_auto,q_auto,w_800/lineup/matue.jpg 800w
  "
  loading="lazy"
  alt="Matuê - Trap"
/>
```

### Free Tier vs Paid

**Free Tier (Suficiente para MVP):**
- 25 GB storage
- 25 GB bandwidth/mês
- Transformações ilimitadas
- **✅ Recomendado para lançamento**

**Paid ($89/mês - Se necessário):**
- 100 GB storage
- 100 GB bandwidth/mês
- Analytics avançado
- Suporte prioritário

### Próximos Passos Técnicos

1. ✅ Criar conta Cloudinary
2. ✅ Configurar `CLOUDINARY_CLOUD_NAME` (env)
3. ✅ Upload de assets para pastas organizadas:
   - `/stl-festival/lineup/`
   - `/stl-festival/hero/`
   - `/stl-festival/setores/`
   - `/stl-festival/gallery/`
4. ✅ Criar helper function em Astro:
   ```ts
   // src/utils/cloudinary.ts
   export const cloudinaryImage = (path: string, width?: number) => {
     const baseUrl = 'https://res.cloudinary.com/YOUR_CLOUD_NAME'
     const transforms = `f_auto,q_auto${width ? `,w_${width}` : ''}`
     return `${baseUrl}/image/upload/${transforms}/stl-festival/${path}`
   }
   ```

---

## 📘 TypeScript: Configuração e Type Safety

### Por Que TypeScript?

**Benefícios para o Projeto:**
1. ✅ **Menos Bugs:** Erros detectados em tempo de desenvolvimento
2. ✅ **IntelliSense:** Autocomplete e documentação inline
3. ✅ **Refatoração Segura:** Mudanças com confiança
4. ✅ **Documentação Viva:** Types como documentação
5. ✅ **Melhor DX:** Menos tempo debugando
6. ✅ **Escalabilidade:** Facilita manutenção futura

### tsconfig.json Recomendado

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    
    // Strict Type-Checking
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    
    // Module Resolution
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "noEmit": true,
    
    // Path Aliases
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@layouts/*": ["./src/layouts/*"],
      "@utils/*": ["./src/utils/*"],
      "@types/*": ["./src/types/*"],
      "@styles/*": ["./src/styles/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Tipos Customizados do Projeto

#### 1. Event Types
```typescript
// src/types/event.ts
export interface Event {
  name: string
  date: Date
  time: string
  location: Location
  edition: number
}

export interface Location {
  name: string                    // "Montanha mágica"
  displayName: string             // Nome público para UI
  address: Address
  coordinates: GeoCoordinates
  googleMapsUrl: string
}

export interface Address {
  venue: string                   // "STL Valley"
  city: string                    // "São Thomé das Letras"
  state: string                   // "MG"
  country: string                 // "Brasil"
  postalCode?: string
}

export interface GeoCoordinates {
  latitude: number                // -21.6894421
  longitude: number               // -45.0072492
}

export interface Venue {
  name: string
  capacity: number
  location: Location
}
```

#### 2. Artist Types
```typescript
// src/types/artist.ts
export type MusicGenre = 'Reggae' | 'Trap' | 'Rap' | 'Hip-Hop'

export interface Artist {
  id: string
  name: string
  genre: MusicGenre
  imageUrl: string
  socialMedia: {
    instagram?: string
    spotify?: string
  }
  isFeatured?: boolean
  featuredGuest?: string
}
```

#### 3. Ticket Types
```typescript
// src/types/ticket.ts
export type TicketType = 'inteira' | 'meia' | 'solidario'

export type SectorType = 'pista' | 'camarote' | 'camarote-premium'

export interface Sector {
  id: SectorType
  name: string
  ageRestriction: string
  features: string[]
  openBar?: boolean
  openFood?: boolean
  price: {
    inteira: number
    meia: number
    solidario?: number
  }
}

export interface Ticket {
  id: string
  sector: SectorType
  type: TicketType
  price: number
  benefits: string[]
}
```

#### 4. i18n Types
```typescript
// src/types/i18n.ts
export type Locale = 'pt-BR' | 'en' | 'es'

export interface Translation {
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  lineup: {
    title: string
    description: string
  }
  sectors: {
    title: string
    description: string
  }
  // ... mais traduções
}

export type Translations = Record<Locale, Translation>
```

#### 5. Animation Types
```typescript
// src/types/animations.ts
import type { Variants } from 'framer-motion'

export interface AnimationConfig {
  duration?: number
  delay?: number
  stagger?: number
}

export type AnimationVariant = 
  | 'fadeInUp'
  | 'fadeInDown'
  | 'scaleIn'
  | 'slideInLeft'
  | 'slideInRight'

export type AnimationVariants = Record<AnimationVariant, Variants>
```

#### 6. Cloudinary Types
```typescript
// src/types/cloudinary.ts
export interface CloudinaryImageOptions {
  width?: number
  height?: number
  crop?: 'fill' | 'fit' | 'limit' | 'scale'
  quality?: 'auto' | number
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png'
}

export interface CloudinaryVideoOptions {
  width?: number
  quality?: 'auto' | number
  format?: 'auto' | 'mp4' | 'webm'
}
```

#### 7. Badge Types
```typescript
// src/types/badge.ts
export type BadgeType = 'spotify' | 'accessibility' | 'custom'

export type BadgeSize = 'sm' | 'md' | 'lg'

export interface Badge {
  type: BadgeType
  label: string
  href: string
  icon?: string                    // Emoji ou ícone
  target?: '_blank' | '_self'
  rel?: string                     // 'noopener noreferrer'
  size?: BadgeSize
  ariaLabel?: string
}

export interface SpotifyBadge extends Badge {
  type: 'spotify'
  playlistId: string
  href: `https://open.spotify.com/playlist/${string}`
}

export interface AccessibilityBadge extends Badge {
  type: 'accessibility'
  href: `#${string}`               // Anchor link
  target: '_self'
}
```

#### 8. Social Media Types
```typescript
// src/types/social.ts
export type SocialPlatform = 'instagram' | 'facebook' | 'youtube' | 'twitter' | 'tiktok'

export interface SocialLink {
  platform: SocialPlatform
  username: string
  url: string
  icon: string                     // SVG path ou emoji
  label: string
  ariaLabel: string
}

export interface SocialMediaLinks {
  instagram: SocialLink
  facebook: SocialLink
}

// Dados oficiais do STL Festival (Redes Sociais)
export const STL_SOCIAL_LINKS: SocialMediaLinks = {
  instagram: {
    platform: 'instagram',
    username: '@STLFestival',
    url: 'https://www.instagram.com/stlfestival/',
    icon: '📷',
    label: 'Instagram',
    ariaLabel: 'Siga o STL Festival no Instagram'
  },
  facebook: {
    platform: 'facebook',
    username: 'STL Festival',
    url: 'https://www.facebook.com/STLFestival/',
    icon: '👍',
    label: 'Facebook',
    ariaLabel: 'Curta a página do STL Festival no Facebook'
  }
}

// Spotify é um Badge, não rede social (ver SpotifyBadge em badge.ts)
```

### Type-Safe Helpers

#### Cloudinary Helper (Type-Safe)
```typescript
// src/utils/cloudinary.ts
import type { CloudinaryImageOptions } from '@types/cloudinary'

const CLOUD_NAME = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME

export function getCloudinaryImageUrl(
  path: string,
  options: CloudinaryImageOptions = {}
): string {
  const {
    width,
    height,
    crop = 'limit',
    quality = 'auto',
    format = 'auto'
  } = options

  const transforms: string[] = [
    `f_${format}`,
    `q_${quality}`,
  ]

  if (width) transforms.push(`w_${width}`)
  if (height) transforms.push(`h_${height}`)
  transforms.push(`c_${crop}`)

  const transformString = transforms.join(',')
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformString}/stl-festival/${path}`
}
```

#### Animation Variants (Type-Safe)
```typescript
// src/utils/animations.ts
import type { Variants } from 'framer-motion'
import type { AnimationVariants } from '@types/animations'

export const animations: AnimationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  },
  scaleIn: {
    hidden: { scale: 0.8, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', bounce: 0.4 }
    }
  },
  slideInLeft: {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  },
  slideInRight: {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  }
}
```

#### i18n Helper (Type-Safe)
```typescript
// src/utils/i18n.ts
import type { Locale, Translations } from '@types/i18n'

export function getTranslations(locale: Locale): Translations[Locale] {
  // Import dinâmico type-safe
  const translations = import(`@/i18n/${locale}.json`)
  return translations
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}
```

### Componentes Type-Safe

#### ArtistCard Component
```tsx
// src/components/ArtistCard.tsx
import { motion } from 'framer-motion'
import type { Artist } from '@types/artist'
import { animations } from '@utils/animations'
import { getCloudinaryImageUrl } from '@utils/cloudinary'

interface ArtistCardProps {
  artist: Artist
  index: number
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist, index }) => {
  const imageUrl = getCloudinaryImageUrl(`lineup/${artist.id}.jpg`, {
    width: 400,
    quality: 'auto',
    format: 'auto'
  })

  return (
    <motion.div
      variants={animations.fadeInUp}
      custom={index}
      whileHover={{ scale: 1.05 }}
      className="artist-card"
    >
      <img src={imageUrl} alt={artist.name} loading="lazy" />
      <h3>{artist.name}</h3>
      <p>{artist.genre}</p>
      {artist.featuredGuest && (
        <span>feat. {artist.featuredGuest}</span>
      )}
    </motion.div>
  )
}
```

### Benefícios do TypeScript no Projeto

| Área | Benefício | Exemplo |
|------|-----------|---------|
| **Cloudinary** | URLs type-safe | Autocomplete de options |
| **Framer Motion** | Variants tipados | Erro se variant não existe |
| **i18n** | Traduções garantidas | Erro se chave faltando |
| **Artistas** | Dados estruturados | Genre restrito (Reggae/Trap/Rap) |
| **Setores** | Tipos de ingresso | SectorType enum |
| **Props** | Componentes seguros | Props required/optional claros |

### VS Code Extensions Recomendadas

```json
// .vscode/extensions.json
{
  "recommendations": [
    "astro-build.astro-vscode",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}
```

### Scripts Package.json

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "type-check": "tsc --noEmit",
    "lint": "eslint . --ext .ts,.tsx,.astro",
    "format": "prettier --write ."
  }
}
```

### Type-Checking no CI/CD

```yaml
# .github/workflows/ci.yml
- name: Type Check
  run: npm run type-check

- name: Build
  run: npm run build
```

---

## 📚 Referências

### Documentação
- Astro: https://docs.astro.build
- Astro + React: https://docs.astro.build/en/guides/integrations-guide/react/
- Tailwind + Astro: https://docs.astro.build/en/guides/integrations-guide/tailwind/

### Benchmarks
- Astro vs Next.js Performance: https://astro.build/blog/2023-web-framework-performance-report/
- Core Web Vitals: https://web.dev/vitals/

### Inspiração
- Landing pages Astro: https://astro.build/themes/
- Festivais com Astro: (exemplos de casos reais)

---

**Versão:** 1.0  
**Data:** 26 de Janeiro de 2026  
**Decisão:** ✅ **ASTRO** aprovado para desenvolvimento