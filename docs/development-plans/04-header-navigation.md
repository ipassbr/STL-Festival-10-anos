# Plano de Desenvolvimento: Header/Navigation

## 📋 Informações Básicas

| Campo              | Valor                                                |
| ------------------ | ---------------------------------------------------- |
| **Seção**          | Header/Navigation                                    |
| **Prioridade**     | 🔴 Crítica                                           |
| **Branch**         | `feature/section-header`                             |
| **Responsável**    | Equipe de Desenvolvimento                            |
| **Tempo Estimado** | 2 dias (código base já fornecido, ajustes de design) |
| **Data Início**    | [A definir]                                          |
| **Data Entrega**   | [A definir]                                          |

---

## 🎯 Objetivo da Seção

### O que ela resolve/comunica?

O Header é o **ponto de entrada principal** da navegação do site, proporcionando:

- **Identidade visual** através do logo STL
- **Navegação clara** para todas as seções da landing page
- **Acesso rápido** ao CTA principal de conversão
- **Suporte multilíngue** através do seletor de idioma
- **Experiência consistente** em todos os dispositivos

### Qual problema do usuário ela atende?

1. **Navegação confusa:** Usuários não encontram rapidamente as seções desejadas
2. **Falta de acesso rápido:** CTA de compra não está sempre visível
3. **Barreira linguística:** Usuários internacionais não conseguem trocar idioma facilmente
4. **Mobile UX:** Menu não funciona bem em dispositivos móveis

### Como ela contribui para conversão?

- **CTA sempre visível:** Botão "Comprar Ingresso" fixo no header aumenta conversões
- **Navegação eficiente:** Usuários chegam mais rápido às seções de interesse (Setores, Lineup)
- **Redução de fricção:** Menu mobile bem implementado reduz abandono em mobile
- **Suporte internacional:** Seletor de idioma facilita conversão de público internacional

---

## 📐 Requisitos Funcionais (RF)

### RF-01: Logo e Identidade Visual

- **Descrição:** Exibir logo STL no lado esquerdo do header (mesma logo usada no SpotifyBadge), clicável para voltar ao topo
- **Logo:** `https://res.cloudinary.com/dazkdemvu/image/upload/v1769622514/stl-festival/logos/logo-stl_ydnwga.svg`
- **User Story:** Como usuário, eu quero ver o logo do STL Festival no header para reconhecer a marca e poder voltar ao início da página
- **Prioridade:** 🔴 Must Have
- **Status no código base:** ✅ Implementado (precisa ajustar path)

### RF-02: Menu de Navegação Principal

- **Descrição:** Menu horizontal com links para seções principais (opcional - pode ser removido se não houver espaço)
- **Nota:** Foco principal será Logo (esquerda), Botão Ingressos (direita) e Seletor de Idioma (direita)
- **User Story:** Como usuário, eu quero navegar facilmente entre as seções da landing page através do menu do header
- **Prioridade:** 🟢 Could Have (pode ser removido para simplificar)
- **Status no código base:** ✅ Implementado (pode ser removido ou simplificado)

### RF-03: Botão "Ingressos" no Canto Direito

- **Descrição:** Botão "Ingressos" no canto direito do header, direcionando para iPass com UTM parameters
- **Texto:** "Ingressos" (traduzível: PT-BR "Ingressos", EN "Tickets", ES "Entradas")
- **Posição:** Canto direito, antes do seletor de idioma
- **User Story:** Como usuário, eu quero ter acesso rápido ao botão de compra de ingressos sempre visível no header
- **Prioridade:** 🔴 Must Have
- **Status no código base:** ✅ Implementado (precisa ajustar texto e posição)

### RF-04: Seletor de Idioma com Ícone de Planeta

- **Descrição:** Ícone de planeta com dropdown/menu para trocar entre PT-BR, EN e ES, integrado ao sistema i18n existente
- **Design:** Ícone de planeta (🌐) com menu dropdown ou tabs mostrando as 3 opções de idioma
- **Posição:** Canto direito, após o botão "Ingressos"
- **User Story:** Como usuário internacional, eu quero trocar o idioma do site facilmente através do header
- **Prioridade:** 🟡 Should Have
- **Status no código base:** ❌ Não implementado - precisa criar

### RF-05: Menu Mobile (Hamburger)

- **Descrição:** Menu hamburger para mobile/tablet que expande menu completo com animação suave
- **User Story:** Como usuário mobile, eu quero acessar todas as opções de navegação através de um menu mobile intuitivo
- **Prioridade:** 🔴 Must Have
- **Status no código base:** ✅ Implementado (precisa validar e ajustar estilos)

### RF-06: Header Sticky/Fixed com Efeito Glass e Transição

- **Descrição:** Header fixo no topo, posicionado SOBRE o Hero Section (vídeo/imagem de fundo)
- **Estado Normal (sobre Hero):** Efeito glass (glassmorphism) - transparente com `backdrop-filter: blur()` para permitir visualização do vídeo/imagem do hero através do header
- **Estado Após Scroll (sobre conteúdo sólido):** Opaco com cor escura (preto/preto escuro) - melhor legibilidade quando não está sobre hero
- **Z-index:** 50+ (acima do hero que tem z-index: 0-10)
- **Transição:** Suave entre os dois estados (0.3s ease)
- **User Story:** Como usuário, eu quero que o header permaneça acessível durante o scroll da página, com visual moderno que não bloqueie completamente o vídeo do hero
- **Prioridade:** 🟡 Should Have
- **Status no código base:** ✅ Lógica implementada (precisa criar estilos CSS com glassmorphism)

### RF-07: Espaçamento e Tipografia

- **Descrição:** Espaçamento padrão e consistente entre todos os elementos do header, com atenção especial ao texto
- **Espaçamento:** Sistema de 8px entre elementos (gap consistente)
- **Tipografia:** Texto do header com tamanho e peso adequados, legível em ambos os estados (glass e opaco)
- **User Story:** Como usuário, eu quero que o header tenha espaçamento adequado e texto legível
- **Prioridade:** 🔴 Must Have
- **Status no código base:** ⚠️ Precisa atenção especial na implementação

---

## 🚀 Requisitos Não-Funcionais (RNF)

### Performance

- [ ] LCP < 2.5s (meta: < 1.5s) - Header não deve bloquear renderização
- [ ] FID < 100ms (meta: < 50ms) - Interações do menu devem ser instantâneas
- [ ] CLS < 0.1 (meta: < 0.05) - Header não deve causar layout shift
- [ ] Lighthouse Performance: 90+ (meta: 95+)

### Acessibilidade

- [ ] WCAG 2.1 Level AA
- [ ] Lighthouse A11y: 100
- [ ] WAVE: 0 erros críticos
- [ ] Navegação por teclado: 100% funcional (Tab, Enter, Esc)
- [ ] Screen reader friendly (ARIA labels, roles)
- [ ] Focus visible em todos os elementos interativos
- [ ] Skip link para conteúdo principal
- **Status no código base:** ✅ Skip link, ARIA labels, focus trap implementados

### SEO

- [ ] Estrutura semântica correta (nav, header)
- [ ] Links com atributos apropriados (hreflang para idiomas)
- [ ] Alt text no logo
- **Status no código base:** ✅ Estrutura semântica correta

### Responsividade

- [ ] Mobile (320px - 767px) - Menu hamburger funcional
- [ ] Tablet (768px - 1023px) - Menu adaptado ou hamburger
- [ ] Desktop (1024px+) - Menu horizontal completo
- [ ] Touch-friendly (min 44x44px para botões/links)

### Internacionalização (i18n)

- [ ] PT-BR (português) - Textos do menu traduzidos
- [ ] EN (inglês) - Textos do menu traduzidos
- [ ] ES (espanhol) - Textos do menu traduzidos
- [ ] Textos extraídos para JSON (src/i18n/locales/)
- [ ] URLs localizadas corretamente (/en/, /es/)
- **Status no código base:** ❌ Textos hardcoded - precisa integrar i18n

---

## 🧩 Componentes Necessários

### Componentes Customizados

- [ ] `Header.astro` - Componente principal do header (código base adaptado)
- [ ] `LanguageSelector.astro` - Seletor de idioma (PT-BR, EN, ES) - **NOVO**

### Arquivos de Estilo

- [ ] `src/styles/header.css` - Estilos do header conforme design system STL - **NOVO**

**Nota Técnica:**

- O código base já inclui toda a lógica JavaScript inline no componente Astro (menu mobile, scroll, focus trap)
- Não é necessário React Islands - JavaScript vanilla é mais leve e performático
- Apenas o seletor de idioma será componente separado para reutilização

---

## 🎨 Assets e Dependências

### Imagens

- [ ] `logo-stl.svg` - Logo tradicional STL (verificar path: `/logo/logo-stl.svg` ou ajustar)

### Conteúdo

- [ ] Textos de navegação (PT-BR, EN, ES) - Adicionar em `src/i18n/locales/*.json`
- [ ] Labels de acessibilidade (ARIA labels traduzidos)
- [ ] URL do iPass para CTA (atualmente `https://ipass.com.br/stlfestival` - verificar e adicionar UTM)

### Dependências de Outras Seções

- [ ] IDs das seções devem estar definidos nas páginas (ex: `id="lineup"`, `id="sobre"`, `id="valley"`, etc.)
- [ ] Sistema i18n já implementado (`src/i18n/`) - ✅ Pronto
- [ ] Design tokens já configurados (`src/styles/global.css`) - ✅ Pronto

---

## 🎨 Design Visual Detalhado

### Posicionamento e Contexto

**⚠️ IMPORTANTE:** O header fica posicionado **SOBRE o Hero Section** (que contém vídeo/imagem de fundo). Por isso o efeito glass é essencial para permitir que o conteúdo do hero seja visível através do header.

**Estrutura de Camadas (z-index):**

```
Hero Section (z-index: 0-2)
  ├── Vídeo/Imagem de fundo (z-index: 0-1)
  ├── Overlay escuro (z-index: 2)
  └── Badges (Spotify, Acessibilidade) (z-index: 10)

Header (z-index: 50+)
  └── Fica SOBRE o Hero Section
```

### Layout do Header

```
┌─────────────────────────────────────────────────────────────┐
│ [Logo STL]                    [Ingressos] [🌐 PT-BR|EN|ES] │
└─────────────────────────────────────────────────────────────┘
```

**Estrutura:**

- **Esquerda:** Logo STL (mesma do SpotifyBadge)
- **Direita:** Botão "Ingressos" + Seletor de Idioma (ícone planeta)
- **Espaçamento:** Gap consistente de 16px (1rem) entre elementos
- **Posição:** `position: fixed` no topo, sobre o Hero Section

### Estados Visuais

#### Estado Normal (Sobre Hero Section) - Glassmorphism

**Razão:** Header fica sobre vídeo/imagem do hero, precisa de transparência com blur para não bloquear completamente o conteúdo.

```css
- Position: fixed
- Top: 0
- Z-index: 50+ (acima do hero que tem z-index: 0-10)
- Background: rgba(0, 0, 0, 0.1) ou rgba(0, 0, 0, 0.2)
- Backdrop-filter: blur(10px) saturate(180%)
- -webkit-backdrop-filter: blur(10px) saturate(180%) /* Safari */
- Border-bottom: 1px solid rgba(255, 255, 255, 0.1) (opcional)
- Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
- Texto: Branco/claro (#ffffff) para contraste sobre vídeo
```

**Nota:** O `backdrop-filter: blur()` cria o efeito glass que permite ver o vídeo/imagem do hero através do header de forma suave e elegante.

#### Estado Após Scroll (Sobre Conteúdo Sólido) - Opaco Escuro

**Razão:** Quando scrolla, o header não está mais sobre o hero, então pode ser opaco para melhor legibilidade.

```css
- Background: rgba(0, 0, 0, 0.95) ou #0a0a0a
- Backdrop-filter: none (remove blur quando opaco)
- Box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3)
- Texto: Branco/claro mantido (#ffffff)
- Transição: 0.3s ease (transição suave entre estados)
```

**Classe CSS:** `.header-scrolled` aplicada quando `window.scrollY > threshold`

### Elementos Individuais

#### Logo STL

- **URL:** `https://res.cloudinary.com/dazkdemvu/image/upload/v1769622514/stl-festival/logos/logo-stl_ydnwga.svg`
- **Tamanho:** Altura ~32px-40px (responsivo)
- **Posição:** Lado esquerdo, padding-left: 1.5rem
- **Espaçamento:** Gap após logo: 1rem

#### Botão "Ingressos"

- **Texto:** "Ingressos" (PT-BR), "Tickets" (EN), "Entradas" (ES)
- **Posição:** Canto direito, antes do seletor de idioma
- **Estilo:** Botão destacado (pode usar cor primária STL ou estilo outline)
- **Espaçamento:** Gap antes: 1rem, Gap depois: 1rem
- **Tamanho:** Padding adequado, min-height: 44px

#### Seletor de Idioma (Ícone Planeta)

- **Ícone:** 🌐 (planeta) - SVG ou emoji
- **Posição:** Canto direito, após botão "Ingressos"
- **Comportamento:** Dropdown/menu ao clicar mostrando PT-BR, EN, ES
- **Espaçamento:** Gap antes: 1rem, padding-right: 1.5rem
- **Tamanho:** Ícone ~20px-24px

### Tipografia e Espaçamento

#### Texto do Header

- **Fonte:** Sistema (--font-body) ou Jairo para destaque
- **Tamanho:** 14px-16px (0.875rem-1rem)
- **Peso:** 500-600 (medium-semibold)
- **Cor:** Branco/claro (#ffffff ou #f5f5f5)
- **Espaçamento entre letras:** Normal (letter-spacing: 0)

#### Container

- **Padding:** 1rem 1.5rem (16px 24px vertical/horizontal)
- **Gap entre elementos:** 1rem (16px)
- **Altura mínima:** 64px-72px
- **Largura:** 100% (full width)

---

## 🎬 Animações e Interações

### Animações de Entrada

- [ ] Header fade-in ao carregar página (aguarda evento `preloader-complete`)
- [ ] Menu mobile slide-in da direita/esquerda ao abrir
- **Status no código base:** ✅ Implementado

### Scroll Animations

- [ ] Header muda de glass (transparente com blur) para opaco escuro ao fazer scroll
- [ ] **Razão:** No topo está sobre o Hero Section (vídeo), após scroll está sobre conteúdo sólido
- [ ] Sombra sutil aparece no header após scroll
- [ ] Transição suave entre estados (0.3s ease)
- **Status no código base:** ✅ Lógica implementada (precisa criar estilos CSS com glassmorphism)

### Transições

- [ ] Transição suave entre estados do header (transparente ↔ sólido)
- [ ] Transição de abertura/fechamento do menu mobile
- [ ] Transição de scroll suave ao clicar em links de âncora
- **Status no código base:** ✅ Implementado

**Biblioteca:** CSS Animations (nativo) - JavaScript vanilla já implementado

---

## 🐛 Issues a Serem Criados

### Issue #X: [Header] Adaptação do Código Base e Integração

- **Descrição:** Adaptar código base fornecido para o projeto STL Festival e integrar ao BaseLayout
- **Tarefas:**
  - [ ] Criar arquivo `src/components/Header.astro` com código base adaptado
  - [ ] Ajustar paths de assets (logo, etc.)
  - [ ] Integrar Header no BaseLayout.astro
  - [ ] Verificar estrutura HTML semântica
  - [ ] Testar funcionamento básico
- **Tempo:** 1 hora

### Issue #X: [Header] Ajuste do Logo (Mesma do SpotifyBadge)

- **Descrição:** Usar a mesma logo do SpotifyBadge no header (lado esquerdo)
- **Tarefas:**
  - [ ] Usar logo: `https://res.cloudinary.com/dazkdemvu/image/upload/v1769622514/stl-festival/logos/logo-stl_ydnwga.svg`
  - [ ] Posicionar logo no lado esquerdo do header
  - [ ] Ajustar tamanho do logo (altura: ~32px-40px)
  - [ ] Ajustar link do logo (atualmente `/` - verificar se correto)
  - [ ] Validar alt text e aria-label
  - [ ] Garantir espaçamento adequado após o logo
  - [ ] Testar logo em diferentes tamanhos de tela
- **Tempo:** 30 minutos

### Issue #X: [Header] Adaptação do Menu de Navegação e i18n

- **Descrição:** Ajustar links de navegação do código base para seções do STL Festival e integrar i18n
- **Tarefas:**
  - [ ] Revisar links atuais: LINE-UP, SOBRE, VALLEY, ACESSIBILIDADE, TRANSLADO, TIROLESA
  - [ ] Adicionar links faltantes se necessário (ex: Setores, FAQ)
  - [ ] Substituir textos hardcoded por `useTranslations()`
  - [ ] Adicionar traduções em `src/i18n/locales/*.json`:
    ```json
    {
      "nav": {
        "lineup": "LINE-UP",
        "about": "SOBRE",
        "valley": "VALLEY",
        "accessibility": "ACESSIBILIDADE",
        "transport": "TRANSLADO",
        "zipline": "TIROLESA",
        "sectors": "SETORES",
        "faq": "FAQ"
      }
    }
    ```
  - [ ] Verificar IDs das seções nas páginas correspondem aos links
  - [ ] Validar scroll suave (já implementado no código base)
- **Tempo:** 2 horas

### Issue #X: [Header] Botão "Ingressos" no Canto Direito

- **Descrição:** Ajustar botão CTA para "Ingressos" no canto direito e integrar traduções
- **Tarefas:**
  - [ ] Posicionar botão no canto direito do header
  - [ ] Alterar texto para "Ingressos" (mais curto e direto)
  - [ ] Verificar URL do iPass (atualmente `https://ipass.com.br/stlfestival`)
  - [ ] Adicionar UTM parameters para tracking: `?utm_source=stl-festival&utm_medium=header&utm_campaign=cta`
  - [ ] Substituir texto hardcoded por tradução
  - [ ] Adicionar traduções em `src/i18n/locales/*.json`:
    ```json
    {
      "nav": {
        "tickets": "Ingressos",
        "ticketsEn": "Tickets",
        "ticketsEs": "Entradas"
      }
    }
    ```
  - [ ] Estilizar botão com destaque adequado
  - [ ] Garantir espaçamento entre botão e seletor de idioma
  - [ ] Validar hover states
  - [ ] Garantir touch-friendly (min 44x44px)
- **Tempo:** 1.5 horas

### Issue #X: [Header] Seletor de Idioma com Ícone de Planeta

- **Descrição:** Criar componente LanguageSelector com ícone de planeta e dropdown para 3 idiomas
- **Tarefas:**
  - [ ] Criar componente `LanguageSelector.astro`
  - [ ] Adicionar ícone de planeta (🌐 SVG ou emoji)
  - [ ] Implementar dropdown/menu com 3 opções: PT-BR, EN, ES
  - [ ] Implementar links para /, /en/, /es/ usando `getLocalizedUrl()`
  - [ ] Destacar idioma atual usando `getLangFromUrl()`
  - [ ] Adicionar hreflang attributes
  - [ ] Posicionar no canto direito, após botão "Ingressos"
  - [ ] Garantir espaçamento adequado entre elementos
  - [ ] Estilizar conforme design system (dropdown com hover/focus)
  - [ ] Integrar no Header.astro
  - [ ] Testar troca de idioma
  - [ ] Garantir acessibilidade (ARIA labels, navegação por teclado)
- **Tempo:** 2.5 horas

### Issue #X: [Header] Validação e Ajustes do Menu Mobile

- **Descrição:** Validar funcionamento do menu mobile do código base e fazer ajustes necessários
- **Tarefas:**
  - [ ] Testar toggle do menu mobile (já implementado)
  - [ ] Validar animações slide-in (já implementado)
  - [ ] Verificar focus trap (já implementado)
  - [ ] Validar fechamento com ESC (já implementado)
  - [ ] Validar fechamento ao clicar fora (já implementado)
  - [ ] Validar fechamento ao clicar em link (já implementado)
  - [ ] Verificar prevenção de scroll do body (já implementado)
  - [ ] Ajustar estilos CSS se necessário
- **Tempo:** 1 hora

### Issue #X: [Header] Criação de Estilos CSS com Glassmorphism e Transição

- **Descrição:** Criar arquivo header.css com efeito glass (sobre Hero Section) e transição para opaco escuro após scroll
- **Tarefas:**
  - [ ] Criar arquivo `src/styles/header.css`
  - [ ] Implementar estilos base do header:
    - [ ] `position: fixed` no topo
    - [ ] `z-index: 50+` (acima do hero que tem z-index: 0-10)
    - [ ] `top: 0`, `left: 0`, `right: 0`
    - [ ] `width: 100%`
  - [ ] **Estado Normal (Glass sobre Hero):**
    - [ ] Background: `rgba(0, 0, 0, 0.1)` ou `rgba(0, 0, 0, 0.2)` (transparente)
    - [ ] `backdrop-filter: blur(10px) saturate(180%)` (efeito glass)
    - [ ] `-webkit-backdrop-filter: blur(10px) saturate(180%)` (Safari)
    - [ ] Border-bottom: `1px solid rgba(255, 255, 255, 0.1)` (opcional)
    - [ ] Box-shadow: sutil `0 2px 8px rgba(0, 0, 0, 0.1)`
    - [ ] Texto: branco/claro (#ffffff) para contraste sobre vídeo
  - [ ] **Estado Após Scroll (Opaco sobre conteúdo sólido):**
    - [ ] Background: `rgba(0, 0, 0, 0.95)` ou `#0a0a0a` (opaco)
    - [ ] `backdrop-filter: none` (remove blur quando opaco)
    - [ ] Box-shadow: mais pronunciada `0 4px 12px rgba(0, 0, 0, 0.3)`
    - [ ] Texto: branco/claro mantido (#ffffff)
    - [ ] Transição suave entre estados (classe `.header-scrolled`)
  - [ ] **Layout e Espaçamento:**
    - [ ] Container flex com espaçamento consistente (gap: 1rem / 16px)
    - [ ] Logo à esquerda com espaçamento adequado
    - [ ] Botão "Ingressos" e seletor de idioma à direita com espaçamento entre eles
    - [ ] Padding interno adequado (padding: 1rem 1.5rem)
  - [ ] **Tipografia:**
    - [ ] Texto legível em ambos os estados (cor branca/clara)
    - [ ] Tamanho de fonte adequado (14px-16px)
    - [ ] Peso de fonte adequado (500-600)
  - [ ] Estilizar botão "Ingressos" (destaque, cor primária STL se necessário)
  - [ ] Estilizar seletor de idioma (ícone planeta + dropdown)
  - [ ] Validar scroll detection (já implementado no código base)
  - [ ] Garantir que não cause CLS
  - [ ] Testar legibilidade em diferentes backgrounds
- **Tempo:** 3 horas

### Issue #X: [Header] Responsividade

- **Descrição:** Garantir responsividade em todos os breakpoints
- **Tarefas:**
  - [ ] Testar em mobile (320px, 375px, 414px)
  - [ ] Testar em tablet (768px, 1024px)
  - [ ] Testar em desktop (1280px, 1440px, 1920px)
  - [ ] Ajustar espaçamentos e tamanhos
  - [ ] Ajustar tipografia fluida
  - [ ] Validar touch targets (44x44px mínimo)
  - [ ] Testar menu mobile em diferentes tamanhos
  - [ ] Garantir que não há scroll horizontal
- **Tempo:** 2 horas

### Issue #X: [Header] Testes de Acessibilidade

- **Descrição:** Validar acessibilidade WCAG AA do header
- **Tarefas:**
  - [ ] WAVE scan
  - [ ] axe DevTools scan
  - [ ] Teste de navegação por teclado (Tab, Enter, Esc) - já implementado
  - [ ] Teste com screen reader (NVDA/JAWS)
  - [ ] Validar contraste de cores
  - [ ] Adicionar ARIA labels necessários (já implementados - validar)
  - [ ] Validar skip link (já implementado)
  - [ ] Validar focus states visíveis
- **Tempo:** 2 horas

### Issue #X: [Header] Testes de Performance

- **Descrição:** Otimizar performance e validar métricas
- **Tarefas:**
  - [ ] Lighthouse audit
  - [ ] Validar LCP (header não deve bloquear)
  - [ ] Validar CLS (sem layout shift)
  - [ ] Validar que logo carrega rapidamente (loading="eager" já implementado)
  - [ ] Otimizar JavaScript se necessário (já otimizado com requestAnimationFrame)
  - [ ] Testar em throttling 3G
- **Tempo:** 1 hora

---

## ✅ Critérios de Aceitação

### Funcionalidade

- [ ] Logo STL exibido e clicável
- [ ] Menu de navegação funcional em desktop
- [ ] Menu mobile funcional (hamburger)
- [ ] CTA "Comprar Ingresso" funcional e direciona para iPass
- [ ] Seletor de idioma funcional (PT-BR, EN, ES)
- [ ] Header sticky/fixed durante scroll
- [ ] Navegação por âncoras com scroll suave
- [ ] Sem bugs críticos ou bloqueantes
- [ ] Sem erros no console

### Design

- [ ] Visual conforme Design System
- [ ] Cores da paleta oficial STL (#ff4d2d para CTA, etc.)
- [ ] Tipografia correta (Jairo para logo/títulos)
- [ ] Espaçamento consistente (sistema 8px)
- [ ] Alinhamento correto
- [ ] Logo responsivo (tamanhos adequados)
- [ ] **Efeito glass funcionando:** Header transparente com blur sobre Hero Section
- [ ] **Z-index correto:** Header (z-index: 50+) acima do Hero (z-index: 0-10)
- [ ] **Transição suave:** Glass → Opaco escuro ao scrollar
- [ ] **Legibilidade:** Texto branco/claro legível em ambos os estados (glass e opaco)

### Performance

- [ ] Lighthouse Score: 90+ (todas as categorias)
- [ ] LCP < 2.5s (header não bloqueia)
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Bundle size razoável (JavaScript mínimo)

### Acessibilidade

- [ ] WCAG 2.1 AA compliance
- [ ] Lighthouse A11y: 100
- [ ] WAVE: 0 erros críticos
- [ ] Navegação por teclado funcional (100%)
- [ ] Screen reader testado
- [ ] Focus states visíveis
- [ ] Skip link implementado

### Responsividade

- [ ] Funciona em mobile (320px+)
- [ ] Funciona em tablet (768px+)
- [ ] Funciona em desktop (1024px+)
- [ ] Sem scroll horizontal
- [ ] Touch-friendly (botões 44x44px+)
- [ ] Menu mobile funciona perfeitamente

### i18n

- [ ] PT-BR completo
- [ ] EN completo
- [ ] ES completo
- [ ] Troca de idioma funcional
- [ ] URLs localizadas corretas
- [ ] Textos traduzidos corretamente

### Testes

- [ ] Testes manuais concluídos
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Cross-device (iOS, Android, Desktop)
- [ ] Validação em diferentes resoluções
- [ ] Menu mobile testado em dispositivos reais

---

## 📝 Notas de Implementação

### Decisões Técnicas

**Arquitetura:**

- Header será componente Astro estático com script inline para interatividade
- Menu mobile usa JavaScript vanilla (não React Island) - mais leve e performático
- Scroll behavior implementado via JavaScript com `scrollTo()` e `behavior: 'smooth'`
- Focus trap implementado para acessibilidade no menu mobile

**Código Base Existente:**

✅ **Código base fornecido já implementa:**

- Logo STL clicável
- Menu de navegação desktop
- Menu mobile com hamburger e animações
- CTA "GARANTA SEU INGRESSO"
- Scroll suave para âncoras
- Header sticky com transição de estilo ao scroll
- Focus trap no menu mobile
- Integração com preloader (aguarda evento `preloader-complete`)
- Skip link para acessibilidade
- Navegação por teclado (Tab, Enter, Esc)
- Fechamento ao clicar fora do menu

**Adaptações Necessárias:**

1. **Integração com i18n:**
   - Substituir textos hardcoded por `useTranslations()`
   - Adicionar traduções em `src/i18n/locales/*.json`
   - Adaptar links de navegação para URLs localizadas

2. **Seletor de Idioma:**
   - Criar componente `LanguageSelector.astro`
   - Integrar no header (antes ou depois do CTA)
   - Usar `getLangFromUrl()` para destacar idioma atual

3. **Links de Navegação:**
   - Ajustar para seções do STL Festival:
     - `#lineup` → Lineup
     - `#sobre` → Sobre o Festival
     - `#valley` → STL Valley
     - `#acessibilidade` → Acessibilidade
     - `#translado` → Translado
     - `#tirolesa` → Tirolesa
   - Adicionar outras seções conforme necessário (Setores, FAQ, etc.)

4. **Estilos CSS:**
   - Criar arquivo `src/styles/header.css`
   - Aplicar design system STL (cores, tipografia, espaçamento)
   - Garantir responsividade completa
   - Implementar transições e animações conforme design system

5. **Logo:**
   - Usar mesma logo do SpotifyBadge: `https://res.cloudinary.com/dazkdemvu/image/upload/v1769622514/stl-festival/logos/logo-stl_ydnwga.svg`
   - Posicionar no lado esquerdo do header
   - Tamanho adequado (~32px-40px de altura)

6. **Botão "Ingressos":**
   - Texto: "Ingressos" (mais curto e direto)
   - Posição: Canto direito, antes do seletor de idioma
   - Traduções: PT-BR "Ingressos", EN "Tickets", ES "Entradas"
   - URL iPass com UTM parameters
   - Espaçamento adequado entre botão e seletor de idioma

7. **Efeito Glass e Transição:**
   - **Razão do Glass:** Header fica SOBRE o Hero Section (vídeo/imagem), precisa de transparência com blur
   - Estado normal: Glassmorphism (`backdrop-filter: blur(10px)`, background transparente)
   - Estado após scroll: Opaco com cor escura (preto/preto escuro) - não está mais sobre hero
   - Z-index: 50+ (acima do hero que tem z-index: 0-10)
   - Transição suave entre estados (0.3s ease)
   - Texto legível em ambos os estados (cor branca/clara #ffffff)

**Estrutura de Arquivos:**

```
src/components/
├── Header.astro              # Componente principal (código base adaptado)
└── LanguageSelector.astro    # Seletor de idioma (novo - precisa criar)

src/styles/
└── header.css                # Estilos do header (novo - precisa criar)
```

**Nota:** O código base já inclui toda a estrutura HTML, JavaScript e lógica do menu mobile em um único arquivo `Header.astro`. Não é necessário separar em múltiplos componentes, mantendo tudo coeso e performático.

**⚠️ IMPORTANTE - Posicionamento sobre Hero Section:**

- O header fica **SOBRE o Hero Section** (que contém vídeo/imagem de fundo)
- Por isso o efeito glass é essencial: permite ver o conteúdo do hero através do header
- Z-index do header: **50+** (hero tem z-index: 0-10, badges têm z-index: 10)
- Quando scrolla, o header não está mais sobre o hero, então pode ser opaco
- O código base já tem lógica de scroll detection - apenas precisa criar os estilos CSS com glassmorphism

---

## 🔀 Pull Request (PR)

### Título do PR

```
[SECTION] Header/Navigation - Implementação completa com menu mobile e i18n
```

### Descrição do PR

```markdown
## 📋 Descrição

Implementação completa do Header/Navigation do STL Festival, incluindo:

- Logo STL clicável
- Menu de navegação principal
- CTA "Comprar Ingresso"
- Seletor de idioma (PT-BR, EN, ES)
- Menu mobile responsivo (hamburger)
- Header sticky com transição de estilo ao scroll

## ✅ Checklist de Implementação

- [x] Componentes desenvolvidos
- [x] Responsividade testada (mobile/tablet/desktop)
- [x] Animações implementadas
- [x] Acessibilidade validada (WCAG AA)
- [x] Performance testada (Lighthouse 90+)
- [x] i18n implementado (PT-BR, EN, ES)
- [x] Testes manuais concluídos
- [x] Cross-browser testado

## 📊 Métricas

- Lighthouse Performance: [X]
- Lighthouse A11y: [X]
- LCP: [X]s
- FID: [X]ms
- CLS: [X]

## 🖼️ Screenshots/Preview

[Link para preview deploy ou screenshots]

## 🔗 Issues Relacionados

Closes #X, Closes #Y, Closes #Z

## 📝 Notas Adicionais

- Código base adaptado de projeto anterior
- Integração completa com sistema i18n existente
- JavaScript vanilla para melhor performance
```

---

## 📊 Estimativas e Tracking

| Tarefa                          | Estimado | Real     | Status      |
| ------------------------------- | -------- | -------- | ----------- |
| Setup e Adaptação               | 1h       | [X]h     | ⏸️ Pendente |
| Logo e Paths                    | 0.5h     | [X]h     | ⏸️ Pendente |
| Menu Navegação + i18n           | 2h       | [X]h     | ⏸️ Pendente |
| Botão Ingressos + i18n          | 1.5h     | [X]h     | ⏸️ Pendente |
| Seletor Idioma (Planeta)        | 2.5h     | [X]h     | ⏸️ Pendente |
| Validação Menu Mobile           | 1h       | [X]h     | ⏸️ Pendente |
| Estilos CSS + Glass + Transição | 3h       | [X]h     | ⏸️ Pendente |
| Responsividade                  | 2h       | [X]h     | ⏸️ Pendente |
| Testes A11y                     | 2h       | [X]h     | ⏸️ Pendente |
| Testes Performance              | 1h       | [X]h     | ⏸️ Pendente |
| **TOTAL**                       | **16h**  | **[X]h** |             |

---

## ✅ Status Final

- **Branch:** `feature/section-header`
- **PR:** #[número]
- **Status:** ⏸️ Não Iniciado / 🟡 Em Progresso / ✅ Concluído / 🔴 Bloqueado
- **Data de Merge:** [DD/MM/YYYY]
- **Deploy Preview:** [URL]

---

**Documento Criado em:** [DD/MM/YYYY]
**Última Atualização:** [DD/MM/YYYY]
**Versão:** 1.0
