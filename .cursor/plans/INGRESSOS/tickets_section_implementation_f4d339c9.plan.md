---
name: Tickets Section Implementation
overview: Criar seção de ingressos com 3 cards (Camarote Premium sold out, Camarote e Pista) inspirada no design do Klangtherapie Festival, seguindo todas as rules de arquitetura, design system, i18n, acessibilidade e performance.
todos:
  - id: git-branch
    content: Criar branch feature/tickets-section a partir da main
    status: completed
  - id: i18n-translations
    content: Adicionar translations para tickets em pt-BR.json, en.json, es.json
    status: completed
  - id: ticket-card-component
    content: Criar componente TicketCard.astro reutilizável com props e acessibilidade
    status: completed
    dependencies:
      - i18n-translations
  - id: tickets-section-component
    content: Criar TicketsSection.astro com grid de 3 cards e header
    status: completed
    dependencies:
      - ticket-card-component
  - id: integrate-index
    content: Integrar TicketsSection na página index.astro após LineupSection
    status: completed
    dependencies:
      - tickets-section-component
  - id: validation-tests
    content: Validar acessibilidade, contraste, responsividade, i18n e Lighthouse
    status: completed
    dependencies:
      - integrate-index
  - id: commit-push
    content: Commit com conventional commits e push da branch feature/tickets-section
    status: completed
    dependencies:
      - validation-tests
---

# Implementação da Seção de Tickets - STL Festival

## 1. Estrutura de Branch e Git

Criar nova branch `feature/tickets-section` derivada da `main`:

```bash
git checkout main
git pull origin main
git checkout -b feature/tickets-section
```

## 2. Estrutura i18n - Traduções

Adicionar translations para a seção de tickets nos 3 idiomas:

**Arquivos a atualizar:**

- [`src/i18n/locales/pt-BR.json`](src/i18n/locales/pt-BR.json)
- [`src/i18n/locales/en.json`](src/i18n/locales/en.json)
- [`src/i18n/locales/es.json`](src/i18n/locales/es.json)

**Estrutura de chaves (seguindo LEI 06 - i18n):**

```json
{
  "tickets": {
    "title": "Ingressos",
    "subtitle": "Garanta seu lugar no STL Festival 2026",
    "sectionLabel": "Seção de ingressos do festival",
    "soldOut": "Esgotado",
    "buyNow": "Comprar Agora",
    "camarotePremium": {
      "name": "Camarote Premium",
      "description": "????????",
      "ariaLabel": "Camarote Premium - Esgotado"
    },
    "camarote": {
      "name": "Camarote",
      "price": "XXX",
      "description": "????????",
      "ariaLabel": "Camarote - R$ XXX"
    },
    "pista": {
      "name": "Pista",
      "price": "XXX",
      "description": "????????",
      "ariaLabel": "Pista - R$ XXX"
    }
  }
}
```

## 3. Componente TicketCard (Reutilizável)

**Criar:** [`src/components/tickets/TicketCard.astro`](src/components/tickets/TicketCard.astro)

Componente estático (sem `client:*`) com props:

- `name: string` - Nome do ingresso
- `price?: string` - Preço (opcional para sold out)
- `description: string` - Descrição do ingresso
- `soldOut?: boolean` - Se está esgotado
- `variant: 'premium' | 'standard'` - Estilo visual
- `ariaLabel: string` - Label acessível

**Design inspirado no Klangtherapie:**

- Card com `border-radius: var(--radius-2xl)`
- **Formato de ticket físico** (todos os cards):
  - Furo circular no topo (32px desktop, responsivo)
  - Linha tracejada abaixo do furo (efeito de perfuração)
- Background com gradiente suave usando tokens CSS:
  - Pista (1º): gradiente azul teal (`--color-blue` → `--color-blue-light`)
  - Camarote (2º): gradiente verde (`--color-green` → `--color-green-light`)
  - Premium (3º): grayscale (`--color-gray-300` → `--color-gray-400`)
- **Faixa "Sold Out" diagonal** (apenas Premium):
  - Faixa preta atravessando o card em -35°
  - Texto branco em itálico lowercase "Sold out"
  - Width 140%, contida no card (overflow: hidden)
  - Sombras duplas para profundidade
- Preço em círculo central com backdrop-filter blur
- Botão "Comprar Agora" com hover/focus states
- Sombra `var(--shadow-lg)` para elevação

**Acessibilidade (LEI 08 - WCAG 2.1 AA):**

- Semântica: `<article>` para cada card
- Heading `<h3>` para nome do ingresso
- `aria-label` descritivo para botões
- Contraste de cores verificado (mínimo 4.5:1)
- Focus visível em botões

## 4. Componente Principal TicketsSection

**Criar:** [`src/components/TicketsSection.astro`](src/components/TicketsSection.astro)

Estrutura:

```astro
---
import { getLangFromUrl, useTranslations } from '@/i18n/utils';
import TicketCard from './tickets/TicketCard.astro';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<section
  id="tickets"
  class="tickets-section"
  role="region"
  aria-label={t('tickets.sectionLabel')}
>
  <div class="container">
    {/* Header */}
    <div class="tickets-header">
      <h2>{t('tickets.title')}</h2>
      <p>{t('tickets.subtitle')}</p>
    </div>

    {/* Grid de cards - Ordem: Pista, Camarote, Premium */}
    <div class="tickets-grid">
      {/* Pista */}
      <TicketCard
        name={t('tickets.pista.name')}
        price={t('tickets.pista.price')}
        description={t('tickets.pista.description')}
        variant="standard"
        ariaLabel={t('tickets.pista.ariaLabel')}
        buyNowLabel={t('tickets.buyNow')}
      />

      {/* Camarote */}
      <TicketCard
        name={t('tickets.camarote.name')}
        price={t('tickets.camarote.price')}
        description={t('tickets.camarote.description')}
        variant="standard"
        ariaLabel={t('tickets.camarote.ariaLabel')}
        buyNowLabel={t('tickets.buyNow')}
      />

      {/* Camarote Premium - Sold Out */}
      <TicketCard
        name={t('tickets.camarotePremium.name')}
        description={t('tickets.camarotePremium.description')}
        soldOut={true}
        variant="premium"
        ariaLabel={t('tickets.camarotePremium.ariaLabel')}
        buyNowLabel={t('tickets.soldOut')}
      />
    </div>
  </div>
</section>
```

**CSS (seguindo LEI 10 - Design System):**

- Grid responsivo: 1 coluna mobile, 3 colunas desktop
- Espaçamento usando tokens: `--spacing-xl`, `--spacing-2xl`
- Container usando classe `.container` de [`src/styles/global.css`](src/styles/global.css)
- Tipografia: `--font-heading` para títulos, `--font-body` para descrições

## 5. Integração na Página Principal

**Atualizar:** [`src/pages/index.astro`](src/pages/index.astro)

Adicionar após `<LineupSection />`:

```astro
import TicketsSection from '@/components/TicketsSection.astro';

<BaseLayout>
  <Preloader />
  <HeroSection />
  <LineupSection />
  <TicketsSection />
  {/* NOVA SEÇÃO */}
</BaseLayout>
```

## 6. Schema.org para SEO (LEI 09)

Adicionar structured data no `<head>` da seção para melhor indexação:

```json
{
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "Ingressos STL Festival 2026",
  "category": "Ticket",
  "availability": "InStock",
  "url": "https://stlfestival.com.br/#tickets"
}
```

## 7. Performance Otimizations (LEI 07)

- **Sem JavaScript**: Seção 100% estática (sem `client:*`)
- **Imagens futuras**: Preparar estrutura para imagens otimizadas via Cloudinary:
  - `loading="lazy"` para imagens below-the-fold
  - `width` e `height` explícitos (previne CLS)
  - `f_auto,q_auto` nas transformações
- **CSS crítico**: Inline no componente usando `<style>` scoped
- **Bundle size**: Sem impacto (componente estático)

## 8. Contraste e Cores (LEI 08 + 12)

Garantir WCAG 2.1 AA:

- Verde sobre creme: `#006a47` sobre `#fefbdf` ✅ (passa AA)
- Azul teal sobre creme: `#007b9a` sobre `#fefbdf` ✅ (passa AA)
- Texto preto sobre cards: `#000000` sobre gradientes ✅
- Botões: contraste mínimo 4.5:1

**Usar apenas tokens CSS (LEI 12):**

- `var(--color-green)` em vez de `#006a47`
- `var(--color-blue)` em vez de `#007b9a`
- `var(--color-cream)` para backgrounds

## 9. Estrutura de Arquivos Final

```
src/
├── components/
│   ├── tickets/
│   │   └── TicketCard.astro (novo)
│   └── TicketsSection.astro (novo)
├── i18n/
│   └── locales/
│       ├── pt-BR.json (atualizado)
│       ├── en.json (atualizado)
│       └── es.json (atualizado)
└── pages/
    └── index.astro (atualizado)
```

## 10. Validação e Testes

Antes do commit:

- [ ] Verificar contraste de cores (WebAIM Contrast Checker)
- [ ] Testar navegação por teclado (Tab, Enter)
- [ ] Validar semântica HTML (aXe DevTools)
- [ ] Testar responsividade (mobile 320px até desktop 1920px)
- [ ] Verificar i18n (trocar idiomas: PT/EN/ES)
- [ ] Lighthouse score ≥ 90
- [ ] ESLint + TypeScript check passando

## 11. Commit seguindo Conventional Commits (LEI 11)

```bash
git add .
git commit -m "feat(tickets): add tickets section with 3 cards

- Create TicketCard reusable component
- Add TicketsSection with responsive grid
- Implement i18n for PT-BR, EN, ES
- Follow WCAG 2.1 AA standards
- Use CSS tokens (no hardcoded colors)
- Add Schema.org structured data for SEO

Refs: Klangtherapie Festival design inspiration"
```

## 12. Design Aprimorado - Ticket Físico (IMPLEMENTADO)

### Ordem dos Tickets:

1. **Pista** (azul teal) - primeiro card
2. **Camarote** (verde) - segundo card
3. **Camarote Premium** (grayscale, sold out) - terceiro card

### Elementos Visuais de Ticket Físico:

**Furo circular no topo** (todos os cards):

- Desktop: 32px × 32px
- Tablet (≤768px): 28px × 28px
- Mobile (≤480px): 24px × 24px
- Background: var(--color-cream)
- Sombra interna para efeito 3D
- Posicionado 24px do topo, centralizado

**Linha tracejada** (todos os cards):

- Pattern: 8px preenchido + 8px transparente
- Opacidade: 30%
- Posicionada 68px do topo (44px abaixo do furo)
- Width: 100%

**Faixa "Sold Out" diagonal** (apenas Camarote Premium):

- Background: var(--color-black) sólido
- Color: var(--color-white)
- Transform: rotate(-35deg)
- Width: 140% (contida no card)
- Font-size: 2.5rem (desktop) → 1.5rem (mobile)
- Text-transform: lowercase + italic
- Sombras duplas para profundidade
- Z-index: 15
- Overflow: hidden no card para conter a faixa

### CSS Cores por Posição:

```css
/* Pista (1º card) */
.ticket-card--standard:nth-of-type(1) {
  background: linear-gradient(
    135deg,
    var(--color-blue),
    var(--color-blue-light)
  );
}

/* Camarote (2º card) */
.ticket-card--standard:nth-of-type(2) {
  background: linear-gradient(
    135deg,
    var(--color-green),
    var(--color-green-light)
  );
}

/* Camarote Premium (3º card) */
.ticket-card--premium {
  background: linear-gradient(
    135deg,
    var(--color-gray-300),
    var(--color-gray-400)
  );
}
```

## 13. Integração com iPass (IMPLEMENTADO)

### URLs de Compra:

- **Pista**: https://www.ipass.com.br/stlfestival
- **Camarote**: https://www.ipass.com.br/stlfestival
- **Camarote Premium**: N/A (sold out, botão desabilitado)

### Implementação:

```typescript
// TicketCard.astro - Nova prop
export interface Props {
  // ... outras props
  buyUrl?: string; // URL opcional para compra
}

// Botão com link externo
<a
  href={buyUrl}
  class="ticket-card__button"
  target="_blank"
  rel="noopener noreferrer"
>
  {buyNowLabel}
</a>
```

### Segurança:

- `target="_blank"` - Abre em nova aba
- `rel="noopener noreferrer"` - Previne ataques de tabnabbing
- Sold out cards não têm link (botão desabilitado)

## Notas Técnicas

- **iPass Integration**: ✅ Links funcionais para plataforma de venda de ingressos
- **Imagens**: Estrutura preparada mas sem imagens no primeiro commit
- **Prices & Descriptions**: Valores placeholder (`XXX` e `????????`) serão atualizados posteriormente
- **Islands Architecture**: Seção totalmente estática, sem hidratação React (LEI 05)
- **Design Reference**: Inspirado no Klangtherapie Festival com formato de ticket físico
- **Ordem dos Cards**: Pista → Camarote → Camarote Premium (sold out)
- **External Links**: Segurança implementada com noopener noreferrer
