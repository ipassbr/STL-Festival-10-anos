---
name: tailwind-patterns
description: Tailwind CSS v4 principles. CSS-first configuration, container queries, modern patterns, design token architecture.
allowed-tools: Read, Write, Edit, Glob, Grep
---

# Padrões Tailwind CSS (v4 - 2025)

> CSS utilitário moderno com configuração CSS-nativa.

---

## 1. Arquitetura do Tailwind v4

### O que Mudou do v3

| v3 (Legacy)          | v4 (Atual)                       |
| -------------------- | -------------------------------- |
| `tailwind.config.js` | Diretiva `@theme` baseada em CSS |
| Plugin PostCSS       | Oxide engine (10x mais rápido)   |
| Modo JIT             | Nativo, sempre ativo             |
| Sistema de plugins   | Features CSS-nativas             |
| Diretiva `@apply`    | Ainda funciona, desencorajado    |

### Conceitos-chave do v4

| Conceito           | Descrição                                     |
| ------------------ | --------------------------------------------- |
| **CSS-first**      | Configuração em CSS, não JavaScript           |
| **Oxide Engine**   | Compilador baseado em Rust, muito mais rápido |
| **Nesting Nativo** | CSS nesting sem PostCSS                       |
| **CSS Variables**  | Todos os tokens expostos como vars `--*`      |

---

## 2. Configuração Baseada em CSS

### Definição do Tema

```
@theme {
  /* Cores - use nomes semânticos */
  --color-primary: oklch(0.7 0.15 250);
  --color-surface: oklch(0.98 0 0);
  --color-surface-dark: oklch(0.15 0 0);

  /* Escala de espaçamento */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;

  /* Tipografia */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Quando Estender vs Sobrescrever

| Ação                  | Quando usar                                           |
| --------------------- | ----------------------------------------------------- |
| **Estender**          | Adicionando novos valores ao lado dos padrões         |
| **Sobrescrever**      | Substituindo a escala padrão inteiramente             |
| **Tokens semânticos** | Nomenclatura específica do projeto (primary, surface) |

---

## 3. Container Queries (v4 Nativo)

### Breakpoint vs Container

| Tipo                         | Responde a              |
| ---------------------------- | ----------------------- |
| **Breakpoint** (`md:`)       | Largura do viewport     |
| **Container** (`@container`) | Largura do elemento pai |

### Uso de Container Query

| Padrão                  | Classes                               |
| ----------------------- | ------------------------------------- |
| Definir container       | `@container` no pai                   |
| Breakpoint do container | `@sm:`, `@md:`, `@lg:` nos filhos     |
| Containers nomeados     | `@container/card` para especificidade |

### Quando Usar

| Cenário                   | Use                                          |
| ------------------------- | -------------------------------------------- |
| Layouts da página         | Breakpoints do viewport                      |
| Responsivo no componente  | Container queries                            |
| Componentes reutilizáveis | Container queries (independente de contexto) |

---

## 4. Design Responsivo

### Sistema de Breakpoints

| Prefixo  | Largura Mínima | Alvo                             |
| -------- | -------------- | -------------------------------- |
| (nenhum) | 0px            | Base mobile-first                |
| `sm:`    | 640px          | Telefone grande / tablet pequeno |
| `md:`    | 768px          | Tablet                           |
| `lg:`    | 1024px         | Laptop                           |
| `xl:`    | 1280px         | Desktop                          |
| `2xl:`   | 1536px         | Desktop grande                   |

### Princípio Mobile-First

1. Escreva estilos mobile primeiro (sem prefixo)
2. Adicione overrides para telas maiores com prefixos
3. Exemplo: `w-full md:w-1/2 lg:w-1/3`

---

## 5. Modo Escuro

### Estratégias de Configuração

| Método     | Comportamento                | Quando usar             |
| ---------- | ---------------------------- | ----------------------- |
| `class`    | Classe `.dark` alterna       | Seletor de tema manual  |
| `media`    | Segue preferência do sistema | Sem controle do usuário |
| `selector` | Seletor customizado (v4)     | Theming complexo        |

### Padrão Modo Escuro

| Elemento | Claro             | Escuro                 |
| -------- | ----------------- | ---------------------- |
| Fundo    | `bg-white`        | `dark:bg-zinc-900`     |
| Texto    | `text-zinc-900`   | `dark:text-zinc-100`   |
| Bordas   | `border-zinc-200` | `dark:border-zinc-700` |

---

## 6. Padrões de Layout Modernos

### Padrões Flexbox

| Padrão               | Classes                             |
| -------------------- | ----------------------------------- |
| Centro (ambos eixos) | `flex items-center justify-center`  |
| Pilha vertical       | `flex flex-col gap-4`               |
| Linha horizontal     | `flex gap-4`                        |
| Espaço entre         | `flex justify-between items-center` |
| Grid com wrap        | `flex flex-wrap gap-4`              |

### Padrões Grid

| Padrão              | Classes                                               |
| ------------------- | ----------------------------------------------------- |
| Auto-fit responsivo | `grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]` |
| Assimétrico (Bento) | `grid grid-cols-3 grid-rows-2` com spans              |
| Layout com sidebar  | `grid grid-cols-[auto_1fr]`                           |

> **Nota:** Prefira layouts assimétricos/Bento aos grids de 3 colunas simétricos.

---

## 7. Sistema de Cores Moderno

### OKLCH vs RGB/HSL

| Formato   | Vantagem                                     |
| --------- | -------------------------------------------- |
| **OKLCH** | Perceptualmente uniforme, melhor para design |
| **HSL**   | Hue/saturação intuitiva                      |
| **RGB**   | Compatibilidade legacy                       |

### Arquitetura de Tokens de Cor

| Camada         | Exemplo           | Propósito                         |
| -------------- | ----------------- | --------------------------------- |
| **Primitiva**  | `--blue-500`      | Valores brutos de cor             |
| **Semântica**  | `--color-primary` | Nomenclatura baseada em propósito |
| **Componente** | `--button-bg`     | Específico ao componente          |

---

## 8. Sistema de Tipografia

### Padrão de Font Stack

| Tipo    | Recomendado                                |
| ------- | ------------------------------------------ |
| Sans    | `'Inter', 'SF Pro', system-ui, sans-serif` |
| Mono    | `'JetBrains Mono', 'Fira Code', monospace` |
| Display | `'Outfit', 'Poppins', sans-serif`          |

### Escala de Tipos

| Classe      | Tamanho  | Uso               |
| ----------- | -------- | ----------------- |
| `text-xs`   | 0.75rem  | Labels, legendas  |
| `text-sm`   | 0.875rem | Texto secundário  |
| `text-base` | 1rem     | Texto do corpo    |
| `text-lg`   | 1.125rem | Texto de destaque |
| `text-xl`+  | 1.25rem+ | Headings          |

---

## 9. Animações e Transições

### Animações Built-in

| Classe           | Efeito                   |
| ---------------- | ------------------------ |
| `animate-spin`   | Rotação contínua         |
| `animate-ping`   | Pulso de atenção         |
| `animate-pulse`  | Pulso sutil de opacidade |
| `animate-bounce` | Efeito de pulo           |

### Padrões de Transição

| Padrão                | Classes                                |
| --------------------- | -------------------------------------- |
| Todas as propriedades | `transition-all duration-200`          |
| Específico            | `transition-colors duration-150`       |
| Com easing            | `ease-out` ou `ease-in-out`            |
| Efeito hover          | `hover:scale-105 transition-transform` |

---

## 10. Extração de Componentes

### Quando Extrair

| Sinal                                | Ação                 |
| ------------------------------------ | -------------------- |
| Mesma combinação de classes 3+ vezes | Extrair componente   |
| Variantes de estado complexas        | Extrair componente   |
| Elemento do design system            | Extrair + documentar |

### Métodos de Extração

| Método                   | Quando usar                 |
| ------------------------ | --------------------------- |
| **Componente React/Vue** | Dinâmico, JS necessário     |
| **@apply no CSS**        | Estático, sem JS necessário |
| **Design tokens**        | Valores reutilizáveis       |

---

## 11. Anti-Padrões

| Não faça                          | Faça                                  |
| --------------------------------- | ------------------------------------- |
| Valores arbitrários em todo lugar | Use a escala do design system         |
| `!important`                      | Corrija a especificidade corretamente |
| `style=` inline                   | Use utilitários                       |
| Duplicar listas de classes longas | Extraia componente                    |
| Misturar config v3 com v4         | Migre completamente para CSS-first    |
| Usar `@apply` excessivamente      | Prefira componentes                   |

---

## 12. Princípios de Performance

| Princípio            | Implementação                   |
| -------------------- | ------------------------------- |
| **Purge automático** | Automático no v4                |
| **Evitar dinamismo** | Sem classes em template strings |
| **Use Oxide**        | Padrão no v4, 10x mais rápido   |
| **Cache de builds**  | Caching no CI/CD                |

---

> **Lembre-se:** Tailwind v4 é CSS-first. Abrace CSS variables, container queries e features nativas. O arquivo de configuração agora é opcional.
