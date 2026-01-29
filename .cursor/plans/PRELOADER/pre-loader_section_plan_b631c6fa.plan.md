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

### RF-02: Animação de Progresso com Frase e Barra de Loader

- **Descrição:** Preloader deve exibir a frase progressivamente conforme o carregamento avança (texto aparece palavra por palavra ou letra por letra)
- **Eventos:** Deve disparar eventos `preloader-progress` com valor de 0-100% para comunicação com Hero Section
- **Barra de Loader:** Barra de progresso horizontal na parte inferior da tela, animando de 0% a 100% conforme carregamento
- **Sincronização:** Frase aparece progressivamente sincronizada com o progresso da barra de loader
- **User Story:** Como usuário, eu quero ver o progresso do carregamento através da exibição progressiva da frase inspiradora e da barra de loader
- **Prioridade:** 🔴 Must Have

### RF-03: Frase Inspiradora Centralizada

- **Descrição:** Frase inspiradora deve aparecer centralizada no preloader, exibida progressivamente conforme o carregamento
- **Frase PT-BR:** "Venha fazer parte da nossa História, conexão, música, natureza e sustentabilidade"
- **Frase EN:** "Come be part of our History, connection, music, nature and sustainability"
- **Frase ES:** "Ven a ser parte de nuestra Historia, conexión, música, naturaleza y sostenibilidad"
- **Tipografia:** Fonte simples e fina (sans-serif), branca sobre fundo preto
- **User Story:** Como usuário, eu quero ver uma mensagem inspiradora durante o carregamento que comunique os valores do festival
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

- `Preloader.astro` - Componente principal do preloader com design minimalista
  - Estrutura: Fundo preto, linhas decorativas, texto centralizado
  - Lógica: Gerenciamento de progresso e animação de texto progressivo

### Scripts TypeScript

- `src/scripts/preloader/preloaderManager.ts` - Gerenciamento de estado e eventos
- `src/scripts/preloader/assetPreloader.ts` - Preload de assets críticos
- `src/scripts/preloader/progressTracker.ts` - Rastreamento de progresso

### Arquivos de Estilo

- `src/styles/preloader.css` - Estilos do preloader conforme design system STL

**Nota Técnica:**

- Design minimalista permite implementação leve (sem dependências pesadas)
- Preferir CSS animations para animações simples (fade, opacity)
- JavaScript apenas para lógica de progresso e sincronização com eventos
- Componente Astro com JavaScript inline (não precisa React Island)
- Framer Motion apenas se necessário para animações complexas de texto progressivo

---

## 🎨 Assets e Dependências

### Imagens

- Nenhuma imagem necessária (design minimalista com texto apenas)

### Fontes

- Fonte sans-serif simples e fina para o texto (pode usar fonte do sistema ou fonte customizada leve)
- Sistema de fontes: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` (fallback)

### Conteúdo

- Frase inspiradora (PT-BR, EN, ES) - Adicionar em `src/i18n/locales/*.json`
  - **PT-BR:** "Venha fazer parte da nossa História, conexão, música, natureza e sustentabilidade"
  - **EN:** "Come be part of our History, connection, music, nature and sustainability"
  - **ES:** "Ven a ser parte de nuestra Historia, conexión, música, naturaleza y sostenibilidad"

### Dependências de Outras Seções

- Hero Section deve estar preparada para receber eventos (`preloader-progress`, `preloader-complete`) - ✅ Já implementado
- Sistema i18n já implementado (`src/i18n/`) - ✅ Pronto
- Design tokens já configurados (`src/styles/global.css`) - ✅ Pronto

### Dependências Técnicas

- Framer Motion (já instalado no projeto)
- TypeScript (já configurado)

---

## 🎨 Design Visual Detalhado

### Referência Visual

O preloader segue um design **minimalista e elegante**, inspirado em estética moderna e clean:

- **Fundo:** Preto sólido (`#000000`) ou azul índigo escuro (`#1e1876` do design system STL)
- **Estilo:** Minimalista, sem elementos desnecessários
- **Foco:** Texto centralizado como elemento principal

### Elementos Visuais

#### 1. Barra de Loader (Progress Bar)

- **Posicionamento:** Parte inferior da tela (`bottom: 0` ou `bottom: 2-4%` para espaçamento)
- **Estilo:**
  - Altura: `2px` a `4px` (fina e elegante)
  - Cor: Branco (`#FFFFFF`) ou cor do design system STL (ex: `#ff4d2d` - vermelho-alaranjado)
  - Largura inicial: `0%` (inicia vazia)
  - Largura final: `100%` (preenche conforme progresso)
  - Background: Opcional - linha sutil indicando o caminho completo (opacidade baixa)
- **Animação:**
  - Width anima de `0%` a `100%` conforme progresso do carregamento
  - Sincronizada com eventos `preloader-progress` (0-100%)
  - Transição suave (ease-out ou linear)

#### 2. Texto Centralizado

- **Posicionamento:** Centralizado vertical e horizontalmente (`center center`)
- **Conteúdo:** Frase inspiradora do STL Festival
- **Tipografia:**
  - Fonte: Sistema sans-serif (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
  - Peso: `300` (light/thin) ou `400` (regular) - deve ser fino e elegante
  - Tamanho: Responsivo usando `clamp(1rem, 4vw, 1.5rem)` ou similar
  - Cor: Branco (`#FFFFFF`)
  - Alinhamento: `center`
- **Espaçamento:** Padding adequado para não tocar na barra de loader inferior

#### 3. Fundo

- **Cor:** Preto sólido (`#000000`) - opção preferida para máximo contraste
- **Alternativa:** Azul índigo escuro (`#1e1876`) do design system STL
- **Cobertura:** Full viewport (`position: fixed`, `inset: 0`)

### Hierarquia Visual

1. **Fundo preto** (camada base)
2. **Texto** (elemento principal, foco visual - centralizado)
3. **Barra de loader** (indicador de progresso - parte inferior)

---

## 🎬 Animações e Interações

### Design Visual Minimalista

- **Fundo:** Preto sólido (`#000000` ou `#1e1876` - azul índigo escuro do design system)
- **Barra de loader:** Barra horizontal na parte inferior:
  - Posicionamento: `bottom: 0` ou `bottom: 2-4%` (com pequeno espaçamento)
  - Altura: `2px` a `4px` (fina e elegante)
  - Cor: Branco (`#FFFFFF`) ou cor do design system (`#ff4d2d` - vermelho-alaranjado)
  - Largura: Anima de `0%` a `100%` conforme progresso
- **Texto centralizado:** Vertical e horizontalmente no centro da tela

### Animações de Entrada

- Fade in do preloader (0ms - instantâneo ao carregar página)
- Barra de loader aparece imediatamente (visível desde o início, mas com largura 0%)
- Texto inicia oculto ou com opacidade muito baixa

### Animações de Progresso

- **Barra de loader:**
  - Largura anima de `0%` a `100%` conforme progresso (0-100%)
  - Sincronizada com eventos `preloader-progress`
  - Transição suave (ease-out ou linear)
- **Texto progressivo:** Frase aparece progressivamente conforme carregamento:
  - Opção 1: Palavra por palavra (cada palavra aparece com fade in conforme progresso)
  - Opção 2: Letra por letra (typewriter effect)
  - Opção 3: Texto completo com fade in gradual baseado no progresso (0-100%)
- **Sincronização:** Progresso do texto sincronizado com a barra de loader e eventos `preloader-progress`
- **Efeito visual:** Texto branco fino, elegante, sem distrações. Barra de loader discreta na parte inferior

### Animações de Saída

- Fade out suave do texto (300-500ms ease-out)
- Fade out da barra de loader (200ms)
- Fade out do fundo (300-500ms ease-out)
- Sequência: Texto → Barra de loader → Fundo (stagger animation)

### Transições

- Transição para Hero Section sem "flash" ou "jump"
- Hero Section aparece apenas após preloader completamente oculto

**Biblioteca:** Framer Motion (já decidido no stack)

**Exemplo de Estrutura CSS:**

```css
.preloader {
  position: fixed;
  inset: 0;
  background: #000000; /* ou #1e1876 (azul índigo escuro) */
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader__line {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: #ffffff;
}

.preloader__line--top {
  top: 5%;
}

.preloader__line--bottom {
  bottom: 5%;
}

.preloader__text {
  color: #ffffff;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 300; /* Fino */
  font-size: clamp(1rem, 4vw, 1.5rem);
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.preloader__text.visible {
  opacity: 1;
}
```

**Exemplo de Animação de Texto Progressivo (JavaScript):**

```typescript
// Mostrar texto progressivamente baseado no progresso (0-100%)
function updateTextProgress(progress: number) {
  const text =
    'Venha fazer parte da nossa História, conexão, música, natureza e sustentabilidade';
  const words = text.split(' ');
  const visibleWords = Math.floor((progress / 100) * words.length);

  return words.slice(0, visibleWords).join(' ');
}
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

### Issue #X: [Pre-loader] Implementação do Design Minimalista

- **Descrição:** Implementar design minimalista com fundo preto, barra de loader inferior e frase inspiradora
- **Tarefas:**
  - Criar estrutura HTML/CSS do preloader (fundo preto, barra de loader, texto)
  - Implementar barra de loader horizontal na parte inferior (altura 2-4px)
  - Centralizar texto vertical e horizontalmente
  - Aplicar tipografia simples e fina (sans-serif)
  - Integrar com design system STL (cores: preto ou azul índigo escuro, barra branca ou vermelho-alaranjado)
  - Animar largura da barra de 0% a 100% conforme progresso
  - Testar visual em diferentes tamanhos de tela
- **Tempo:** 3 horas

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

### Issue #X: [Pre-loader] Animações de Texto Progressivo e Barra de Loader

- **Descrição:** Implementar animação de texto progressivo e barra de loader sincronizadas
- **Tarefas:**
  - Animação de entrada: fade in do preloader e barra de loader (largura 0%)
  - Animação de progresso da barra: largura anima de 0% a 100% conforme eventos `preloader-progress`
  - Animação de progresso do texto: frase aparece progressivamente (palavra por palavra ou letra por letra)
  - Sincronizar progresso do texto com a barra de loader e eventos `preloader-progress` (0-100%)
  - Animação de saída: fade out suave (texto → barra de loader → fundo)
  - Integrar com `prefers-reduced-motion` (simplificar animações)
  - Otimizar performance (CSS animations preferidas sobre JS quando possível)
- **Tempo:** 4 horas

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
  - Ajustar tamanho da fonte do texto proporcionalmente (usar clamp())
  - Validar posicionamento da barra de loader em todos os tamanhos
  - Validar legibilidade do texto em diferentes resoluções
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
- Frase inspiradora exibida centralizada
- Texto aparece progressivamente conforme carregamento (palavra por palavra ou letra por letra)
- Barra de loader visível na parte inferior, animando de 0% a 100%
- Progresso visual sincronizado: texto progressivo + barra de loader sincronizados com carregamento real
- Eventos `preloader-progress` e `preloader-complete` disparados corretamente
- Transição suave para Hero Section (sem flash)
- Preload de assets críticos funcionando
- Timeout de segurança implementado (5-8s)
- Sem erros no console

### Design

- **Fundo:** Preto sólido ou azul índigo escuro (`#1e1876` do design system)
- **Barra de loader:** Barra horizontal fina (2-4px) na parte inferior, branca ou vermelho-alaranjado (`#ff4d2d`)
- **Texto:** Fonte sans-serif simples e fina, branca, centralizada vertical e horizontalmente
- **Frase:** "Venha fazer parte da nossa História, conexão, música, natureza e sustentabilidade" (PT-BR)
- **Tipografia:** Sistema de fontes leve (não Jairo ou Superbusy - muito pesadas para este design minimalista)
- **Espaçamento:** Texto centralizado, barra de loader na parte inferior (bottom: 0 ou 2-4%)
- **Animações:** Suaves, elegantes, sem distrações (fade in/out, texto progressivo, barra de loader animada)

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
- Texto responsivo (tamanho de fonte adaptável)
- Linhas decorativas posicionadas corretamente em todos os tamanhos
- Animações funcionam em todos os dispositivos
- Texto legível em todas as resoluções

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
| Design Minimalista | 3h                  | -     | ⏸️ Pendente     |
| Sistema de Preload | 3h                  | -     | ⏸️ Pendente     |
| Animações de Texto | 4h                  | -     | ⏸️ Pendente     |
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
**Versão:** 1.1

**Mudanças na Versão 1.1:**

- Atualizado design para estilo minimalista (fundo preto, barra de loader inferior, texto centralizado)
- Removido logo STL, adicionada frase inspiradora progressiva
- Removidas linhas decorativas superior e inferior
- Adicionada barra de loader na parte inferior (anima de 0% a 100%)
- Especificado design visual detalhado (barra de progresso, tipografia fina)
- Atualizado animações para texto progressivo sincronizado com barra de loader
- Adicionadas traduções da frase (PT-BR, EN, ES)
