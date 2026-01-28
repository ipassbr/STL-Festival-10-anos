---
name: Hero Section Plan
overview: Plano de desenvolvimento completo para a Hero Section do STL Festival 2026, incluindo vídeo de fundo, ticker automático, badge do Spotify, countdown e indicador de scroll mobile, seguindo padrões de performance e acessibilidade WCAG AA.
todos:
  - id: setup-structure
    content: Criar estrutura de pastas e arquivos base (HeroSection.astro, scripts TypeScript)
    status: pending
  - id: video-fallback
    content: Implementar vídeo responsivo com fallback image e Cloudinary transformations
    status: pending
  - id: ticker-animation
    content: Desenvolver ticker automático com animação CSS seamless e suporte a reduced motion
    status: pending
  - id: spotify-badge
    content: Integrar SpotifyBadge component com color detection e posicionamento fixed
    status: pending
  - id: scroll-indicator
    content: Criar indicador de scroll mobile com animação bounce e smooth scroll
    status: pending
  - id: typescript-scripts
    content: Desenvolver scripts TypeScript (videoControl, badgeDetection, mobileIndicator)
    status: pending
  - id: i18n-integration
    content: Extrair textos para i18n e adicionar traduções PT-BR, EN, ES
    status: pending
  - id: responsive-testing
    content: Testar responsividade em mobile (320px), tablet (768px) e desktop (1024px+)
    status: pending
  - id: accessibility-validation
    content: 'Validar WCAG AA: navegação teclado, screen reader, contraste, ARIA labels'
    status: pending
  - id: performance-optimization
    content: 'Otimizar performance: Lighthouse 95+, LCP < 1.5s, CLS < 0.05'
    status: pending
isProject: false
---

# Plano: Hero Section - STL Festival 10ª Edição

## 🎯 Objetivo da Seção

### O que ela resolve/comunica?

A Hero Section é o primeiro impacto visual do STL Festival, estabelecendo imediatamente a identidade energética e vibrante do evento. Comunica:

- **Data e local** do evento através de ticker automático
- **Atmosfera do festival** via vídeo de fundo imersivo
- **Call-to-action** direto para compra de ingressos
- **Conexão com música** através do badge do Spotify

### Qual problema do usuário ela atende?

- **Decisão rápida**: Em 3 segundos, o usuário sabe se está no lugar certo
- **Informação essencial**: Data, local e ação principal (comprar ingresso) são imediatos
- **Engajamento emocional**: Vídeo e música criam conexão antes mesmo de scrollar
- **Mobile-first**: Indicador de scroll guia usuários mobile para mais conteúdo

### Como ela contribui para conversão?

- **Redução de bounce rate**: Impacto visual retém usuário
- **Clareza de CTA**: Próximas seções visíveis via scroll indicator
- **Trust building**: Playlist do Spotify estabelece credibilidade e vibe
- **Performance**: Carregamento rápido (LCP < 1.5s) = menos abandono

---

## 📐 Requisitos Funcionais (RF)

### RF-01: Vídeo de Fundo Responsivo com Fallback

**Descrição:** Vídeo hero deve carregar otimizado por device com fallback para imagem

**User Story:** Como usuário, eu quero ver conteúdo visual impactante rapidamente, para entender a vibe do festival sem esperar carregamento longo

**Prioridade:** 🔴 Must Have

**Detalhamento:**

- Vídeo servido via Cloudinary com transformações por breakpoint
- Fallback image otimizada (WebP/AVIF) para conexões lentas
- Autoplay muted, loop, playsinline
- Controle de erro com graceful degradation para imagem

### RF-02: Ticker Automático com Informações do Evento

**Descrição:** Faixa horizontal posicionada próxima ao final da seção (bottom: 10%) com animação infinita mostrando data e local

**User Story:** Como usuário, eu quero saber rapidamente quando e onde será o evento, sem precisar procurar

**Prioridade:** 🔴 Must Have

**Detalhamento:**

- Posição: `bottom: 10%` (quase no final da hero section)
- Background: `#ff4d2d` (vermelho-alaranjado vibrante - cor oficial STL)
- Animação CSS seamless (sem cortes) - efeito marquee horizontal
- Conteúdo: Data → Separador → Local → Logo → Loop
- Pausa no hover para leitura
- Suporte a reduced motion (pausar animação)
- Tipografia: Bold, uppercase, letter-spacing aumentado

### RF-03: Badge do Spotify Interativo

**Descrição:** Badge fixo levando à playlist oficial do festival

**User Story:** Como usuário, eu quero ouvir a vibe do festival antes de comprar ingresso, para saber se é meu estilo

**Prioridade:** 🟡 Should Have

**Detalhamento:**

- Posição: fixed, canto superior esquerdo
- Link externo para playlist do Spotify
- Animação de entrada suave (opacity fade)
- Detecção de cor de fundo para contraste (badge detection script)

### RF-04: Indicador de Scroll Mobile

**Descrição:** Seta animada na parte inferior (mobile only) indicando mais conteúdo abaixo

**User Story:** Como usuário mobile, eu quero saber que há mais conteúdo abaixo, para não pensar que a página acabou

**Prioridade:** 🟡 Should Have

**Detalhamento:**

- Visível apenas em < 1024px
- Animação bounce suave
- Scroll suave ao clicar (smooth scroll para #lineup)
- Fade out após scroll ou após 5s de inatividade

### RF-05: H1 Visualmente Oculto para SEO

**Descrição:** H1 com conteúdo "STL Festival 2026 - 10ª Edição" escondido visualmente mas acessível para crawlers

**User Story:** Como Google bot, eu quero encontrar H1 semântico, para rankear a página corretamente

**Prioridade:** 🔴 Must Have

**Detalhamento:**

- Classe `.sr-only` (screen reader only)
- Conteúdo traduzido via i18n
- Mantém hierarquia semântica (H1 único na página)

---

## 🚀 Requisitos Não-Funcionais (RNF)

### Performance

- LCP < 1.5s (target: < 1.2s) - Hero video/image é LCP
- FID < 50ms - Interações com badge e scroll indicator
- CLS < 0.05 - Layout estável (skeleton para vídeo)
- Lighthouse Performance: 95+ mobile, 98+ desktop
- Bundle JS: < 15KB para hero scripts

### Acessibilidade

- WCAG 2.1 Level AA compliant
- Navegação por teclado: badge, scroll indicator
- Screen reader: H1 oculto, ARIA labels, landmarks
- Contraste mínimo 4.5:1 (ticker text vs background)
- Reduced motion: pausar animações

### SEO

- H1 semântico presente (visualmente oculto)
- Meta tags: Open Graph image do hero
- Schema.org: MusicEvent com hero image
- Alt text na imagem de fallback

### Responsividade

- Mobile: 320px - 767px (vídeo mobile, indicator visível)
- Tablet: 768px - 1023px (vídeo medium)
- Desktop: 1024px+ (vídeo full HD, indicator oculto)
- Touch-friendly: scroll indicator min 44x44px

### Internacionalização (i18n)

- PT-BR: "06 de Junho de 2026"
- EN: "June 6th, 2026"
- ES: "6 de Junio de 2026"
- Textos extraídos para `[src/i18n/locales/{lang}.json](src/i18n/locales)`

---

## 🧩 Componentes Necessários

### Componentes Astro (Estáticos)

- `[HeroSection.astro](src/components/HeroSection.astro)` - Container principal
- `[SpotifyBadge.astro](src/components/SpotifyBadge.astro)` - Badge reutilizável

### Scripts TypeScript (Client-side)

- `[src/scripts/hero/videoControl.ts](src/scripts/hero/videoControl.ts)` - Controle de vídeo, fallback, erro handling
- `[src/scripts/hero/badgeDetection.ts](src/scripts/hero/badgeDetection.ts)` - Detecção de cor de fundo para badge
- `[src/scripts/hero/mobileIndicator.ts](src/scripts/hero/mobileIndicator.ts)` - Controle do indicador de scroll

### Assets Cloudinary

- Vídeo hero: `[hero.mp4](https://res.cloudinary.com/dazkdemvu/video/upload/v1768415565/stl-festival/videos/hero.mp4)`
- Fallback image: `[herosection.jpg](/assets/images/fallbacks/herosection.jpg)`
- Transformações: q_auto:low, w_960/1280, br_800k/1500k

---

## 🎨 Design Tokens Aplicados

### Cores

```css
--color-red: #ff4d2d; /* Ticker background - Vermelho-alaranjado vibrante (cor oficial) */
--color-white: #ffffff; /* Ticker text */
--overlay-opacity: 0.2; /* Overlay escuro */
```

### Tipografia

```css
--font-heading: 'Jairo'; /* Ticker text */
--text-xl: clamp(1.25rem, 3vw, 1.5rem); /* Mobile */
--text-3xl: clamp(2rem, 3vw, 3rem); /* Desktop */
```

### Espaçamento

```css
--spacing-md: 1rem; /* Ticker padding */
--spacing-lg: 1.5rem; /* Ticker separator margin */
--spacing-2xl: 2rem; /* Scroll indicator bottom */
```

### Animações

```css
scroll-ticker: 30s linear infinite;
bounce-slow: 2s ease-in-out infinite;
```

---

## 🎬 Animações e Interações

### 1. Preloader → Hero Transition

**Trigger:** `preloader-complete` event

**Animação:**

- Vídeo: opacity 0 → 1 (500ms ease-out)
- Badge: opacity 0 → 1 (500ms ease-out, delay 200ms)
- Ticker: já visível (no fade)
- Scroll indicator: opacity 0 → 1 (300ms ease-out, delay 400ms)

### 2. Ticker Automático

**Posição:** `bottom: 10%` (quase no final da hero section)

**Animação CSS:**

```css
@keyframes scroll-ticker {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

**Efeito:** Marquee horizontal infinito, seamless loop

**Interação:** Pause no hover (ux melhoria)

### 3. Scroll Indicator Bounce

**Animação CSS:**

```css
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  50% {
    transform: translateY(8px);
    opacity: 1;
  }
}
```

**Interação:** Hover scale 1.1, click → smooth scroll

### 4. Badge Color Detection

**Script:** `[badgeDetection.ts](src/scripts/hero/badgeDetection.ts)`

**Lógica:**

- Sample pixel na posição do badge
- Calcular luminância
- Ajustar cor do badge (dark/light) para contraste adequado

---

## 🔄 Fluxo de Carregamento (Critical Path)

### Fase 1: HTML + CSS (Instant)

1. Render HTML estrutura (hero container, ticker, h1 oculto)
2. Aplicar CSS inline critical
3. Mostrar fallback image (blur-up placeholder se possível)

### Fase 2: Preloader (0-2s)

1. Preloader visible, hero opacity 0
2. Preload vídeo hero em background
3. Event `preloader-progress` atualiza hero opacity gradualmente

### Fase 3: Hero Reveal (2-3s)

1. Event `preloader-complete` disparado
2. `[startVideo()](src/scripts/hero/videoControl.ts)` inicia playback
3. Fade in: vídeo, badge, scroll indicator
4. Ticker já animando (não espera preloader)

### Fase 4: Interatividade (3s+)

1. Badge color detection ativa
2. Scroll indicator clicável
3. Vídeo em loop infinito
4. Reduced motion check (pausar animações se necessário)

---

## 📝 Código de Referência (Base Fornecida)

O código fornecido já implementa:

✅ Vídeo responsivo com fallback  
✅ Ticker automático seamless  
✅ Badge do Spotify integrado  
✅ Indicador de scroll mobile  
✅ Scripts de controle (videoControl, badgeDetection, mobileIndicator)  
✅ Suporte a reduced motion  
✅ i18n integration

**Próximos passos:** Refinamento, testes e otimizações conforme plano.

---

## ✅ Critérios de Aceitação

### Funcionalidade

- Vídeo carrega otimizado por device (mobile: 960px, desktop: 1920px)
- Fallback image aparece se vídeo falhar
- Ticker anima sem cortes, pausa no hover
- Badge do Spotify link funcional, abre em nova aba
- Scroll indicator clicável (mobile only), scroll suave
- H1 oculto presente no DOM para SEO

### Design

- Ticker: background `#ff4d2d` (vermelho-alaranjado vibrante - cor oficial STL), texto branco
- Ticker position: `bottom: 10%` (quase no final da hero section)
- Font: Jairo (heading) para ticker
- Overlay: rgba(0,0,0,0.2) sobre vídeo
- Espaçamento: sistema 8px aplicado

### Performance

- Lighthouse Performance: 95+ (mobile), 98+ (desktop)
- LCP < 1.5s (vídeo/image carregam rápido)
- CLS < 0.05 (layout estável)
- Bundle JS: < 15KB

### Acessibilidade

- WAVE: 0 erros críticos
- Navegação por teclado: badge e scroll indicator focáveis
- Screen reader: H1 oculto lido, ARIA labels presentes
- Contraste: 4.5:1+ (ticker text vs background)

### Responsividade

- Mobile (320px): Ticker responsivo, indicator visível
- Tablet (768px): Layout adapta
- Desktop (1024px+): Indicator oculto, vídeo full HD

### i18n

- PT-BR: Data formatada corretamente
- EN: Date format "June 6th, 2026"
- ES: Formato "6 de Junio de 2026"

---

## 🛠️ Técnicas de Prompt Aplicadas

### Prompt Chaining

**Etapas do Desenvolvimento:**

1. **Análise** → Compreender requisitos do hero (vídeo, ticker, badge, SEO)
2. **Planejamento** → Definir estrutura Astro + scripts TypeScript
3. **Execução** → Implementar componente + scripts + styles
4. **Revisão** → Validar performance, a11y, i18n

### Chain-of-Thought (CoT)

**Raciocínio aplicado:**

- **Problema:** Hero precisa ser rápido mas com vídeo pesado
- **Análise:** Cloudinary transformações + fallback + lazy load
- **Solução:** Srcset com breakpoints + placeholder image + error handling

### RAG (Retrieval-Augmented Generation)

**Contexto utilizado:**

- [Design System](docs/05-DESIGN-SYSTEM.md): Cores, tipografia, espaçamento
- [Tech Stack](docs/04-TECH-STACK-ANALYSIS.md): Astro + TypeScript + Framer Motion
- [i18n](docs/07-INTERNATIONALIZATION.md): Estrutura de traduções
- Código base fornecido pelo usuário

---

## 📊 Estimativa de Implementação

| Tarefa                       | Estimativa | Prioridade  |
| ---------------------------- | ---------- | ----------- |
| Setup estrutura Astro        | 2h         | 🔴 Crítica  |
| Implementar vídeo + fallback | 3h         | 🔴 Crítica  |
| Ticker automático            | 2h         | 🔴 Crítica  |
| Badge Spotify                | 1h         | 🟡 Alta     |
| Scroll indicator             | 1h         | 🟡 Alta     |
| Scripts TypeScript           | 3h         | 🔴 Crítica  |
| Responsividade               | 2h         | 🔴 Crítica  |
| Acessibilidade               | 2h         | 🔴 Crítica  |
| i18n integration             | 1h         | 🔴 Crítica  |
| Performance tuning           | 2h         | 🔴 Crítica  |
| Testes cross-browser         | 2h         | 🟡 Alta     |
| **TOTAL**                    | **21h**    | **~3 dias** |

---

## 🚀 Próximos Passos

### Imediatos

1. Validar estrutura de pastas `[src/components/](src/components)` e `[src/scripts/hero/](src/scripts/hero)`
2. Configurar Cloudinary URLs nas env vars
3. Criar arquivos de tradução i18n para hero

### Dependências

- ✅ Design System tokens (`[tokens.css](src/styles/tokens.css)`)
- ✅ i18n utils (`[src/i18n/utils.ts](src/i18n/utils.ts)`)
- ✅ Preloader component (dispara eventos necessários)
- ✅ SpotifyBadge component

### Arquivos a Criar/Editar

**Criar:**

- `src/components/HeroSection.astro` (componente principal)
- `src/scripts/hero/videoControl.ts`
- `src/scripts/hero/badgeDetection.ts`
- `src/scripts/hero/mobileIndicator.ts`

**Editar (se necessário):**

- `src/i18n/locales/pt-BR.json` (adicionar keys do hero)
- `src/i18n/locales/en.json`
- `src/i18n/locales/es.json`

---

## 🎓 Estratégia de Skills Cursor

### Skills Aplicadas

Este desenvolvimento utilizará as seguintes Cursor Skills para garantir qualidade e consistência:

#### 1. **i18n-localization** (Primária)

**Aplicação:**

- Garantir que **zero strings hardcoded** existam no componente
- Validar estrutura de chaves i18n (`hero.date`, `hero.location`, etc.)
- Verificar consistência entre os 3 locales (PT-BR, EN, ES)
- Aplicar formatação correta de datas por locale (`Intl.DateTimeFormat`)
- Usar propriedades CSS lógicas para suporte futuro a RTL

**Checklist i18n Hero Section:**

- Todas as strings do ticker extraídas para `src/i18n/locales/{lang}.json`
- Data formatada via `Intl.DateTimeFormat` respeitando locale
- Textos do scroll indicator traduzidos
- ARIA labels traduzidos (`aria-label` usando `t()`)
- Alt text da fallback image traduzido
- H1 oculto traduzido

#### 2. **frontend-design** (Design de Impacto)

**Aplicação:**

- Criar ticker com **tipografia impactante** (Jairo condensed rounded)
- Evitar estética genérica de IA: vídeo hero custom, não stock footage
- **Movimento**: Animação ticker seamless + bounce do scroll indicator
- **Composição espacial**: Ticker centralizado vertical, badge fixed top-left
- **Fundos e detalhes**: Overlay sutil sobre vídeo (rgba(0,0,0,0.2)) para legibilidade

**Diretrizes aplicadas:**

- Tipografia única: Jairo (display) para ticker, não Inter/Roboto
- Cores STL autênticas: `#ff4d2d` (vermelho-alaranjado vibrante) no ticker, não gradientes genéricos
- Animações com propósito: ticker mostra info, bounce guia scroll
- Zero elementos de design genérico

#### 3. **scroll-experience** (Narrativa de Scroll)

**Aplicação:**

- **Scroll indicator**: Guia usuário para próxima seção narrativa
- **Smooth scroll**: `behavior: 'smooth'` ao clicar no indicator
- **Reveals escalonados**: Badge e indicator com animation-delay
- **Performance**: CSS animations, não JS animation frames
- **Mobile-first**: Indicator visível apenas em mobile (<1024px)

**Padrões aplicados:**

- Reveal ativado pelo scroll (badge + indicator fade in)
- Indicador de progresso implícito (scroll indicator)
- Respeitando `prefers-reduced-motion`

#### 4. **ui-ux-pro-max** (Qualidade Profissional)

**Aplicação:**

- **Acessibilidade (P1 - CRÍTICO)**:
  - Contraste 4.5:1+ (ticker branco em `#ff4d2d`)
  - Focus states visíveis (badge, scroll indicator)
  - Alt text em fallback image
  - ARIA labels em elementos interativos
- **Toque & Interação (P2 - CRÍTICO)**:
  - Touch target 44x44px (scroll indicator)
  - `cursor: pointer` em badge e indicator
  - Feedback de hover (scale 1.1)
- **Performance (P3 - ALTO)**:
  - Lazy load vídeo (preload via preloader)
  - WebP/AVIF para fallback image
  - `prefers-reduced-motion` respeitado
- **Responsividade (P4 - ALTO)**:
  - Breakpoints: 320px, 768px, 1024px+
  - Vídeo srcset por device
  - Indicator mobile-only

**Checklist UX:**

- Sem emojis como ícones (usar SVG se necessário)
- Hover states não causam layout shift
- Transições suaves (150-300ms)
- Todos os clicáveis têm `cursor-pointer`
- Teste em 375px, 768px, 1024px, 1440px

### Integração das Skills

As skills funcionam em sinergia:

```
i18n-localization → Garante textos traduzíveis
         ↓
frontend-design → Aplica design impactante e autêntico
         ↓
scroll-experience → Cria narrativa de scroll suave
         ↓
ui-ux-pro-max → Valida acessibilidade e UX profissional
```

**Resultado esperado:** Hero Section com design distintivo, performance excepcional, acessibilidade completa e suporte multilíngue robusto.

---

## 🌿 Estratégia de Git & Branch

### Estrutura de Branch

**Branch principal:** `feature/hero-section`

**Convenção:**

```bash
# Criar branch a partir da main
git checkout main
git pull origin main
git checkout -b feature/hero-section
```

**Commit Convention:** [Conventional Commits](https://www.conventionalcommits.org/)

```bash
# Exemplos de commits
feat(hero): add video background with Cloudinary optimization
feat(hero): implement ticker animation with i18n support
feat(hero): add Spotify badge with color detection
style(hero): apply design system tokens and responsive layout
fix(hero): resolve CLS issue with video skeleton
test(hero): validate WCAG AA compliance
docs(hero): update README with hero section details
```

### Estratégia de Merge

**Pull Request:**

- Título: `[HERO] Implement Hero Section with video, ticker and i18n support`
- Base: `main`
- Reviewers: (a definir)
- Labels: `feature`, `hero-section`, `priority-high`

**Checklist antes do PR:**

- Todos os commits seguem Conventional Commits
- Código passa em linting (ESLint + Prettier)
- Type checking passa (TypeScript)
- Performance validada (Lighthouse 95+)
- Acessibilidade validada (WAVE 0 erros)
- i18n completo (PT-BR, EN, ES)
- Responsividade testada (320px, 768px, 1024px+)
- Documentação atualizada

---

## 📋 Epic Issue - GitHub

### Template do Epic Issue

````markdown
# [EPIC] Hero Section - STL Festival 2026

## 📌 Descrição

Implementar Hero Section completa do STL Festival 2026 com vídeo de fundo responsivo, ticker automático de informações do evento, badge do Spotify e indicador de scroll mobile.

## 🎯 Objetivos

- ✅ Criar primeiro impacto visual do festival
- ✅ Comunicar data e local de forma imediata (ticker)
- ✅ Engajar usuário com vídeo atmosférico
- ✅ Estabelecer conexão musical (badge Spotify)
- ✅ Guiar usuário para mais conteúdo (scroll indicator)

## 📐 Requisitos Funcionais

### Must Have (🔴 Crítico)

- [x] **RF-01:** Vídeo de fundo responsivo com fallback image
  - Cloudinary transformações por breakpoint (960px, 1280px, 1920px)
  - Graceful degradation para imagem se vídeo falhar
  - Autoplay muted, loop, playsinline

- [x] **RF-02:** Ticker automático com informações do evento
  - Animação CSS seamless (sem cortes)
  - Conteúdo: Data → Separador → Local → Loop
  - Pausa no hover para leitura
  - Suporte a reduced motion

- [x] **RF-05:** H1 visualmente oculto para SEO
  - Classe `.sr-only` (screen reader only)
  - Conteúdo traduzido via i18n
  - Hierarquia semântica correta

### Should Have (🟡 Alta)

- [x] **RF-03:** Badge do Spotify interativo
  - Fixed position (top-left)
  - Link para playlist oficial
  - Color detection para contraste
  - Animação de entrada suave

- [x] **RF-04:** Indicador de scroll mobile
  - Visível apenas em < 1024px
  - Animação bounce suave
  - Smooth scroll ao clicar
  - Fade out após 5s ou scroll

## 🚀 Requisitos Não-Funcionais

### Performance

- [ ] Lighthouse Performance: 95+ (mobile), 98+ (desktop)
- [ ] LCP < 1.5s (target: < 1.2s)
- [ ] FID < 50ms
- [ ] CLS < 0.05
- [ ] Bundle JS: < 15KB

### Acessibilidade (WCAG 2.1 AA)

- [ ] Contraste mínimo 4.5:1 (ticker text vs background)
- [ ] Navegação por teclado (badge, scroll indicator)
- [ ] Screen reader: H1 oculto, ARIA labels
- [ ] Focus states visíveis
- [ ] Reduced motion support

### Responsividade

- [ ] Mobile: 320px - 767px
- [ ] Tablet: 768px - 1023px
- [ ] Desktop: 1024px+
- [ ] Touch targets: min 44x44px

### Internacionalização (i18n)

- [ ] PT-BR: "06 de Junho de 2026"
- [ ] EN: "June 6th, 2026"
- [ ] ES: "6 de Junio de 2026"
- [ ] Zero strings hardcoded
- [ ] Formatação de data via `Intl.DateTimeFormat`

## 🧩 Componentes e Arquivos

### Componentes Astro

- [ ] `src/components/HeroSection.astro` - Container principal
- [ ] `src/components/SpotifyBadge.astro` - Badge reutilizável

### Scripts TypeScript

- [ ] `src/scripts/hero/videoControl.ts` - Controle de vídeo, fallback, erro
- [ ] `src/scripts/hero/badgeDetection.ts` - Detecção de cor para badge
- [ ] `src/scripts/hero/mobileIndicator.ts` - Controle do indicador de scroll

### i18n

- [ ] `src/i18n/locales/pt-BR.json` - Adicionar keys do hero
- [ ] `src/i18n/locales/en.json` - Traduções EN
- [ ] `src/i18n/locales/es.json` - Traduções ES

### Assets (Cloudinary)

- [ ] Vídeo: `hero.mp4` (já existente)
- [ ] Fallback: `herosection.jpg` (já existente)

## ✅ Tarefas de Implementação

### Fase 1: Setup e Estrutura (2h)

- [ ] Criar estrutura de pastas `src/components/` e `src/scripts/hero/`
- [ ] Configurar env vars Cloudinary
- [ ] Setup TypeScript types para hero

### Fase 2: Vídeo e Fallback (3h)

- [ ] Implementar componente com vídeo responsivo
- [ ] Configurar srcset com transformações Cloudinary
- [ ] Implementar fallback image com blur-up
- [ ] Script videoControl.ts com error handling

### Fase 3: Ticker Automático (2h)

- [ ] Criar ticker com animação CSS seamless
- [ ] Integrar i18n para conteúdo do ticker
- [ ] Adicionar suporte a reduced motion
- [ ] Implementar pause no hover

### Fase 4: Badge Spotify (1h)

- [ ] Integrar SpotifyBadge component
- [ ] Posicionar fixed top-left
- [ ] Script badgeDetection.ts para contraste
- [ ] Animação de entrada fade-in

### Fase 5: Scroll Indicator (1h)

- [ ] Criar indicador mobile-only
- [ ] Animação bounce CSS
- [ ] Script mobileIndicator.ts para smooth scroll
- [ ] Fade out após scroll ou timeout

### Fase 6: Scripts TypeScript (3h)

- [ ] videoControl.ts completo
- [ ] badgeDetection.ts completo
- [ ] mobileIndicator.ts completo
- [ ] Integração com preloader events

### Fase 7: i18n Integration (1h)

- [ ] Extrair todas as strings para i18n
- [ ] Adicionar traduções PT-BR
- [ ] Adicionar traduções EN
- [ ] Adicionar traduções ES
- [ ] Validar formatação de datas

### Fase 8: Responsividade (2h)

- [ ] Testar mobile (320px, 375px, 414px)
- [ ] Testar tablet (768px, 1024px)
- [ ] Testar desktop (1280px, 1440px, 1920px)
- [ ] Ajustar breakpoints se necessário

### Fase 9: Acessibilidade (2h)

- [ ] WAVE scan (0 erros críticos)
- [ ] axe DevTools scan
- [ ] Teste de navegação por teclado
- [ ] Teste com screen reader
- [ ] Validar contraste de cores
- [ ] Adicionar ARIA labels

### Fase 10: Performance (2h)

- [ ] Lighthouse audit mobile
- [ ] Lighthouse audit desktop
- [ ] Otimizar LCP (< 1.5s)
- [ ] Validar CLS (< 0.05)
- [ ] Testar em throttling 3G

### Fase 11: Testes Cross-Browser (2h)

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iOS Safari
- [ ] Android Chrome

## 📊 Estimativa Total

**Total:** 21 horas (~3 dias de trabalho)

## ✅ Critérios de Aceitação

### Funcionalidade

- [ ] Vídeo carrega otimizado por device
- [ ] Fallback image aparece se vídeo falhar
- [ ] Ticker anima sem cortes, pausa no hover
- [ ] Badge Spotify funcional, abre em nova aba
- [ ] Scroll indicator clicável, scroll suave
- [ ] H1 oculto presente para SEO

### Design

- [ ] Ticker: background `#ff4d2d` (vermelho-alaranjado vibrante), texto branco
- [ ] Ticker position: `bottom: 10%` (quase no final da hero)
- [ ] Tipografia: Jairo para ticker
- [ ] Overlay: rgba(0,0,0,0.2) sobre vídeo
- [ ] Espaçamento: sistema 8px aplicado

### Performance

- [ ] Lighthouse: 95+ (mobile), 98+ (desktop)
- [ ] LCP < 1.5s
- [ ] CLS < 0.05
- [ ] Bundle JS < 15KB

### Acessibilidade

- [ ] WCAG 2.1 AA compliant
- [ ] WAVE: 0 erros críticos
- [ ] Navegação por teclado funcional
- [ ] Screen reader testado

### i18n

- [ ] PT-BR completo
- [ ] EN completo
- [ ] ES completo
- [ ] Zero strings hardcoded

## 🎓 Skills Cursor Aplicadas

- **i18n-localization**: Garantir zero strings hardcoded
- **frontend-design**: Design impactante e autêntico
- **scroll-experience**: Narrativa de scroll suave
- **ui-ux-pro-max**: Acessibilidade e UX profissional

## 📚 Referências

- [Plano Completo](.cursor/plans/hero_section_plan_8d207583.plan.md)
- [Design System](docs/05-DESIGN-SYSTEM.md)
- [Tech Stack Analysis](docs/04-TECH-STACK-ANALYSIS.md)
- [i18n Guidelines](docs/07-INTERNATIONALIZATION.md)

## 🌿 Branch

**Branch:** `feature/hero-section`

```bash
git checkout -b feature/hero-section
```
````

## 🔗 Links Úteis

- Cloudinary Video: [https://res.cloudinary.com/dazkdemvu/video/upload/v1768415565/stl-festival/videos/hero.mp4](https://res.cloudinary.com/dazkdemvu/video/upload/v1768415565/stl-festival/videos/hero.mp4)
- Playlist Spotify: [https://open.spotify.com/playlist/3FffolLJeoJbwg4eQn53qu](https://open.spotify.com/playlist/3FffolLJeoJbwg4eQn53qu)
- WCAG Guidelines: [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Labels:** `feature`, `hero-section`, `priority-high`, `i18n`, `a11y`, `performance`  
**Assignees:** (a definir)  
**Milestone:** Hero Section MVP  
**Epic Points:** 21 (horas)

````

### Como Criar o Issue

**Opção 1: Via GitHub Web Interface**
1. Ir para https://github.com/[seu-usuario]/STL-Festival-10-anos/issues/new
2. Copiar o template acima
3. Colar no corpo do issue
4. Adicionar labels: `feature`, `hero-section`, `priority-high`, `i18n`, `a11y`, `performance`
5. Criar issue

**Opção 2: Via GitHub CLI** (quando pronto para executar)
```bash
gh issue create \
  --title "[EPIC] Hero Section - STL Festival 2026" \
  --body-file .cursor/plans/hero-epic-issue.md \
  --label "feature,hero-section,priority-high,i18n,a11y,performance"
````

**Opção 3: Via MCP GitHub Tool** (quando autorizado)

```bash
# Será executado via CallMcpTool quando você aprovar
```

---

## 📚 Referências Técnicas

### Documentação

- [Astro Components](https://docs.astro.build/en/core-concepts/astro-components/)
- [Cloudinary Video API](https://cloudinary.com/documentation/video_manipulation_and_delivery)
- [WCAG 2.1 AA Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Vitals](https://web.dev/vitals/)

### Design System

- [05-DESIGN-SYSTEM.md](docs/05-DESIGN-SYSTEM.md) - Cores, tipografia, espaçamento
- [Tokens CSS](src/styles/tokens.css) - Variáveis CSS globais

### Stack Técnico

- [04-TECH-STACK-ANALYSIS.md](docs/04-TECH-STACK-ANALYSIS.md) - Decisões Astro + TypeScript + Cloudinary

### Skills Cursor

- [i18n-localization](.cursor/skills/i18n-localization/SKILL.md) - Internacionalização
- [frontend-design](.cursor/skills/frontend-design/SKILL.md) - Design distintivo
- [scroll-experience](.cursor/skills/scroll-experience/SKILL.md) - Experiências de scroll
- [ui-ux-pro-max](.cursor/skills/ui-ux-pro-max/SKILL.md) - Qualidade profissional

---

**Plano criado em:** 28/01/2026  
**Última atualização:** 28/01/2026  
**Versão:** 1.2  
**Status:** 📝 Atualizado com correções de design (ticker position e cor)

**Changelog v1.2:**

- 🎨 Alterada posição do ticker: `bottom: 10%` (quase no final da hero)
- 🎨 Alterada cor do ticker: `#ff4d2d` (vermelho-alaranjado vibrante - cor oficial STL)
- 🎨 Mantido efeito marquee horizontal infinito seamless
