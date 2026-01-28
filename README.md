# 🎉 STL Festival - 10ª Edição

Landing page oficial para celebração dos 10 anos do **STL Festival**.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![Astro](https://img.shields.io/badge/astro-5.x-ff5d01)
![TypeScript](https://img.shields.io/badge/typescript-5.7-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 Sobre o Projeto

Landing page moderna e performática para o **STL Festival**, evento que celebra sua 10ª edição reunindo música, cultura e diversidade.

**Data do Evento:** 06 de Junho de 2026
**Local:** [A definir]

### ✨ Destaques

- 🎨 **Design System** personalizado com cores oficiais
- ⚡ **Performance excepcional** (Lighthouse 90+)
- 🌍 **Multilíngue** (PT-BR, EN, ES)
- ♿ **Acessível** (WCAG 2.1 AA)
- 🎭 **Animações suaves** com Framer Motion
- 📱 **100% Responsivo** (mobile-first)

---

## 🚀 Quick Start

### Pré-requisitos

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/STL-Festival-10-anos.git
cd STL-Festival-10-anos

# Instale as dependências
npm install

# Configure o Husky (Git hooks)
npm run prepare

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: [http://localhost:4321](http://localhost:4321)

---

## 📦 Stack Tecnológico

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| **Astro** | 5.x | Framework principal (Islands Architecture) |
| **React** | 18.3+ | Componentes interativos |
| **TypeScript** | 5.7 | Type safety |
| **Tailwind CSS** | 3.4+ | Estilização |
| **Framer Motion** | 11.x | Animações |
| **ESLint** | 9.x | Qualidade de código |
| **Prettier** | 3.x | Formatação |
| **Husky** | 9.x | Git hooks |

---

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm start            # Alias para dev

# Build & Preview
npm run build        # Build de produção (com type checking)
npm run preview      # Preview do build local

# Qualidade de Código
npm run type-check   # Verificar tipos TypeScript
npm run lint         # Verificar erros de lint
npm run lint:fix     # Corrigir erros de lint automaticamente
npm run format       # Formatar todos os arquivos
npm run format:check # Verificar formatação (sem modificar)
```

---

## 🛠️ Configuração do Ambiente

### ESLint

Configurado para:
- ✅ TypeScript
- ✅ React + React Hooks
- ✅ Astro
- ✅ Acessibilidade (jsx-a11y)

### Prettier

Formatação automática com:
- ✅ Plugin para Astro
- ✅ Plugin para Tailwind CSS
- ✅ Single quotes, 2 spaces, trailing commas

### Husky (Git Hooks)

**Pre-commit:**
- Executa ESLint + Prettier nos arquivos modificados
- Bloqueia commit se houver erros

**Pre-push:**
- Executa type checking de todo o projeto
- Bloqueia push se houver erros de tipo

### VS Code (Recomendado)

Extensões recomendadas:
- ESLint
- Prettier
- Astro
- Tailwind CSS IntelliSense
- EditorConfig

---

## 📚 Documentação

### Documentação Completa

Toda a documentação do projeto está em [`docs/`](./docs/):

- **[Índice Geral](./docs/00-INDICE.md.md)** - Navegação da documentação
- **[Vision & Problem Statement](./docs/01-VISION-PROBLEM-STATEMENT.md)** - Visão do projeto
- **[Briefing](./docs/02-BRIEFING.md)** - Contexto completo
- **[PRD](./docs/03-PRD.md)** - Product Requirements Document
- **[Tech Stack Analysis](./docs/04-TECH-STACK-ANALYSIS.md)** - Análise técnica
- **[Design System](./docs/05-DESIGN-SYSTEM.md)** - Sistema de design
- **[Diagrams](./docs/06-DIAGRAMS.md)** - Diagramas do sistema
- **[i18n](./docs/07-INTERNATIONALIZATION.md)** - Internacionalização
- **[Development Setup](./docs/DEVELOPMENT-SETUP.md)** - Guia de configuração

### Guias Rápidos

- 🛠️ **[Setup do Ambiente](./docs/DEVELOPMENT-SETUP.md)** - Como configurar seu ambiente
- 🎨 **[Design Tokens](./docs/05-DESIGN-SYSTEM.md)** - Cores, tipografia, espaçamento
- 🌍 **[Adicionar Idioma](./docs/07-INTERNATIONALIZATION.md)** - Como adicionar novos idiomas

---

## 🗂️ Estrutura do Projeto

```
stl-festival-10-anos/
├── .github/              # GitHub Actions (CI/CD)
├── .husky/               # Git hooks (Husky)
├── docs/                 # Documentação completa
├── public/               # Assets estáticos
├── src/
│   ├── components/       # Componentes React/Astro
│   ├── layouts/          # Layouts Astro
│   ├── pages/            # Páginas (rotas)
│   ├── styles/           # Estilos globais
│   └── utils/            # Utilitários TypeScript
├── .editorconfig         # Configuração do editor
├── .gitattributes        # Git attributes (line endings)
├── .gitignore            # Arquivos ignorados
├── .prettierrc.json      # Configuração do Prettier
├── astro.config.mjs      # Configuração do Astro
├── eslint.config.js      # Configuração do ESLint
├── package.json          # Dependências e scripts
├── tailwind.config.mjs   # Configuração do Tailwind
└── tsconfig.json         # Configuração do TypeScript
```

---

## 🎯 Features Principais

### Seções da Landing Page

1. **Hero** - Impacto visual inicial + CTA
2. **Lineup** - Artistas confirmados
3. **Setores** - Pista, Camarote, Camarote Premium
4. **Sobre o Festival** - História de 10 anos
5. **Modalidades de Ingresso** - Inteira, Meia, Solidário
6. **Pilares** - Acessibilidade, Sustentabilidade, Diversidade
7. **Experiências Exclusivas** - Tirolesa, Translado
8. **STL Valley** - Hospedagem exclusiva
9. **iPass** - Sistema de ingresso digital
10. **FAQ** - Perguntas frequentes
11. **Footer** - Links e CTAs finais

### Componentes Especiais

- ⏳ **Preloader customizado** - Experiência de entrada única
- 🎨 **Seletor de idioma** - PT-BR, EN, ES
- ♿ **Menu de acessibilidade** - Controles de fonte, contraste, etc.
- 🎬 **Animações scroll-based** - Scroll reveal, parallax

---

## 🧪 Testes & Qualidade

### Métricas Alvo

| Métrica | Target |
|---------|--------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 100 |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

### Code Quality

- ✅ ESLint configurado (max 0 warnings)
- ✅ Prettier configurado
- ✅ TypeScript strict mode
- ✅ Git hooks (pre-commit, pre-push)
- ✅ CI/CD com GitHub Actions

---

## 🤝 Contribuindo

### Workflow

1. Clone o repositório
2. Crie uma branch: `git checkout -b feature/minha-feature`
3. Faça suas alterações
4. Commit seguindo [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` nova funcionalidade
   - `fix:` correção de bug
   - `docs:` documentação
   - `style:` formatação
   - `refactor:` refatoração
   - `perf:` performance
   - `test:` testes
5. Push: `git push origin feature/minha-feature`
6. Abra um Pull Request

### Conventional Commits

```bash
# Exemplos
git commit -m "feat: add countdown component"
git commit -m "fix: resolve mobile menu bug"
git commit -m "docs: update README"
git commit -m "style: format code with prettier"
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 📞 Contato

**STL Festival**
- Website: [em breve]
- Instagram: [@stlfestival](https://instagram.com/stlfestival)
- Email: contato@stlfestival.com.br

---

**Desenvolvido com 💜 para a 10ª edição do STL Festival**
