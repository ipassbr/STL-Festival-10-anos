# Scripts de Automação

Este diretório contém scripts para automatizar tarefas comuns do projeto.

## 📋 create-pr.sh

Script automatizado para criar Pull Requests técnicas com issues associadas no GitHub.

### 🎯 O que o script faz:

1. **Analisa o repositório**
   - Verifica branch atual
   - Lista commits desde develop
   - Identifica arquivos modificados por tipo
   - Detecta seções afetadas

2. **Gerencia commits**
   - Pergunta se deseja commitar mudanças pendentes
   - Valida formato Conventional Commits
   - Faz push automático da branch

3. **Cria PR no GitHub**
   - Título baseado no último commit
   - Descrição técnica detalhada com:
     - Resumo de mudanças
     - Estatísticas de arquivos
     - Checklist completo de qualidade
     - Lista de commits incluídos

4. **Cria issues relacionadas (automaticamente)**
   - 🔍 **Code Review**: Para branches com 3+ commits
   - 🧪 **Testes**: Para mudanças em React/TypeScript
   - 📚 **Documentação**: Para branches com 2+ commits
   - ⚡ **Performance**: Para mudanças em múltiplos componentes

### 📦 Pré-requisitos

1. **GitHub CLI instalado**

   ```bash
   # Ubuntu/Debian
   sudo apt install gh

   # macOS
   brew install gh

   # Arch Linux
   sudo pacman -S github-cli
   ```

2. **Autenticação configurada**

   ```bash
   gh auth login
   ```

3. **Estar em uma feature branch** (não main/develop)

### 🚀 Como usar

#### Opção 1: Via npm (recomendado)

```bash
npm run pr:create
```

#### Opção 2: Diretamente

```bash
./scripts/create-pr.sh
```

### 📝 Exemplo de uso

```bash
# 1. Você está em feature/tickets-section com mudanças não commitadas
$ npm run pr:create

🔍 Analisando mudanças no repositório...
📍 Branch atual: feature/tickets-section
⚠️  Há mudanças não commitadas. Deseja commitar agora? (y/n)
y

Arquivos modificados:
 M src/components/tickets/TicketCard.astro
?? assets/elementos-card/

Digite a mensagem do commit (formato: type(scope): message):
feat(tickets): adiciona elementos graficos aos cards

✅ Commit criado
📊 Analisando commits na branch...
Total de commits: 3

🚀 Fazendo push da nova branch...
📝 Gerando descrição da PR...
🎯 Criando Pull Request...
✅ PR criada com sucesso!
🔗 URL: https://github.com/user/repo/pull/123

📋 Criando issues relacionadas...
✅ Issue criada: https://github.com/user/repo/issues/124
✅ Issue criada: https://github.com/user/repo/issues/125
✅ Issue criada: https://github.com/user/repo/issues/126

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Processo concluído com sucesso!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Resumo:
  ✓ PR criada: https://github.com/user/repo/pull/123
  ✓ Issues criadas: 3
  ✓ Commits incluídos: 3
  ✓ Branch: feature/tickets-section

📌 Próximos passos:
  1. Aguardar Vercel criar o deploy preview
  2. Testar o preview deployment
  3. Solicitar code review
  4. Endereçar issues criadas
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 🎨 Estrutura da PR gerada

A PR criada inclui:

```markdown
## 📋 Resumo

Descrição da branch e contexto

## 🔧 Mudanças Técnicas

- Estatísticas de arquivos por tipo
- Seções afetadas
- Lista de commits

## ✅ Checklist Técnico

- Performance (Lighthouse, bundle size, imagens)
- Acessibilidade (WCAG AA, aria-labels, keyboard nav)
- Code Quality (ESLint, TypeScript, self-review)
- Design System (tokens CSS, tipografia, spacing)
- Islands & Hydration (client directives)

## 🧪 Testes

Checklist de browsers e devices

## 📸 Screenshots

Espaço para evidências visuais

## 🔗 Issues Relacionadas

Links automáticos para issues criadas
```

### 🏷️ Issues criadas automaticamente

#### 1. Code Review (quando 3+ commits)

```markdown
🔍 Code Review: feature/tickets-section

- [ ] Verificar lógica de negócio
- [ ] Validar tratamento de erros
- [ ] Confirmar testes adequados
- [ ] Revisar performance
- [ ] Validar acessibilidade
```

#### 2. Testes (quando há .tsx ou .ts)

```markdown
🧪 Adicionar testes para feature/tickets-section

- [ ] Testes unitários para componentes React
- [ ] Testes de integração
- [ ] Testes de acessibilidade
- [ ] Coverage ≥ 80%
```

#### 3. Documentação (quando 2+ commits)

```markdown
📚 Documentar mudanças de feature/tickets-section

- [ ] Atualizar README se necessário
- [ ] Documentar novos componentes
- [ ] Atualizar guia de contribuição
- [ ] Adicionar exemplos de uso
```

#### 4. Performance (quando 2+ .astro ou .tsx)

```markdown
⚡ Auditoria de performance para feature/tickets-section

- [ ] Lighthouse score ≥ 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Bundle size < 50KB gzipped
```

### 🔧 Troubleshooting

#### Erro: "gh command not found"

```bash
# Instale o GitHub CLI
sudo apt install gh # Ubuntu/Debian
brew install gh # macOS
```

#### Erro: "GitHub CLI não está autenticado"

```bash
gh auth login
# Siga as instruções no terminal
```

#### Erro: "Você está em main/develop"

```bash
# Crie uma feature branch primeiro
git checkout -b feature/minha-feature develop
```

#### Erro: "Permission denied"

```bash
# Torne o script executável
chmod +x scripts/create-pr.sh
```

### 🎯 Boas práticas

1. **Antes de executar:**
   - Certifique-se de estar em uma feature branch
   - Revise suas mudanças com `git status` e `git diff`
   - Valide que o código está funcionando

2. **Mensagens de commit:**
   - Use Conventional Commits: `type(scope): message`
   - Exemplos: `feat(tickets): adiciona card VIP`, `fix(header): corrige menu mobile`

3. **Após criar a PR:**
   - Aguarde o Vercel criar o preview
   - Teste o preview deployment
   - Revise o checklist da PR
   - Endereçe as issues criadas

### 📚 Referências

- [GitHub CLI Documentation](https://cli.github.com/manual/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)

### 🤝 Contribuindo

Para melhorar este script:

1. Faça suas mudanças em `scripts/create-pr.sh`
2. Teste localmente
3. Abra uma PR com suas melhorias
4. Documente mudanças neste README
