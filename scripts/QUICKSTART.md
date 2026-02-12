# 🚀 Quickstart: Criar PR em 30 segundos

Guia ultra-rápido para criar PRs técnicas com issues automaticamente.

## ⚡ TL;DR

```bash
npm run pr:create
```

**Pronto!** 🎉

---

## 📋 Pré-requisitos (setup único)

### 1. Instalar GitHub CLI

```bash
# Ubuntu/Debian
sudo apt install gh

# macOS
brew install gh

# Arch Linux
sudo pacman -S github-cli
```

### 2. Autenticar

```bash
gh auth login
```

Siga as instruções no terminal (leva ~1 minuto).

---

## 🎯 Uso básico

### Cenário 1: Você tem mudanças não commitadas

```bash
$ npm run pr:create
# Responda 'y' quando perguntar sobre commitar
# Digite a mensagem do commit
# Pronto!
```

### Cenário 2: Você já commitou tudo

```bash
$ npm run pr:create
# Vai direto criar a PR
# Pronto!
```

---

## ✅ O que o comando faz

1. ✨ Analisa suas mudanças
2. 💾 Commita pendências (se você quiser)
3. 🚀 Faz push da branch
4. 📝 Cria PR com descrição técnica completa
5. 🏷️ Cria issues relevantes automaticamente
6. 🔗 Linka tudo junto

---

## 🎨 Exemplo visual

```
Antes:
  feature/tickets-section (local)
    ├─ 3 commits
    └─ arquivos modificados

Após npm run pr:create:
  GitHub:
    ├─ PR #42 ✅
    ├─ Issue #43: Code Review
    ├─ Issue #44: Testes
    ├─ Issue #45: Documentação
    └─ Issue #46: Performance

  Vercel:
    └─ Deploy preview (automático)
```

---

## 🚫 Erros comuns e soluções

### "gh command not found"

```bash
sudo apt install gh  # ou brew install gh
```

### "GitHub CLI não está autenticado"

```bash
gh auth login
```

### "Você está em main/develop"

```bash
git checkout -b feature/minha-feature develop
```

### "Permission denied"

```bash
chmod +x scripts/create-pr.sh
```

---

## 📚 Quer saber mais?

- [README completo](./README.md) - Documentação detalhada
- [EXAMPLES.md](./EXAMPLES.md) - Exemplos de uso em cenários reais
- [GitHub CLI Docs](https://cli.github.com/manual/) - Referência do gh

---

## 💡 Dicas

### Formato de commits

Use Conventional Commits:

```
feat(tickets): adiciona card VIP
fix(header): corrige menu mobile
docs(readme): atualiza instrucoes
```

### Verificar antes

```bash
# Ver commits que serão incluídos
git log develop..HEAD --oneline

# Ver arquivos modificados
git diff develop..HEAD --name-status
```

### Após criar a PR

1. ✅ Aguarde Vercel criar o preview (~2 min)
2. ✅ Teste o preview deployment
3. ✅ Solicite code review
4. ✅ Endereçe as issues criadas

---

## 🎉 Isso é tudo!

Agora você pode criar PRs profissionais em segundos.

**Próxima vez:**

```bash
npm run pr:create
```

E pronto! ✨
