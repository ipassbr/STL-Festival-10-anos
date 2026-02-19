# Exemplos de Uso do create-pr.sh

Este documento mostra exemplos práticos de uso do script `create-pr.sh` em diferentes cenários.

## 📚 Índice

1. [Cenário 1: Feature completa com múltiplos commits](#cenário-1-feature-completa-com-múltiplos-commits)
2. [Cenário 2: Bugfix simples](#cenário-2-bugfix-simples)
3. [Cenário 3: Refatoração de código](#cenário-3-refatoração-de-código)
4. [Cenário 4: Primeira PR de uma nova feature](#cenário-4-primeira-pr-de-uma-nova-feature)
5. [Cenário 5: Hotfix urgente](#cenário-5-hotfix-urgente)

---

## Cenário 1: Feature completa com múltiplos commits

**Contexto:** Você implementou toda a seção de tickets com 5 commits.

```bash
# Estado atual
$ git status
On branch feature/tickets-section
Changes not staged for commit:
  modified:   src/components/tickets/TicketCard.astro
  modified:   src/i18n/locales/pt-BR.json

Untracked files:
  assets/elementos-card/

# Executar script
$ npm run pr:create

🔍 Analisando mudanças no repositório...
📍 Branch atual: feature/tickets-section
⚠️  Há mudanças não commitadas. Deseja commitar agora? (y/n)
y

Arquivos modificados:
 M src/components/tickets/TicketCard.astro
 M src/i18n/locales/pt-BR.json
?? assets/elementos-card/

Digite a mensagem do commit (formato: type(scope): message):
feat(tickets): adiciona elementos graficos finais aos cards

✅ Commit criado
📊 Analisando commits na branch...
Total de commits: 6

123abc feat(tickets): adiciona elementos graficos finais aos cards
456def feat(tickets): implementa card Camarote Premium
789ghi feat(tickets): adiciona card VIP
012jkl feat(tickets): adiciona card Pista
345mno feat(tickets): cria estrutura base dos cards
678pqr feat(tickets): configura secao de ingressos

📁 Arquivos modificados:
A       assets/elementos-card/CARROSSEL-SETORES_03.png
A       assets/elementos-card/CARROSSEL-SETORES_04.png
A       assets/elementos-card/CARROSSEL-SETORES_05.png
M       src/components/tickets/TicketCard.astro
M       src/components/tickets/TicketCardCamarote.astro
M       src/components/tickets/TicketCardPista.astro

🚀 Fazendo push da nova branch...
📝 Gerando descrição da PR...

📋 Resumo
- 📄 Astro: 3 arquivo(s)
- 🎨 CSS: 1 arquivo(s)
- 📦 JSON: 1 arquivo(s)

🎯 Criando Pull Request...
✅ PR criada com sucesso!
🔗 URL: https://github.com/ipassbr/STL-Festival-10-anos/pull/42

📋 Criando issues relacionadas...
Criando issue: Code Review Detalhado
✅ Issue criada: https://github.com/ipassbr/STL-Festival-10-anos/issues/43

Criando issue: Cobertura de Testes
✅ Issue criada: https://github.com/ipassbr/STL-Festival-10-anos/issues/44

Criando issue: Documentação
✅ Issue criada: https://github.com/ipassbr/STL-Festival-10-anos/issues/45

Criando issue: Auditoria de Performance
✅ Issue criada: https://github.com/ipassbr/STL-Festival-10-anos/issues/46

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Processo concluído com sucesso!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Resumo:
  ✓ PR criada: https://github.com/ipassbr/STL-Festival-10-anos/pull/42
  ✓ Issues criadas: 4
  ✓ Commits incluídos: 6
  ✓ Branch: feature/tickets-section
```

**Resultado:**

- ✅ 1 PR criada com descrição completa
- ✅ 4 issues criadas (Code Review, Testes, Documentação, Performance)
- ✅ Todas linkadas automaticamente

---

## Cenário 2: Bugfix simples

**Contexto:** Você corrigiu um bug no menu mobile.

```bash
# Estado atual
$ git status
On branch bugfix/mobile-menu-zindex
Changes not staged for commit:
  modified:   src/styles/header.css

# Executar script
$ npm run pr:create

🔍 Analisando mudanças no repositório...
📍 Branch atual: bugfix/mobile-menu-zindex
⚠️  Há mudanças não commitadas. Deseja commitar agora? (y/n)
y

Digite a mensagem do commit (formato: type(scope): message):
fix(header): corrige z-index do menu mobile

✅ Commit criado
📊 Analisando commits na branch...
Total de commits: 1

abc123 fix(header): corrige z-index do menu mobile

📁 Arquivos modificados:
M       src/styles/header.css

🎯 Criando Pull Request...
✅ PR criada com sucesso!
🔗 URL: https://github.com/ipassbr/STL-Festival-10-anos/pull/47

📋 Criando issues relacionadas...
(Nenhuma issue criada - apenas 1 commit)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Processo concluído com sucesso!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Resumo:
  ✓ PR criada: https://github.com/ipassbr/STL-Festival-10-anos/pull/47
  ✓ Issues criadas: 0
  ✓ Commits incluídos: 1
  ✓ Branch: bugfix/mobile-menu-zindex
```

**Resultado:**

- ✅ 1 PR criada (bugfix simples)
- ✅ Nenhuma issue criada (apenas 1 commit)

---

## Cenário 3: Refatoração de código

**Contexto:** Você refatorou componentes React para usar hooks customizados.

```bash
# Estado atual
$ git log develop..HEAD --oneline
def456 refactor(hooks): extrai logica de countdown para custom hook
ghi789 refactor(components): remove duplicacao em cards
jkl012 refactor(utils): centraliza validacao de datas

# Executar script (sem mudanças pendentes)
$ npm run pr:create

🔍 Analisando mudanças no repositório...
📍 Branch atual: refactor/custom-hooks
✅ Nenhuma mudança pendente
📊 Analisando commits na branch...
Total de commits: 3

def456 refactor(hooks): extrai logica de countdown para custom hook
ghi789 refactor(components): remove duplicacao em cards
jkl012 refactor(utils): centraliza validacao de datas

📁 Arquivos modificados:
A       src/hooks/useCountdown.ts
M       src/components/islands/CountdownTimer.tsx
M       src/components/tickets/TicketCard.astro
M       src/utils/date-helpers.ts

🎯 Criando Pull Request...
✅ PR criada com sucesso!
🔗 URL: https://github.com/ipassbr/STL-Festival-10-anos/pull/48

📋 Criando issues relacionadas...
Criando issue: Code Review Detalhado
✅ Issue criada: https://github.com/ipassbr/STL-Festival-10-anos/issues/49

Criando issue: Cobertura de Testes
✅ Issue criada: https://github.com/ipassbr/STL-Festival-10-anos/issues/50

Criando issue: Documentação
✅ Issue criada: https://github.com/ipassbr/STL-Festival-10-anos/issues/51

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Processo concluído com sucesso!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Resumo:
  ✓ PR criada: https://github.com/ipassbr/STL-Festival-10-anos/pull/48
  ✓ Issues criadas: 3
  ✓ Commits incluídos: 3
  ✓ Branch: refactor/custom-hooks
```

**Resultado:**

- ✅ 1 PR criada (refatoração)
- ✅ 3 issues criadas (Code Review, Testes, Documentação)

---

## Cenário 4: Primeira PR de uma nova feature

**Contexto:** Você está criando uma PR pela primeira vez para uma nova branch.

```bash
# Criar nova branch
$ git checkout -b feature/faq-section develop

# Fazer mudanças
$ # ... trabalho no código ...

# Commitar
$ git add .
$ git commit -m "feat(faq): implementa secao de perguntas frequentes"

# Criar PR
$ npm run pr:create

🔍 Analisando mudanças no repositório...
📍 Branch atual: feature/faq-section
✅ Nenhuma mudança pendente
📊 Analisando commits na branch...
Total de commits: 1

abc123 feat(faq): implementa secao de perguntas frequentes

🚀 Fazendo push da nova branch...
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 2.34 KiB | 2.34 MiB/s, done.
Total 9 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 3 local objects.
To github.com:ipassbr/STL-Festival-10-anos.git
 * [new branch]      feature/faq-section -> feature/faq-section

🎯 Criando Pull Request...
✅ PR criada com sucesso!
🔗 URL: https://github.com/ipassbr/STL-Festival-10-anos/pull/52

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Processo concluído com sucesso!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Resultado:**

- ✅ Branch criada no remote
- ✅ 1 PR criada
- ✅ Nenhuma issue (apenas 1 commit)

---

## Cenário 5: Hotfix urgente

**Contexto:** Bug crítico em produção, precisa de PR rápida.

```bash
# Criar hotfix branch
$ git checkout -b hotfix/cloudinary-secret-leak main

# Corrigir
$ # ... remove secret hardcoded ...
$ git add .
$ git commit -m "fix(security): remove cloudinary secret hardcoded"

# Criar PR urgente
$ npm run pr:create

🔍 Analisando mudanças no repositório...
📍 Branch atual: hotfix/cloudinary-secret-leak
✅ Nenhuma mudança pendente
📊 Analisando commits na branch...
Total de commits: 1

xyz789 fix(security): remove cloudinary secret hardcoded

🎯 Criando Pull Request...
✅ PR criada com sucesso!
🔗 URL: https://github.com/ipassbr/STL-Festival-10-anos/pull/53

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Processo concluído com sucesso!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 Próximos passos:
  1. Solicitar FAST-TRACK review (hotfix)
  2. Merge após aprovação
  3. Deploy imediato para produção
```

**Resultado:**

- ✅ PR criada para hotfix (base: main)
- ✅ Pronta para fast-track review

---

## 🎯 Dicas práticas

### 1. Verificar antes de executar

```bash
# Ver o que será incluído na PR
$ git log develop..HEAD --oneline

# Ver arquivos modificados
$ git diff develop..HEAD --name-status

# Ver diff completo
$ git diff develop..HEAD
```

### 2. Commitar mudanças pendentes manualmente

```bash
# Se preferir commitar antes de rodar o script
$ git add .
$ git commit -m "feat(section): adiciona nova funcionalidade"
$ npm run pr:create
```

### 3. Revisar PR após criação

```bash
# Ver PR no browser
$ gh pr view --web

# Ver status dos checks
$ gh pr checks

# Ver diff da PR
$ gh pr diff
```

### 4. Editar PR após criação

```bash
# Editar título ou descrição
$ gh pr edit 42 --title "Novo título"
$ gh pr edit 42 --body "Nova descrição"

# Adicionar reviewers
$ gh pr edit 42 --add-reviewer @username

# Adicionar labels
$ gh pr edit 42 --add-label "priority-high"
```

### 5. Trabalhar com issues criadas

```bash
# Listar issues
$ gh issue list --label "code-review"

# Ver detalhes de uma issue
$ gh issue view 43

# Fechar issue
$ gh issue close 43 --comment "Resolvido na PR #42"
```

---

## 🔄 Workflow completo típico

```bash
# 1. Criar feature branch
$ git checkout -b feature/nova-funcionalidade develop

# 2. Trabalhar no código
$ # ... fazer mudanças ...

# 3. Commitar progressivamente
$ git add src/components/NewComponent.astro
$ git commit -m "feat(components): cria novo componente"

$ git add src/styles/new-component.css
$ git commit -m "style(components): adiciona estilos do componente"

# 4. Quando pronto, criar PR com issues
$ npm run pr:create

# 5. Aguardar Vercel preview e code review

# 6. Endereçar issues criadas
$ # ... fazer melhorias sugeridas ...
$ git add .
$ git commit -m "test(components): adiciona testes unitarios"
$ git push

# 7. Após aprovação, merge via GitHub UI ou:
$ gh pr merge 42 --squash --delete-branch
```

---

## 📝 Notas importantes

1. **O script cria issues baseado em heurísticas:**
   - Code Review: 3+ commits
   - Testes: Mudanças em .tsx/.ts
   - Documentação: 2+ commits
   - Performance: 2+ arquivos .astro ou .tsx

2. **Issues são criadas com labels apropriadas:**
   - `code-review`, `testing`, `documentation`, `performance`
   - `priority-high`, `priority-medium`
   - `enhancement`

3. **Todas as issues são linkadas à PR automaticamente**

4. **O script valida:**
   - GitHub CLI instalado e autenticado
   - Branch não é main/develop
   - Commits seguem Conventional Commits

5. **Formato Conventional Commits esperado:**

   ```
   <type>(<scope>): <message>

   Tipos: feat, fix, docs, style, refactor, perf, test, chore, ci
   Scope: hero, tickets, lineup, header, etc.
   ```
