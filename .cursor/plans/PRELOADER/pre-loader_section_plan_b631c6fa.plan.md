---
name: Pre-loader Section Plan
overview: Plano completo de desenvolvimento do componente Pre-loader para o STL Festival, incluindo migração de código existente, integração com design system, animações com Framer Motion, e comunicação com Hero Section através de eventos customizados.
todos:
  - id: preloader-setup
    content: Setup e estrutura base do componente Preloader (arquivos, pastas, imports)
    status: pending
  - id: preloader-migration
    content: Migração de código existente e adaptação para Astro + design system STL
    status: pending
  - id: preloader-assets
    content: Sistema de preload de assets críticos (vídeo hero, imagem fallback, fontes)
    status: pending
  - id: preloader-animations
    content: Implementação de animações com Framer Motion/CSS (entrada, progresso, saída)
    status: pending
  - id: preloader-hero-integration
    content: Integração com Hero Section através de eventos customizados (preloader-progress, preloader-complete)
    status: pending
  - id: preloader-i18n
    content: Internacionalização do preloader (PT-BR, EN, ES)
    status: pending
  - id: preloader-responsiveness
    content: Testes e ajustes de responsividade (mobile, tablet, desktop)
    status: pending
  - id: preloader-accessibility
    content: Testes e validação de acessibilidade (WCAG AA, screen readers, reduced motion)
    status: pending
  - id: preloader-performance
    content: Otimização e testes de performance (Lighthouse, Core Web Vitals, bundle size)
    status: pending
isProject: false
---

# Plano de Desenvolvimento: Pre-loader

## 📋 Informações Básicas

| Campo              | Valor                                                 |
| ------------------ | ----------------------------------------------------- |
| **Seção**          | Pre-loader                                            |
| **Prioridade**     | 🔴 Crítica                                            |
| **Branch**         | `feature/component-preloader`                         |
| **Responsável**    | Equipe de Desenvolvimento                             |
| **Tempo Estimado** | 1.5 dias (código base existe, adaptação e integração) |
| **Data Início**    | [A definir]                                           |
| **Data Entrega**   | [A definir]                                           |

---

## 🎯 Objetivo da Seção

### O que ela resolve/comunica?

O Pre-loader é a **primeira impressão** do site, criando uma experiência de entrada impactante que:

- **Gera expectativa** antes da experiência principal
- **Comunica qualidade** através de animações profissionais
- **Prepara o usuário** para a experiência imersiva do festival
- **Oculta o carregamento** do conteúdo pesado (vídeo hero) de forma elegante
- **Reflete a identidade** do STL Festival através do design

### Qual problema do usuário ela atende?

1. **Tempo de carregamento:** Usuários não veem tela em branco durante carregamento do vídeo hero
2. **Primeira impressão:** Cria impacto visual desde o primeiro momento
3. **Expectativa:** Gera antecipação positiva para a experiência do festival
4. **Branding:** Reforça identidade visual do STL desde o início

### Como ela contribui para conversão?

- **Reduz bounce rate:** Usuários aguardam o carregamento ao invés de fechar a página
- **Aumenta engajamento:** Primeira impressão positiva aumenta tempo na página
- **Reflete qualidade:** Preloader profissional comunica qualidade do evento
- **Prepara contexto:** Usuário entra no "mood" do festival antes mesmo de ver o conteúdo

---

## 📐 Requisitos Funcionais (RF)

### RF-01: Exibição Inicial do Preloader

- **Descrição:** Preloader deve aparecer imediatamente ao carregar a página, antes de qualquer conteúdo visível
- **User Story:** Como usuário, eu quero ver uma animação de carregamento profissional ao invés de uma tela em branco
- **Prioridade:** 🔴 Must Have

### RF-02: Animação de Progresso

- **Descrição:** Preloader deve exibir progresso visual do carregamento (barra de progresso, porcentagem, ou animação indicativa)
- **Eventos:** Deve disparar eventos `preloader-progress` com valor de 0-100% para comunicação com Hero Section
- **User Story:** Como usuário, eu quero ver o progresso do carregamento para saber que algo está acontecendo
- **Prioridade:** 🔴 Must Have

### RF-03: Logo STL Centralizada

- **Descrição:** Logo STL deve aparecer centralizada no preloader, possivelmente com animação (rotação, pulse, fade)
- **Logo:** Usar mesma logo do header: `https://res.cloudinary.com/dazkdemvu/image/upload/v1769622514/stl-festival/logos/logo-stl_ydnwga.svg`
- **User Story:** Como usuário, eu quero ver o logo do STL Festival durante o carregamento para reconhecer a marca
- **Prioridade:** 🔴 Must Have

### RF-04: Integração com Hero Section

- **Descrição:** Preloader deve comunicar com Hero Section através de eventos customizados:
  - `preloader-progress`: Dispara durante carregamento com valor 0-100
  - `preloader-complete`: Dispara quando carregamento completo
- **User Story:** Como sistema, eu preciso que o preloader informe quando o conteúdo está pronto para exibição
- **Prioridade:** 🔴 Must Have

### RF-05: Transição Suave para Hero

- **Descrição:** Ao completar carregamento, preloader deve fazer fade out suave antes de revelar Hero Section
- **Duração:** Transição de 300-500ms (ease-out)
- **User Story:** Como usuário, eu quero uma transição suave entre preloader e conteúdo principal
- **Prioridade:** 🔴 Must Have

### RF-06: Preload de Assets Críticos

- **Descrição:** Durante exibição do preloader, deve fazer preload de:
  - Vídeo hero (mobile: 960px, desktop: 1920px)
  - Imagem fallback do hero
  - Fontes críticas (Jairo, Superbusy Activity)
- **User Story:** Como sistema, eu preciso garantir que assets críticos estejam prontos antes de revelar conteúdo
- **Prioridade:** 🔴 Must Have

### RF-07: Suporte a Reduced Motion

- **Descrição:** Respeitar preferência `prefers-reduced-motion` do usuário, simplificando ou removendo animações
- **User Story:** Como usuário com sensibilidade a movimento, eu quero que o preloader respeite minhas preferências de acessibilidade
- **Prioridade:** 🟡 Should Have

### RF-08: Timeout de Segurança

- **Descrição:** Se carregamento demorar mais de 5-8 segundos, forçar conclusão do preloader mesmo que assets não estejam 100% carregados
- **User Story:** Como usuário, eu não quero esperar indefinidamente se houver problema de conexão
- **Prioridade:** 🟡 Should Have

---

## 🚀 Requisitos Não-Funcionais (RNF)

### Performance

- LCP < 2.5s (meta: < 1.5s) - Preloader não deve bloquear renderização crítica
- FID < 100ms (meta: < 50ms) - Preloader não deve bloquear interatividade
- CLS < 0.1 (meta: < 0.05) - Preloader não deve causar layout shift
- Lighthouse Performance: 90+ (meta: 95+)
- Bundle JS: < 10KB (preloader isolado)

### Acessibilidade

- WCAG 2.1 Level AA
- Lighthouse A11y: 100
- WAVE: 0 erros críticos
- Screen reader friendly (ARIA labels: "Carregando conteúdo", role="status")
- Suporte a `prefers-reduced-motion`
- Contraste adequado (logo e texto sobre fundo)

### SEO

- Não bloquear indexação (preloader não deve interferir com SEO)
- Meta tags carregadas antes do preloader desaparecer

### Responsividade

- Mobile (320px - 767px) - Logo e animação proporcionais
- Tablet (768px - 1023px) - Adaptação de tamanhos
- Desktop (1024px+) - Visual completo

### Internacionalização (i18n)

- Textos do preloader traduzidos (PT-BR, EN, ES)
- Mensagens de carregamento localizadas
- Integração com sistema i18n existente

---

## 🧩 Componentes Necessários

### Componentes Customizados

- `Preloader.astro` - Componente principal do preloader (migração de código existente)
- `PreloaderProgress.astro` - Indicador de progresso (barra ou porcentagem) - **OPCIONAL**

### Scripts TypeScript

- `src/scripts/preloader/preloaderManager.ts` - Gerenciamento de estado e eventos
- `src/scripts/preloader/assetPreloader.ts` - Preload de assets críticos
- `src/scripts/preloader/progressTracker.ts` - Rastreamento de progresso

### Arquivos de Estilo

- `src/styles/preloader.css` - Estilos do preloader conforme design system STL

**Nota Técnica:**

- Código base já existe em outro projeto - será migrado e adaptado
- Usar Framer Motion para animações (já decidido no stack)
- Componente pode ser Astro com JavaScript inline ou React Island (`client:load`)
- Preferir Astro + vanilla JS para menor bundle size

---

## 🎨 Assets e Dependências

### Imagens

- `logo-stl.svg` - Logo STL (mesma do header)
  - Path: `https://res.cloudinary.com/dazkdemvu/image/upload/v1769622514/stl-festival/logos/logo-stl_ydnwga.svg`

### Fontes

- Jairo (headings) - Já carregada no projeto
- Superbusy Activity (decorativo) - Já carregada no projeto

### Conteúdo

- Textos de carregamento (PT-BR, EN, ES) - Adicionar em `src/i18n/locales/*.json`
  - Exemplo: "Carregando...", "Loading...", "Cargando..."

### Dependências de Outras Seções

- Hero Section deve estar preparada para receber eventos (`preloader-progress`, `preloader-complete`) - ✅ Já implementado
- Sistema i18n já implementado (`src/i18n/`) - ✅ Pronto
- Design tokens já configurados (`src/styles/global.css`) - ✅ Pronto

### Dependências Técnicas

- Framer Motion (já instalado no projeto)
- TypeScript (já configurado)

---

## 🎬 Animações e Interações

### Animações de Entrada

- Fade in do preloader (0ms - instantâneo ao carregar página)
- Logo aparece com animação (fade + scale ou rotação suave)

### Animações de Progresso

- Barra de progresso animada (width 0% → 100%)
- Ou: Logo com pulse/rotação durante carregamento
- Ou: Porcentagem animada (0% → 100%)

### Animações de Saída

- Fade out suave (300-500ms ease-out)
- Logo desaparece antes do fundo (stagger animation)

### Transições

- Transição para Hero Section sem "flash" ou "jump"
- Hero Section aparece apenas após preloader completamente oculto

**Biblioteca:** Framer Motion (já decidido no stack)

**Exemplo de Animação (Framer Motion):**

```tsx
// Estrutura básica
const preloaderVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const logoVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: { repeat: Infinity, duration: 2 },
  },
};
```

---

## 🐛 Issues a Serem Criados

### Issue #X: [Pre-loader] Setup e Estrutura Base

- **Descrição:** Criar estrutura inicial do componente preloader
- **Tarefas:**
  - Criar arquivo `Preloader.astro`
  - Criar estrutura de pastas `src/scripts/preloader/`
  - Configurar imports e dependências
  - Integrar com sistema de eventos existente
- **Tempo:** 2 horas

### Issue #X: [Pre-loader] Migração de Código Existente

- **Descrição:** Migrar código do preloader de outro projeto e adaptar para Astro
- **Tarefas:**
  - Copiar código base do preloader
  - Adaptar para sintaxe Astro
  - Integrar com design system STL (cores, tipografia)
  - Ajustar paths de assets (logo)
  - Testar funcionamento básico
- **Tempo:** 4 horas

### Issue #X: [Pre-loader] Sistema de Preload de Assets

- **Descrição:** Implementar preload inteligente de assets críticos
- **Tarefas:**
  - Criar `assetPreloader.ts` para gerenciar preload
  - Preload vídeo hero (mobile: 960px, desktop: 1920px)
  - Preload imagem fallback
  - Preload fontes críticas
  - Rastrear progresso de cada asset
  - Disparar eventos `preloader-progress` (0-100%)
- **Tempo:** 3 horas

### Issue #X: [Pre-loader] Animações com Framer Motion

- **Descrição:** Implementar animações suaves e profissionais
- **Tarefas:**
  - Animação de entrada do preloader
  - Animação do logo (fade + scale ou rotação)
  - Animação de progresso (barra ou indicador)
  - Animação de saída (fade out)
  - Integrar com `prefers-reduced-motion`
  - Otimizar performance (will-change, transform)
- **Tempo:** 3 horas

### Issue #X: [Pre-loader] Integração com Hero Section

- **Descrição:** Garantir comunicação perfeita entre preloader e hero
- **Tarefas:**
  - Testar eventos `preloader-progress` no Hero
  - Testar evento `preloader-complete` no Hero
  - Validar transição suave (sem flash)
  - Garantir que Hero só aparece após preloader oculto
  - Testar em diferentes velocidades de conexão
- **Tempo:** 2 horas

### Issue #X: [Pre-loader] Internacionalização (i18n)

- **Descrição:** Adicionar suporte a 3 idiomas no preloader
- **Tarefas:**
  - Extrair textos para JSON (PT-BR)
  - Adicionar traduções (EN)
  - Adicionar traduções (ES)
  - Integrar com sistema i18n existente
  - Testar troca de idioma durante preload
- **Tempo:** 1 hora

### Issue #X: [Pre-loader] Responsividade

- **Descrição:** Garantir responsividade em todos os breakpoints
- **Tarefas:**
  - Testar em mobile (320px, 375px, 414px)
  - Testar em tablet (768px, 1024px)
  - Testar em desktop (1280px, 1440px, 1920px)
  - Ajustar tamanho do logo proporcionalmente
  - Validar animações em diferentes tamanhos
- **Tempo:** 2 horas

### Issue #X: [Pre-loader] Testes de Acessibilidade

- **Descrição:** Validar acessibilidade WCAG AA
- **Tarefas:**
  - WAVE scan
  - axe DevTools scan
  - Teste com screen reader (NVDA/JAWS)
  - Validar contraste de cores
  - Testar `prefers-reduced-motion`
  - Adicionar ARIA labels necessários
  - Validar foco e navegação por teclado
- **Tempo:** 2 horas

### Issue #X: [Pre-loader] Testes de Performance

- **Descrição:** Otimizar performance e validar métricas
- **Tarefas:**
  - Lighthouse audit
  - Validar LCP (preloader não deve bloquear)
  - Validar CLS (sem layout shift)
  - Validar FID (não bloquear interatividade)
  - Testar em throttling 3G
  - Otimizar bundle size (< 10KB)
  - Implementar timeout de segurança (5-8s)
- **Tempo:** 2 horas

---

## ✅ Critérios de Aceitação

### Funcionalidade

- Preloader aparece imediatamente ao carregar página
- Logo STL exibido centralizado
- Progresso visual durante carregamento
- Eventos `preloader-progress` e `preloader-complete` disparados corretamente
- Transição suave para Hero Section (sem flash)
- Preload de assets críticos funcionando
- Timeout de segurança implementado (5-8s)
- Sem erros no console

### Design

- Visual conforme Design System STL
- Cores da paleta oficial (fundo escuro ou claro conforme design)
- Tipografia correta (Jairo para logo, Sistema para textos)
- Logo com tamanho adequado e proporcional
- Espaçamento consistente (sistema 8px)
- Animações suaves e profissionais

### Performance

- Lighthouse Score: 90+ (Performance)
- LCP < 2.5s (preloader não bloqueia)
- FID < 100ms
- CLS < 0.1
- Bundle size < 10KB (preloader isolado)
- Assets críticos preloadados corretamente

### Acessibilidade

- WCAG 2.1 AA compliance
- Lighthouse A11y: 100
- WAVE: 0 erros críticos
- Screen reader friendly (ARIA labels)
- Suporte a `prefers-reduced-motion`
- Contraste adequado

### Responsividade

- Funciona em mobile (320px+)
- Funciona em tablet (768px+)
- Funciona em desktop (1024px+)
- Logo proporcional em todos os tamanhos
- Animações funcionam em todos os dispositivos

### i18n

- PT-BR completo
- EN completo
- ES completo
- Textos traduzidos corretamente
- Integração com sistema i18n funcional

### Integração

- Comunicação com Hero Section funcionando
- Eventos customizados disparados corretamente
- Transição sem "jump" ou "flash"
- Hero aparece apenas após preloader oculto

---

## 📝 Notas de Implementação

### Decisões Técnicas

**Arquitetura:**

- Preloader será componente Astro com JavaScript inline (não React Island) para menor bundle size
- Framer Motion será usado apenas se necessário para animações complexas, caso contrário CSS animations
- Eventos customizados (`preloader-progress`, `preloader-complete`) já estão sendo escutados no Hero Section

**Preload Strategy:**

- Vídeo hero: Preload apenas quando necessário (mobile vs desktop)
- Imagem fallback: Preload imediato (mais leve)
- Fontes: Preload críticas (Jairo, Superbusy Activity)

**Progress Tracking:**

- Rastrear progresso de cada asset individualmente
- Calcular progresso total como média ponderada
- Disparar eventos a cada 10% de progresso (otimização)

### Desafios Encontrados

[A ser preenchido durante implementação]

### Otimizações Aplicadas

[A ser preenchido durante implementação]

### Aprendizados

[A ser preenchido após implementação]

---

## 🔀 Pull Request (PR)

### Título do PR

```
[COMPONENT] Pre-loader - Migração e integração do código existente
```

### Descrição do PR

```markdown
## 📋 Descrição

Implementação do componente Pre-loader para criar primeira impressão impactante e gerenciar carregamento de assets críticos.

## ✅ Checklist de Implementação

- [ ] Componente desenvolvido e migrado
- [ ] Animações implementadas (Framer Motion/CSS)
- [ ] Integração com Hero Section (eventos customizados)
- [ ] Preload de assets críticos funcionando
- [ ] Responsividade testada (mobile/tablet/desktop)
- [ ] Acessibilidade validada (WCAG AA)
- [ ] Performance testada (Lighthouse 90+)
- [ ] i18n implementado (PT-BR, EN, ES)
- [ ] Testes manuais concluídos

## 📊 Métricas

- Lighthouse Performance: [X]
- Lighthouse A11y: [X]
- LCP: [X]s
- FID: [X]ms
- CLS: [X]
- Bundle Size: [X]KB

## 🖼️ Screenshots/Preview

[Link para preview deploy ou screenshots]

## 🔗 Issues Relacionados

Closes #X, Closes #Y, Closes #Z

## 📝 Notas Adicionais

- Código base migrado de [projeto origem]
- Integração com Hero Section através de eventos customizados
- Timeout de segurança implementado (8s máximo)
```

### Reviewers

- [Nome do Reviewer 1]
- [Nome do Reviewer 2]

### Aprovação Necessária

- Code review aprovado
- Testes passando
- Design aprovado
- Performance validada
- A11y validada
- Integração com Hero validada

---

## 📊 Estimativas e Tracking

| Tarefa             | Estimado            | Real  | Status          |
| ------------------ | ------------------- | ----- | --------------- |
| Setup e Estrutura  | 2h                  | -     | ⏸️ Pendente     |
| Migração de Código | 4h                  | -     | ⏸️ Pendente     |
| Sistema de Preload | 3h                  | -     | ⏸️ Pendente     |
| Animações          | 3h                  | -     | ⏸️ Pendente     |
| Integração Hero    | 2h                  | -     | ⏸️ Pendente     |
| i18n               | 1h                  | -     | ⏸️ Pendente     |
| Responsividade     | 2h                  | -     | ⏸️ Pendente     |
| Testes A11y        | 2h                  | -     | ⏸️ Pendente     |
| Testes Performance | 2h                  | -     | ⏸️ Pendente     |
| **TOTAL**          | **21h (~1.5 dias)** | **-** | **⏸️ Pendente** |

---

## ✅ Status Final

- **Branch:** `feature/component-preloader`
- **PR:** #[número]
- **Status:** ⏸️ Não Iniciado / 🟡 Em Progresso / ✅ Concluído / 🔴 Bloqueado
- **Data de Merge:** [DD/MM/YYYY]
- **Deploy Preview:** [URL]

---

**Documento Criado em:** 29/01/2026
**Última Atualização:** 29/01/2026
**Versão:** 1.0
