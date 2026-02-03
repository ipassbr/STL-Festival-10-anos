# CLAUDE.md

Este arquivo fornece orientação ao Claude Code (claude.ai/code) ao trabalhar com código neste repositório.

## Visão Geral do Projeto

Landing page do 10º Aniversário do STL Festival - site estático multilíngue (PT-BR, EN, ES) construído com Astro 5.x, React 18 e Tailwind CSS. Data do evento: 6 de Junho de 2026.

## Comandos

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de dev em localhost:4321
npm run build            # Build com verificação de tipos (astro check && astro build)
npm run preview          # Preview do build de produção

# Qualidade de código
npm run type-check       # Verificação TypeScript (astro check)
npm run lint             # ESLint (máximo 0 warnings)
npm run lint:fix         # Auto-correção de problemas de lint
npm run format           # Formatar todos arquivos com Prettier
npm run format:check     # Verificar formatação sem modificar
```

## Arquitetura

### Arquitetura de Ilhas

- **Componentes Astro** (`.astro`) para conteúdo estático - sem JS no cliente
- **Componentes React** (`.tsx`) apenas para interatividade, usando diretivas de hidratação:
  - `client:load` - hidratação imediata
  - `client:idle` - hidrata quando o navegador estiver ocioso
  - `client:visible` - hidrata quando visível
  - `client:only="react"` - pula SSR completamente

### Internacionalização (Roteamento baseado em URL)

- Idioma padrão: Português (`/`) - oculto da URL
- Inglês: `/en/`
- Espanhol: `/es/`

Sistema de tradução em `src/i18n/`:

```typescript
import { getLangFromUrl, useTranslations } from '@i18n/utils';
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
// Uso: t('section.key')
```

Arquivos de tradução: `src/i18n/locales/{pt-BR,en,es}.json` (estrutura JSON aninhada)

### Aliases de Caminho (tsconfig.json)

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@i18n/*` → `src/i18n/*`
- `@layouts/*` → `src/layouts/*`
- `@styles/*` → `src/styles/*`

### Tokens de Design (tailwind.config.mjs)

Cores da marca: `stl-green`, `stl-gold`, `stl-red`, `stl-orange`, `stl-teal`, `stl-cream`, `stl-indigo`
Fontes customizadas: `font-jairo` (títulos), `font-superbusy` (destaque)

**⚠️ REGRA CRÍTICA: Cores Hardcoded são PROIBIDAS**

NUNCA use valores hexadecimais diretos no código. Sempre utilize os tokens do Tailwind:

```astro
<!-- ❌ ERRADO -->
<div class="bg-[#006a47]">
  <div style="color: #ff4d2d;">
    <!-- ✅ CORRETO -->
    <div class="bg-stl-green">
      <div class="text-stl-orange"></div>
    </div>
  </div>
</div>
```

Isso garante consistência visual e facilita manutenção do design system.

## Convenções de Código

### Nomenclatura de Arquivos

- Componentes: PascalCase (`Button.tsx`, `HeroSection.astro`)
- Utilitários: kebab-case (`api-client.ts`)
- Hooks: camelCase com prefixo `use` (`useCounter.ts`)

### TypeScript

- Preferir `interface` para tipos de objetos
- Evitar `any`, usar `unknown` quando necessário
- Sempre tipar props de componentes

## Git Hooks (Husky)

- **Pre-commit**: ESLint + Prettier em arquivos staged (bloqueia em erros)
- **Pre-push**: Verificação de tipos completa do projeto (bloqueia em erros de tipo)

Bypass (apenas emergência): `git commit --no-verify`

## Padrões Principais

### Tratamento de eventos otimizado para scroll

Usa RAF (requestAnimationFrame) com flag de ticking para performance:

```typescript
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      /* ... */ ticking = false;
    });
    ticking = true;
  }
});
```

### Animação do Preloader

Componente React com Framer Motion, respeita `prefers-reduced-motion`, instância única via flag global.

### Otimização de mídia

Variáveis de ambiente para URLs do Cloudinary com suporte a transformações.

## MCP (Model Context Protocol)

**SEMPRE** use as seguintes ferramentas MCP:

### Context7

- Use para buscar documentacao atualizada de Astro, React, Framer Motion, Tailwind
- Essencial para garantir uso correto de APIs
- Exemplo: "Como implementar whileInView com Framer Motion?"

### Serena

- Use para semantic retrieval de codigo
- Use para editing tools inteligentes
- Exemplo: "Onde esta definida a interface Artist?"

**Quando usar:**

- Buscar documentacao de bibliotecas/frameworks → **Context7**
- Buscar padroes de codigo semanticamente → **Serena**
- Realizar edicoes inteligentes de codigo → **Serena**

---

## Convencoes Git

### Conventional Commits

**SEMPRE** siga o padrao: `<type>(<scope>): <subject>`

**Tipos comuns:**

- `feat` - Nova funcionalidade
- `fix` - Correcao de bug
- `docs` - Documentacao
- `style` - Formatacao (nao afeta logica)
- `refactor` - Refatoracao de codigo
- `perf` - Melhoria de performance
- `test` - Testes
- `chore` - Tarefas de manutencao

**Escopos comuns:**

- `hero`, `lineup`, `preloader`, `i18n`, `config`, `types`, `utils`

**Exemplos:**

```bash
feat(hero): add video background with lazy loading
fix(lineup): resolve artist card hover animation bug
docs(readme): update setup instructions
perf(preloader): optimize asset preloading strategy
```

### ⚠️ IMPORTANTE: Caracteres Especiais

**NAO use caracteres especiais em mensagens de commit** (acentos, c cedilha, til):

❌ **Errado:** `feat(hero): adiciona vídeo de fundo`  
✅ **Correto:** `feat(hero): adiciona video de fundo`

**Caracteres a evitar:** `a e i o u a o a e o c n a` (com acentos)

### 🌐 Idioma dos Commits

**SEMPRE escreva commits em portugues brasileiro (pt-br)**:

✅ **Correto:** `feat(lineup): adiciona secao de artistas`  
❌ **Errado:** `feat(lineup): add artists section`

---
