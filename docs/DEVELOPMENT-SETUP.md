# 🛠️ Development Setup
## STL Festival - Ambiente de Desenvolvimento

**Versão:** 1.0  
**Data:** 28 de Janeiro de 2026  
**Status:** ✅ Aprovado

---

## 📋 Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Instalação](#instalação)
3. [Scripts Disponíveis](#scripts-disponíveis)
4. [ESLint](#eslint)
5. [Prettier](#prettier)
6. [Husky & Git Hooks](#husky--git-hooks)
7. [Estrutura de Arquivos](#estrutura-de-arquivos)
8. [Convenções de Código](#convenções-de-código)

---

## 🎯 Pré-requisitos

### Obrigatórios

- **Node.js:** >= 18.0.0
- **npm:** >= 9.0.0 (ou yarn/pnpm equivalente)
- **Git:** >= 2.0

### Recomendados

- **VS Code** com as seguintes extensões:
  - ESLint (`dbaeumer.vscode-eslint`)
  - Prettier (`esbenp.prettier-vscode`)
  - Astro (`astro-build.astro-vscode`)
  - Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`)
  - EditorConfig (`editorconfig.editorconfig`)

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/STL-Festival-10-anos.git
cd STL-Festival-10-anos
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o Husky

```bash
npm run prepare
```

Isso vai configurar automaticamente os Git Hooks.

### 4. Configure o VS Code (opcional mas recomendado)

Crie `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "astro"
  ],
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

---

## 🚀 Scripts Disponíveis

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento (porta 4321)
npm run dev

# Alternativa
npm start
```

### Build & Preview

```bash
# Build de produção (com type checking)
npm run build

# Preview do build local
npm run preview
```

### Qualidade de Código

```bash
# Type checking (Astro Check)
npm run type-check

# Lint (verifica erros)
npm run lint

# Lint e corrige automaticamente
npm run lint:fix

# Format (formata todos os arquivos)
npm run format

# Verifica formatação sem modificar
npm run format:check
```

---

## 🔍 ESLint

### Configuração

O ESLint está configurado para:

- ✅ TypeScript (`@typescript-eslint`)
- ✅ React (`eslint-plugin-react`, `eslint-plugin-react-hooks`)
- ✅ Astro (`eslint-plugin-astro`)
- ✅ Acessibilidade (`eslint-plugin-jsx-a11y`)

### Arquivo: `eslint.config.js`

Usando a nova configuração flat config (ESLint 9+).

### Regras Principais

#### TypeScript
- ❌ `no-unused-vars` - variáveis não utilizadas (exceto `_`)
- ⚠️ `no-explicit-any` - uso de `any`
- ⚠️ `no-non-null-assertion` - operador `!`

#### React
- ✅ React 18+ (não precisa importar React)
- ❌ `jsx-key` - keys em listas
- ❌ `rules-of-hooks` - regras de hooks
- ⚠️ `exhaustive-deps` - dependências de hooks

#### Acessibilidade (a11y)
- ❌ `alt-text` - textos alternativos obrigatórios
- ❌ `html-has-lang` - atributo lang no HTML
- ⚠️ `click-events-have-key-events` - eventos de teclado

### Uso

```bash
# Verificar erros
npm run lint

# Corrigir automaticamente
npm run lint:fix
```

### Ignorar avisos (quando necessário)

```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = await fetchData();
```

⚠️ **Use com moderação!** Apenas quando realmente necessário.

---

## 💅 Prettier

### Configuração

O Prettier está configurado com:

- **Estilo:** Single quotes, semicolons, 2 spaces
- **Print Width:** 80 caracteres
- **Plugins:**
  - `prettier-plugin-astro` - Formatação de arquivos `.astro`
  - `prettier-plugin-tailwindcss` - Ordena classes do Tailwind

### Arquivo: `.prettierrc.json`

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

### Uso

```bash
# Formatar todos os arquivos
npm run format

# Verificar se há arquivos mal formatados
npm run format:check
```

### Integração com VS Code

Com a extensão instalada e `formatOnSave` ativo, os arquivos são formatados automaticamente ao salvar.

---

## 🪝 Husky & Git Hooks

### O que é Husky?

Husky permite executar scripts automaticamente em eventos do Git (commit, push, etc.).

### Hooks Configurados

#### Pre-commit (`.husky/pre-commit`)

Executado **antes de cada commit**.

```bash
#!/usr/bin/env sh
npx lint-staged
```

**O que faz:**
- Executa ESLint nos arquivos modificados
- Executa Prettier nos arquivos modificados
- **Bloqueia o commit se houver erros**

#### Pre-push (`.husky/pre-push`)

Executado **antes de cada push**.

```bash
#!/usr/bin/env sh
npm run type-check
```

**O que faz:**
- Verifica tipos TypeScript em todo o projeto
- **Bloqueia o push se houver erros de tipo**

### Lint-staged

Configurado em `package.json`:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,astro}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,css,md,mdx}": [
      "prettier --write"
    ]
  }
}
```

**Vantagens:**
- ⚡ Rápido (apenas arquivos modificados)
- 🔧 Corrige automaticamente quando possível
- 🚫 Impede commits com erros

### Exemplo de Workflow

```bash
# 1. Você modifica arquivos
git add .

# 2. Tenta commitar
git commit -m "feat: add new component"

# 3. Husky executa automaticamente:
#    ✓ ESLint verifica os arquivos
#    ✓ Prettier formata os arquivos
#    ✓ Se tudo OK, commit é feito
#    ✗ Se houver erros, commit é bloqueado

# 4. Você tenta dar push
git push

# 5. Husky executa:
#    ✓ Type checking de todo o projeto
#    ✓ Se OK, push é feito
#    ✗ Se houver erros de tipo, push é bloqueado
```

### Bypass (apenas em emergências)

```bash
# Pular pre-commit (NÃO RECOMENDADO)
git commit --no-verify -m "emergency fix"

# Pular pre-push (NÃO RECOMENDADO)
git push --no-verify
```

⚠️ **Use apenas em casos extremos e corrija depois!**

---

## 📁 Estrutura de Arquivos

```
stl-festival-10-anos/
├── .husky/                    # Git hooks (Husky)
│   ├── pre-commit             # Hook de pre-commit
│   └── pre-push               # Hook de pre-push
├── src/
│   ├── components/            # Componentes React/Astro
│   ├── layouts/               # Layouts Astro
│   ├── pages/                 # Páginas Astro
│   ├── styles/                # Estilos globais
│   └── utils/                 # Utilitários TypeScript
├── public/                    # Assets estáticos
├── docs/                      # Documentação do projeto
├── .editorconfig              # Configuração do editor
├── .prettierrc.json           # Configuração do Prettier
├── .prettierignore            # Arquivos ignorados pelo Prettier
├── eslint.config.js           # Configuração do ESLint
├── tsconfig.json              # Configuração do TypeScript
├── astro.config.mjs           # Configuração do Astro
└── package.json               # Dependências e scripts
```

---

## 📝 Convenções de Código

### Naming Conventions

#### Arquivos

```
✅ Bom:
- Button.astro
- Button.tsx
- useCounter.ts
- api-client.ts
- hero-section.astro

❌ Evitar:
- button.astro (componentes com PascalCase)
- UseCounter.ts (hooks com camelCase)
- ApiClient.ts (utilitários com kebab-case)
```

#### Variáveis e Funções

```typescript
// ✅ camelCase para variáveis e funções
const userName = 'João';
function fetchData() {}

// ✅ PascalCase para componentes e classes
function Button() {}
class ApiClient {}

// ✅ SCREAMING_SNAKE_CASE para constantes
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRIES = 3;
```

### TypeScript

```typescript
// ✅ Preferir interfaces para objetos
interface User {
  id: string;
  name: string;
}

// ✅ Usar tipos para unions/intersections
type Status = 'idle' | 'loading' | 'success' | 'error';

// ✅ Evitar `any`, usar `unknown` quando necessário
function parse(json: string): unknown {
  return JSON.parse(json);
}

// ✅ Props de componentes sempre tipadas
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
```

### React & Astro

```typescript
// ✅ React components em arquivos .tsx
// src/components/Button.tsx
export function Button() {
  return <button>Click me</button>;
}

// ✅ Astro components em arquivos .astro
// src/components/Hero.astro
---
interface Props {
  title: string;
}
const { title } = Astro.props;
---
<section>
  <h1>{title}</h1>
</section>

// ✅ Usar client: directives apenas quando necessário
<Button client:load />      // Carrega imediatamente
<Button client:idle />      // Carrega quando idle
<Button client:visible />   // Carrega quando visível
```

### CSS & Tailwind

```astro
<!-- ✅ Preferir Tailwind classes -->
<div class="flex items-center justify-between p-4 bg-gray-100">
  <h2 class="text-2xl font-bold text-gray-900">Title</h2>
</div>

<!-- ✅ CSS customizado em <style> scoped -->
<style>
  .custom-class {
    /* Estilos específicos que Tailwind não cobre */
  }
</style>

<!-- ❌ Evitar inline styles -->
<div style="padding: 16px;">Bad</div>
```

### Commits (Conventional Commits)

```bash
# ✅ Formato correto
feat: add countdown component
fix: resolve mobile menu bug
docs: update development setup guide
style: format code with prettier
refactor: simplify api client logic
perf: optimize image loading
test: add button component tests
chore: update dependencies

# ✅ Com escopo
feat(hero): add video background
fix(navigation): resolve sticky header issue

# ✅ Breaking changes
feat!: redesign entire navigation

BREAKING CHANGE: Navigation props have changed
```

---

## 🐛 Troubleshooting

### ESLint não está funcionando

```bash
# Limpar cache e reinstalar
rm -rf node_modules
npm install

# Verificar se a extensão do VS Code está ativa
# Cmd/Ctrl + Shift + P -> "ESLint: Restart ESLint Server"
```

### Prettier não está formatando

```bash
# Verificar se é o formatter padrão no VS Code
# settings.json:
{
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}

# Forçar formatação
npm run format
```

### Husky hooks não estão executando

```bash
# Reinstalar hooks
rm -rf .husky
npm run prepare

# Verificar permissões (Linux/Mac)
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

### Erros de TypeScript no build

```bash
# Verificar erros localmente
npm run type-check

# Verificar se tsconfig.json está correto
# Verificar se todos os arquivos têm tipos corretos
```

---

## 📚 Recursos Adicionais

### Documentação Oficial

- [Astro](https://docs.astro.build)
- [ESLint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/)
- [Husky](https://typicode.github.io/husky/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Guias Relacionados

- [Conventional Commits](https://www.conventionalcommits.org/)
- [React Best Practices](https://react.dev/learn)
- [Accessibility (a11y)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## ✅ Checklist de Setup

- [ ] Node.js >= 18.0.0 instalado
- [ ] Git instalado e configurado
- [ ] Repositório clonado
- [ ] `npm install` executado com sucesso
- [ ] `npm run prepare` executado (Husky)
- [ ] VS Code com extensões instaladas
- [ ] `npm run dev` funcionando
- [ ] `npm run lint` sem erros
- [ ] `npm run format` executado
- [ ] Git commit testado (pre-commit hook funcionando)
- [ ] Git push testado (pre-push hook funcionando)

---

**Versão:** 1.0  
**Última atualização:** 28 de Janeiro de 2026  
**Mantido por:** Equipe STL Festival
