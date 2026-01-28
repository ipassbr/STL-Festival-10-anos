---
name: ui-ux-pro-max
description: 'UI/UX design intelligence. 50 styles, 21 palettes, 50 font pairings, 20 charts, 9 stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, mobile app, .html, .tsx, .vue, .svelte. Elements: button, modal, navbar, sidebar, card, table, form, chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, flat design. Topics: color palette, accessibility, animation, layout, typography, font pairing, spacing, hover, shadow, gradient. Integrations: shadcn/ui MCP for component search and examples.'
---

# UI/UX Pro Max - Inteligência de Design

Guia completo de design para aplicações web e mobile. Contém 50+ estilos, 97 paletas de cores, 57 combinações de fontes, 99 diretrizes UX e 25 tipos de gráficos em 9 stacks de tecnologia. Base de dados pesquisável com recomendações baseadas em prioridade.

## Quando Aplicar

Consulte estas diretrizes quando:

- Projetando novos componentes ou páginas de UI
- Escolhendo paletas de cores e tipografia
- Revisando código por problemas de UX
- Construindo landing pages ou dashboards
- Implementando requisitos de acessibilidade

## Categorias de Regras por Prioridade

| Prioridade | Categoria           | Impacto | Domínio               |
| ---------- | ------------------- | ------- | --------------------- |
| 1          | Acessibilidade      | CRÍTICO | `ux`                  |
| 2          | Toque & Interação   | CRÍTICO | `ux`                  |
| 3          | Performance         | ALTO    | `ux`                  |
| 4          | Layout & Responsivo | ALTO    | `ux`                  |
| 5          | Tipografia & Cores  | MÉDIO   | `typography`, `color` |
| 6          | Animação            | MÉDIO   | `ux`                  |
| 7          | Seleção de Estilo   | MÉDIO   | `style`, `product`    |
| 8          | Gráficos & Dados    | BAIXO   | `chart`               |

## Referência Rápida

### 1. Acessibilidade (CRÍTICO)

- `color-contrast` - Razão mínima 4.5:1 para texto normal
- `focus-states` - Anéis de foco visíveis em elementos interativos
- `alt-text` - Alt text descritivo para imagens significativas
- `aria-labels` - aria-label para botões apenas com ícone
- `keyboard-nav` - Ordem do tab corresponde à ordem visual
- `form-labels` - Use label com atributo for

### 2. Toque & Interação (CRÍTICO)

- `touch-target-size` - Alvos de toque mínimos de 44x44px
- `hover-vs-tap` - Use click/tap para interações primárias
- `loading-buttons` - Desative botão durante operações assíncronas
- `error-feedback` - Mensagens de erro claras próximas ao problema
- `cursor-pointer` - Adicione cursor-pointer a elementos clicáveis

### 3. Performance (ALTO)

- `image-optimization` - Use WebP, srcset, lazy loading
- `reduced-motion` - Verifique prefers-reduced-motion
- `content-jumping` - Reserve espaço para conteúdo assíncrono

### 4. Layout & Responsivo (ALTO)

- `viewport-meta` - width=device-width initial-scale=1
- `readable-font-size` - Mínimo 16px para texto do corpo no mobile
- `horizontal-scroll` - Garanta que o conteúdo cabe na largura do viewport
- `z-index-management` - Defina escala z-index (10, 20, 30, 50)

### 5. Tipografia & Cores (MÉDIO)

- `line-height` - Use 1.5-1.75 para texto do corpo
- `line-length` - Limite a 65-75 caracteres por linha
- `font-pairing` - Combine personalidades de fontes heading/body

### 6. Animação (MÉDIO)

- `duration-timing` - Use 150-300ms para micro-interações
- `transform-performance` - Use transform/opacity, não width/height
- `loading-states` - Skeleton screens ou spinners

### 7. Seleção de Estilo (MÉDIO)

- `style-match` - Combine estilo ao tipo de produto
- `consistency` - Use mesmo estilo em todas as páginas
- `no-emoji-icons` - Use ícones SVG, não emojis

### 8. Gráficos & Dados (BAIXO)

- `chart-type` - Combine tipo de gráfico ao tipo de dados
- `color-guidance` - Use paletas de cores acessíveis
- `data-table` - Forneça alternativa em tabela para acessibilidade

## Como Usar

Quando o usuário solicita trabalho de UI/UX (design, construir, criar, implementar, revisar, corrigir, melhorar), siga este workflow:

### Passo 1: Analisar Requisitos do Usuário

Extraia informações-chave da solicitação:

- **Tipo de produto**: SaaS, e-commerce, portfolio, dashboard, landing page, etc.
- **Palavras-chave de estilo**: minimal, playful, professional, elegant, dark mode, etc.
- **Indústria**: healthcare, fintech, gaming, education, etc.
- **Stack**: React, Vue, Next.js, ou padrão `html-tailwind`

### Passo 2: Consultar os dados CSV

Leia diretamente os arquivos CSV em `skills/ui-ux-pro-max/data/` para montar o design system:

| Dados necessários    | Arquivo CSV               |
| -------------------- | ------------------------- |
| Tipo de produto      | `products.csv`            |
| Estilo visual        | `styles.csv`              |
| Paleta de cores      | `colors.csv`              |
| Tipografia           | `typography.csv`          |
| Estrutura de landing | `landing.csv`             |
| Regras de raciocínio | `ui-reasoning.csv`        |
| Diretrizes UX        | `ux-guidelines.csv`       |
| Tipos de gráficos    | `charts.csv`              |
| Ícones               | `icons.csv`               |
| Diretrizes web       | `web-interface.csv`       |
| Performance React    | `react-performance.csv`   |
| Stack específica     | `data/stacks/<stack>.csv` |

### Passo 3: Montar Design System

Com base nos dados consultados, sintetize:

1. **Padrão visual** — estilo que melhor combina com o produto (via `ui-reasoning.csv`)
2. **Estilo** — detalhes de implementação (via `styles.csv`)
3. **Cores** — paleta completa com hex/oklch (via `colors.csv`)
4. **Tipografia** — fontes heading/body com pairings (via `typography.csv`)
5. **Efeitos** — sombras, borras, transições
6. **Anti-padrões** — o que evitar para este tipo de produto

### Passo 4: Diretrizes da Stack

Consulte a stack específica do projeto em `data/stacks/`. Para o STL Festival, use `data/stacks/html-tailwind.csv`.

Stacks disponíveis: `html-tailwind`, `react`, `nextjs`, `vue`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`

---

## Referência de Busca

### Domínios Disponíveis

| Domínio      | Para usar                                      | Palavras-chave de exemplo                                |
| ------------ | ---------------------------------------------- | -------------------------------------------------------- |
| `product`    | Recomendações por tipo de produto              | SaaS, e-commerce, portfolio, healthcare, beauty, service |
| `style`      | Estilos UI, cores, efeitos                     | glassmorphism, minimalism, dark mode, brutalism          |
| `typography` | Combinações de fontes, Google Fonts            | elegant, playful, professional, modern                   |
| `color`      | Paletas de cores por tipo de produto           | saas, ecommerce, healthcare, beauty, fintech, service    |
| `landing`    | Estrutura de página, estratégias de CTA        | hero, hero-centric, testimonial, pricing, social-proof   |
| `chart`      | Tipos de gráficos, recomendações de biblioteca | trend, comparison, timeline, funnel, pie                 |
| `ux`         | Melhores práticas, anti-padrões                | animation, accessibility, z-index, loading               |
| `react`      | Performance React/Next.js                      | waterfall, bundle, suspense, memo, rerender, cache       |
| `web`        | Diretrizes de interface web                    | aria, focus, keyboard, semantic, virtualize              |
| `prompt`     | Prompts de IA, palavras-chave CSS              | (nome do estilo)                                         |

### Stacks Disponíveis

| Stack           | Foco                                                 |
| --------------- | ---------------------------------------------------- |
| `html-tailwind` | Utilitários Tailwind, responsivo, a11y (PADRÃO)      |
| `react`         | State, hooks, performance, padrões                   |
| `nextjs`        | SSR, routing, imagens, API routes                    |
| `vue`           | Composition API, Pinia, Vue Router                   |
| `svelte`        | Runes, stores, SvelteKit                             |
| `swiftui`       | Views, State, Navigation, Animation                  |
| `react-native`  | Components, Navigation, Lists                        |
| `flutter`       | Widgets, State, Layout, Theming                      |
| `shadcn`        | Componentes shadcn/ui, theming, formulários, padrões |

---

## Exemplo de Workflow

**Solicitação do STL Festival:** "Criar landing page para o festival musical STL Festival 10ª edição"

### Passo 1: Analisar Requisitos

- Tipo de produto: Evento musical / Entertainment
- Palavras-chave de estilo: bold, vibrant, immersive, dark
- Indústria: Entertainment / Eventos
- Stack: html-tailwind (padrão)

### Passo 2: Consultar Dados

- Ler `products.csv` para encontrar padrão "entertainment/event"
- Ler `styles.csv` para estilos bold/vibrant/dark
- Ler `colors.csv` para paleta de evento musical
- Ler `typography.csv` para fontes display dramáticas
- Ler `ui-reasoning.csv` para regras de combinação

### Passo 3: Sintetizar Design System

Combinar dados dos CSVs em um design system coerente com estilo, cores, tipografia e efeitos.

### Passo 4: Consultar Stack

- Ler `data/stacks/html-tailwind.csv` para diretrizes de implementação

---

## Dicas para Melhores Resultados

1. **Combine múltiplos CSVs** — Style + Typography + Color = Design system completo
2. **Sempre verifique UX** — Consulte `ux-guidelines.csv` para animação, acessibilidade, z-index
3. **Use a stack correta** — Consulte o CSV da stack do projeto para melhores práticas
4. **Siga ui-reasoning.csv** — Este arquivo contém regras de combinação entre produto/estilo
5. **Itere** — Se o primeiro resultado não combinar, explore outras linhas nos CSVs

---

## Regras Comuns para UI Profissional

São problemas frequentemente esquecidos que tornam a UI parecer não profissional:

### Ícones & Elementos Visuais

| Regra                            | Faça                                             | Não faça                                    |
| -------------------------------- | ------------------------------------------------ | ------------------------------------------- |
| **Sem ícones emoji**             | Use ícones SVG (Heroicons, Lucide, Simple Icons) | Use emojis como 🎨 🚀 ⚙️ como ícones de UI  |
| **Hover states estáveis**        | Use transições de cor/opacidade no hover         | Use scale transforms que deslocam layout    |
| **Logos de marca corretos**      | Pesquise SVG oficial do Simple Icons             | Adivinhe ou use caminhos de logo incorretos |
| **Tamanho de ícone consistente** | Use viewBox fixo (24x24) com w-6 h-6             | Misture tamanhos de ícone aleatoriamente    |

### Interação & Cursor

| Regra                 | Faça                                                            | Não faça                                                 |
| --------------------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| **Cursor pointer**    | Adicione `cursor-pointer` a todos os cards clicáveis/hoveráveis | Deixe cursor padrão em elementos interativos             |
| **Feedback de hover** | Forneça feedback visual (cor, sombra, borda)                    | Sem indicação de que elemento é interativo               |
| **Transições suaves** | Use `transition-colors duration-200`                            | Mudanças de estado instantâneas ou muito lentas (>500ms) |

### Contraste Modo Claro/Escuro

| Regra                      | Faça                                 | Não faça                                      |
| -------------------------- | ------------------------------------ | --------------------------------------------- |
| **Card vidro modo claro**  | Use `bg-white/80` ou opacidade maior | Use `bg-white/10` (muito transparente)        |
| **Contraste texto claro**  | Use `#0F172A` (slate-900) para texto | Use `#94A3B8` (slate-400) para texto do corpo |
| **Texto mudo modo claro**  | Use `#475569` (slate-600) mínimo     | Use gray-400 ou mais claro                    |
| **Visibilidade de bordas** | Use `border-gray-200` no modo claro  | Use `border-white/10` (invisível)             |

### Layout & Espaçamento

| Regra                     | Faça                                        | Não faça                                         |
| ------------------------- | ------------------------------------------- | ------------------------------------------------ |
| **Navbar flutuante**      | Adicione espaçamento `top-4 left-4 right-4` | Cole navbar em `top-0 left-0 right-0`            |
| **Padding do conteúdo**   | Considere altura da navbar fixa             | Deixe conteúdo esconder atrás de elementos fixos |
| **Max-width consistente** | Use mesmo `max-w-6xl` ou `max-w-7xl`        | Misture larguras de container diferentes         |

---

## Checklist Pré-Entrega

Antes de entregar código de UI, verifique estes itens:

### Qualidade Visual

- [ ] Sem emojis usados como ícones (use SVG)
- [ ] Todos os ícones de conjunto consistente (Heroicons/Lucide)
- [ ] Logos de marca corretos (verificados do Simple Icons)
- [ ] Hover states não causam deslocamento de layout
- [ ] Use cores do tema diretamente (bg-primary) sem wrapper var()

### Interação

- [ ] Todos os elementos clicáveis têm `cursor-pointer`
- [ ] Hover states fornecem feedback visual claro
- [ ] Transições são suaves (150-300ms)
- [ ] Focus states visíveis para navegação por teclado

### Modo Claro/Escuro

- [ ] Texto modo claro tem contraste suficiente (mínimo 4.5:1)
- [ ] Elementos vidro/transparentes visíveis no modo claro
- [ ] Bordas visíveis em ambos os modos
- [ ] Teste ambos os modos antes da entrega

### Layout

- [ ] Elementos flutuantes têm espaçamento adequado das bordas
- [ ] Sem conteúdo escondido atrás de navbars fixas
- [ ] Responsivo em 375px, 768px, 1024px, 1440px
- [ ] Sem scroll horizontal no mobile

### Acessibilidade

- [ ] Todas as imagens têm alt text
- [ ] Inputs de formulário têm labels
- [ ] Cor não é o único indicador
- [ ] `prefers-reduced-motion` respeitado
