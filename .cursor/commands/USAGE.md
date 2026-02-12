# 🎯 Como Usar o Comando Create PR no Cursor

Guia visual para usar o comando customizado de criar PRs no Cursor IDE.

---

## 🚀 3 Formas de Usar

### Método 1: Command Palette (Recomendado)

```
┌─────────────────────────────────────────┐
│  1. Pressione: Ctrl+Shift+P             │
│     (ou Cmd+Shift+P no macOS)           │
└─────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────┐
│  2. Digite: "Create PR"                 │
│                                         │
│  > Create PR 🚀                         │
│    Cria Pull Request técnica...        │
└─────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────┐
│  3. Pressione: Enter                    │
└─────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────┐
│  ✨ PR criada com sucesso!              │
└─────────────────────────────────────────┘
```

**Tempo total:** ~30 segundos

---

### Método 2: Terminal Integrado

```bash
# No terminal integrado do Cursor (Ctrl+`)
bash .cursor/commands/create-pr.sh
```

---

### Método 3: NPM Script (alternativa)

```bash
# Via npm
npm run pr:create
```

---

## 🎬 Fluxo Visual Completo

```
┌─────────────────────────────────────────────────────────┐
│  ESTADO INICIAL: Você tem mudanças não commitadas      │
│                                                         │
│  feature/tickets-section                                │
│  ├─ Modified: src/components/tickets/TicketCard.astro  │
│  └─ Untracked: assets/elementos-card/*.png             │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  VOCÊ: Ctrl+Shift+P → "Create PR" → Enter              │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  CURSOR COMMAND: Executa validação                     │
│  🔍 Validando ambiente...                               │
│  ✅ Script existe                                       │
│  ✅ GitHub CLI instalado                                │
│  ✅ GitHub CLI autenticado                              │
│  ✅ Ambiente validado                                   │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  SCRIPT: Analisa mudanças                              │
│  📍 Branch atual: feature/tickets-section              │
│  ⚠️  Há mudanças não commitadas. Commitar? (y/n)       │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  VOCÊ: Digite 'y' e mensagem do commit                 │
│  feat(tickets): adiciona elementos graficos aos cards  │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  SCRIPT: Push + Cria PR + Cria Issues                 │
│  🚀 Fazendo push da branch...                          │
│  📝 Gerando descrição da PR...                         │
│  🎯 Criando Pull Request...                            │
│  ✅ PR criada: #42                                     │
│  📋 Criando issues relacionadas...                     │
│  ✅ Issue criada: #43 (Code Review)                   │
│  ✅ Issue criada: #44 (Testes)                        │
│  ✅ Issue criada: #45 (Documentação)                  │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  RESULTADO FINAL                                        │
│                                                         │
│  GitHub:                                                │
│  ├─ PR #42 ✅ [feature/tickets-section → develop]     │
│  │  ├─ Descrição técnica completa                     │
│  │  ├─ Checklist de qualidade                         │
│  │  └─ Links para issues                              │
│  ├─ Issue #43: 🔍 Code Review                         │
│  ├─ Issue #44: 🧪 Testes                              │
│  └─ Issue #45: 📚 Documentação                        │
│                                                         │
│  Vercel:                                                │
│  └─ Deploy preview (em progresso)                     │
└─────────────────────────────────────────────────────────┘
```

---

## 📊 Comparação: Antes vs Depois

### ❌ ANTES (Manual - 10-15 minutos)

```
1. 📝 Escrever descrição da PR          → 3 minutos
   ├─ Pensar no título
   ├─ Descrever mudanças
   └─ Criar checklist

2. 🏷️ Criar issues manualmente          → 3 minutos
   ├─ Abrir "New Issue"
   ├─ Preencher template
   └─ Repetir 3-4x

3. 🔗 Linkar issues à PR                → 2 minutos
   ├─ Copiar número da PR
   ├─ Editar cada issue
   └─ Adicionar referências

4. ✅ Revisar tudo                      → 2 minutos
   ├─ Verificar se nada foi esquecido
   └─ Ajustar formatação

Total: 10-15 minutos + erros humanos
```

### ✅ DEPOIS (Automatizado - 30 segundos)

```
1. Ctrl+Shift+P                         → 2 segundos
2. Digite "Create PR"                   → 2 segundos
3. Enter                                → 1 segundo
4. Aguardar execução                    → 25 segundos
5. ✨ Pronto!                           → 0 segundos

Total: 30 segundos + zero erros
```

**Economia:** 95% mais rápido ⚡

---

## 🎨 Output Visual do Comando

Quando você executa o comando, verá algo assim no terminal:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 Cursor Command: Criar PR Automatizada
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 Validando ambiente...
✅ Ambiente validado

🎯 Iniciando criação da PR...

📍 Branch atual: feature/tickets-section
📊 Analisando commits na branch...
Total de commits: 3

123abc feat(tickets): adiciona elementos graficos
456def feat(tickets): implementa card Camarote
789ghi feat(tickets): adiciona card VIP

📁 Arquivos modificados:
M       src/components/tickets/TicketCard.astro
A       assets/elementos-card/CARROSSEL-SETORES_03.png

🎯 Criando Pull Request...
✅ PR criada com sucesso!
🔗 URL: https://github.com/ipassbr/STL-Festival-10-anos/pull/42

📋 Criando issues relacionadas...
✅ Issue criada: https://github.com/ipassbr/STL-Festival-10-anos/issues/43
✅ Issue criada: https://github.com/ipassbr/STL-Festival-10-anos/issues/44

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ PR criada com sucesso via Cursor Command!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🔧 Configuração do Cursor

### Verificar se o comando está disponível

1. Abra o Cursor
2. Pressione `Ctrl+Shift+P`
3. Digite "Create"
4. Você deve ver: **"Create PR 🚀"**

Se não aparecer:

```bash
# Recarregar o Cursor
Ctrl+Shift+P → "Reload Window"

# Verificar arquivos
ls -la .cursor/commands/
```

---

## 🎯 Casos de Uso Rápidos

### Caso 1: Feature Pronta

```
Situação: Você terminou uma feature e quer criar PR

Passos:
1. Ctrl+Shift+P → "Create PR" → Enter
2. Aguardar 30s
3. ✅ Pronto! PR + Issues criadas
```

### Caso 2: Bugfix Urgente

```
Situação: Você corrigiu um bug e precisa de PR rápida

Passos:
1. Commitar o bugfix (se ainda não commitou)
2. Ctrl+Shift+P → "Create PR" → Enter
3. ✅ PR criada sem issues (bugfix simples)
```

### Caso 3: Trabalho em Progresso

```
Situação: Você tem mudanças não commitadas

Passos:
1. Ctrl+Shift+P → "Create PR" → Enter
2. Responder 'y' para commitar
3. Digitar mensagem do commit
4. ✅ PR criada com tudo commitado
```

---

## 💡 Dicas Pro

### 1. Atalho de Teclado Personalizado

Crie um atalho ainda mais rápido:

```json
// .cursor/keybindings.json
{
  "key": "ctrl+alt+p",
  "command": "workbench.action.terminal.sendSequence",
  "args": {
    "text": "bash .cursor/commands/create-pr.sh\n"
  }
}
```

Agora: `Ctrl+Alt+P` → PR criada! 🚀

### 2. Verificar Antes

```bash
# Ver o que será incluído na PR
git log develop..HEAD --oneline

# Ver arquivos modificados
git status --short
```

### 3. Após Criar a PR

```bash
# Ver a PR no browser
gh pr view --web

# Ver status dos checks
gh pr checks

# Ver issues criadas
gh issue list --label code-review
```

---

## ❓ Troubleshooting

### Comando não aparece na Command Palette

**Solução:**

```bash
# 1. Recarregar Cursor
Ctrl+Shift+P → "Reload Window"

# 2. Verificar arquivos
ls -la .cursor/commands/

# 3. Verificar JSON
cat .cursor/commands/create-pr.json
```

### Comando falha ao executar

**Solução:**

```bash
# 1. Executar manualmente para ver erro
bash .cursor/commands/create-pr.sh

# 2. Validar ambiente
./scripts/validate.sh

# 3. Verificar GitHub CLI
gh auth status
```

### "GitHub CLI não autenticado"

**Solução:**

```bash
gh auth login
# Seguir instruções no terminal
```

---

## 📚 Documentação Relacionada

- [README do Sistema de PRs](../../scripts/README.md)
- [Guia Rápido](../../scripts/QUICKSTART.md)
- [Exemplos Práticos](../../scripts/EXAMPLES.md)
- [Validação](../../scripts/VALIDATION.md)
- [README dos Comandos](.cursor/commands/README.md)

---

## 🎉 Resumo

**3 passos simples:**

1. `Ctrl+Shift+P`
2. Digite "Create PR"
3. `Enter`

**Resultado:**

- ✅ PR criada
- ✅ Issues geradas
- ✅ Tudo linkado
- ✅ 30 segundos total

---

**Criado para:** STL Festival 10 Anos  
**Versão:** 1.0.0  
**Data:** 2026-02-12

🚀 **Pressione Ctrl+Shift+P agora e teste!**
