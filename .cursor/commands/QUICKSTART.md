# ⚡ Quickstart: Comando Create PR

## 🎯 TL;DR

```
Ctrl+Shift+P → "Create PR" → Enter
```

Pronto! 🎉

---

## 📋 3 Passos Simples

### 1️⃣ Abrir Command Palette

```
Windows/Linux: Ctrl+Shift+P
macOS: Cmd+Shift+P
```

### 2️⃣ Digitar "Create PR"

```
> Create PR 🚀
  Cria Pull Request técnica com issues automaticamente
```

### 3️⃣ Pressionar Enter

```
✨ Aguarde ~30 segundos
✅ PR criada com issues!
```

---

## 🎬 Demo Visual

```
┌─────────────────────────────────────┐
│  Você                               │
│  ├─ Ctrl+Shift+P                   │
│  ├─ Digite "Create PR"             │
│  └─ Enter                           │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  Cursor Command                     │
│  ├─ ✅ Valida ambiente             │
│  ├─ 📊 Analisa mudanças            │
│  ├─ 🚀 Cria PR                     │
│  └─ 🏷️ Cria issues                │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│  Resultado                          │
│  ├─ PR #42 ✅                      │
│  ├─ Issue #43: Code Review 🔍      │
│  ├─ Issue #44: Testes 🧪           │
│  └─ Issue #45: Docs 📚             │
└─────────────────────────────────────┘
```

---

## ⏱️ Tempo

| Passo         | Tempo   |
| ------------- | ------- |
| Abrir palette | 1s      |
| Digitar       | 2s      |
| Executar      | 27s     |
| **TOTAL**     | **30s** |

---

## 🆚 Comparação

### Antes (Manual)

```
📝 Escrever descrição    3 min
🏷️ Criar issues         3 min
🔗 Linkar tudo          2 min
✅ Revisar              2 min
─────────────────────────────
Total: 10 minutos
```

### Depois (Automatizado)

```
Ctrl+Shift+P → Create PR → Enter
─────────────────────────────
Total: 30 segundos
```

**95% mais rápido** ⚡

---

## 💡 Dicas Rápidas

### Ver commits antes de criar PR

```bash
git log develop..HEAD --oneline
```

### Validar ambiente

```bash
./scripts/validate.sh
```

### Alternativas de uso

```bash
# Via comando npm
npm run pr:create

# Via script direto
bash .cursor/commands/create-pr.sh
```

---

## ❓ Problemas?

### Comando não aparece?

```
Ctrl+Shift+P → "Reload Window"
```

### Erro ao executar?

```bash
./scripts/validate.sh
```

### GitHub CLI?

```bash
gh auth login
```

---

## 📚 Quer Saber Mais?

- 📖 [README.md](./README.md) - Documentação completa
- 🎨 [USAGE.md](./USAGE.md) - Guia visual detalhado
- 📚 [../../scripts/README.md](../../scripts/README.md) - Sistema de PRs

---

## ✨ Teste Agora!

```
1. Pressione: Ctrl+Shift+P
2. Digite: Create PR
3. Enter
4. Aguarde 30s
5. 🎉 Pronto!
```

---

**Versão:** 1.0.0  
**Data:** 2026-02-12

🚀 **Pressione Ctrl+Shift+P agora!**
