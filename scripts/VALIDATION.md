# ✅ Validação da Instalação

Este documento valida que o script `create-pr.sh` está pronto para uso.

## 🔍 Checklist de Validação

### 1. Script criado e executável

```bash
$ ls -lh scripts/create-pr.sh
-rwxr-xr-x 1 user user 8.5K Feb 12 create-pr.sh
```

✅ **Status:** Arquivo existe e é executável

### 2. Comando npm configurado

```bash
$ npm run pr:create --dry-run
# Deve mostrar: bash scripts/create-pr.sh
```

✅ **Status:** Comando `npm run pr:create` está configurado em `package.json`

### 3. GitHub CLI instalado

```bash
$ gh --version
gh version 2.86.0 (2026-01-21)
```

✅ **Status:** GitHub CLI versão 2.86.0 instalado

### 4. Documentação completa

```bash
$ ls -1 scripts/
create-pr.sh        # Script principal
README.md           # Documentação completa
EXAMPLES.md         # Exemplos de uso
QUICKSTART.md       # Guia rápido
VALIDATION.md       # Este arquivo
```

✅ **Status:** Toda documentação criada

---

## 🧪 Teste de Validação (Dry Run)

Execute este teste para validar que tudo está funcionando sem criar uma PR real:

```bash
# 1. Verificar GitHub CLI
gh auth status

# Saída esperada:
# ✓ Logged in to github.com as USERNAME
# ✓ Git operations for github.com configured to use https protocol.

# 2. Verificar permissões do script
bash -n scripts/create-pr.sh

# Saída esperada: (nenhuma = sintaxe OK)

# 3. Verificar branch atual
git branch --show-current

# Saída esperada: feature/tickets-section-test (ou outra feature branch)

# 4. Verificar status
git status --short

# Saída esperada: Lista de arquivos modificados
```

---

## ✨ Teste Real (Opcional)

**ATENÇÃO:** Este teste vai criar uma PR real no GitHub!

```bash
# 1. Criar branch de teste
git checkout -b test/pr-automation develop

# 2. Fazer mudança trivial
echo "# Test" >> scripts/TEST.md
git add scripts/TEST.md
git commit -m "test(scripts): validacao do comando pr:create"

# 3. Executar comando
npm run pr:create

# 4. Verificar resultado
# - PR deve ser criada em: https://github.com/ipassbr/STL-Festival-10-anos/pulls
# - Issues devem ser criadas (se aplicável)

# 5. Limpar (após validação)
gh pr close --delete-branch
rm scripts/TEST.md
git checkout develop
```

---

## 🔧 Troubleshooting de Validação

### Problema: "gh command not found"

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install gh

# macOS
brew install gh

# Arch Linux
sudo pacman -S github-cli

# Verificar instalação
gh --version
```

### Problema: "GitHub CLI não está autenticado"

```bash
# Fazer login
gh auth login

# Escolher:
# - GitHub.com
# - HTTPS
# - Login via web browser (recomendado)

# Verificar
gh auth status
```

### Problema: "Permission denied: scripts/create-pr.sh"

```bash
# Tornar executável
chmod +x scripts/create-pr.sh

# Verificar
ls -lh scripts/create-pr.sh
# Deve mostrar: -rwxr-xr-x
```

### Problema: Script não funciona em main/develop

```bash
# Isso é esperado! O script bloqueia PR de branches protegidas

# Solução: criar feature branch
git checkout -b feature/minha-feature develop
```

### Problema: "No commits between develop and current branch"

```bash
# Você está na branch develop ou sem commits novos

# Solução 1: fazer um commit
git add .
git commit -m "feat(section): adiciona funcionalidade"

# Solução 2: trocar para branch com commits
git checkout feature/outra-branch
```

---

## 📊 Validação Completa

Execute todos os checks de uma vez:

```bash
#!/bin/bash

echo "🔍 Validando instalação do create-pr.sh..."
echo ""

# Check 1: Script existe
if [ -f "scripts/create-pr.sh" ]; then
    echo "✅ Script existe"
else
    echo "❌ Script não encontrado"
    exit 1
fi

# Check 2: Script é executável
if [ -x "scripts/create-pr.sh" ]; then
    echo "✅ Script é executável"
else
    echo "❌ Script não é executável"
    echo "   Execute: chmod +x scripts/create-pr.sh"
    exit 1
fi

# Check 3: GitHub CLI instalado
if command -v gh &> /dev/null; then
    VERSION=$(gh --version | head -1)
    echo "✅ GitHub CLI instalado ($VERSION)"
else
    echo "❌ GitHub CLI não encontrado"
    echo "   Instale: sudo apt install gh"
    exit 1
fi

# Check 4: GitHub CLI autenticado
if gh auth status &> /dev/null; then
    USER=$(gh api user --jq .login)
    echo "✅ GitHub CLI autenticado (@$USER)"
else
    echo "⚠️  GitHub CLI não autenticado"
    echo "   Execute: gh auth login"
fi

# Check 5: Comando npm configurado
if grep -q "pr:create" package.json; then
    echo "✅ Comando npm configurado"
else
    echo "❌ Comando npm não encontrado em package.json"
    exit 1
fi

# Check 6: Documentação existe
DOCS=("README.md" "EXAMPLES.md" "QUICKSTART.md" "VALIDATION.md")
for doc in "${DOCS[@]}"; do
    if [ -f "scripts/$doc" ]; then
        echo "✅ Documentação: $doc"
    else
        echo "⚠️  Documentação faltando: $doc"
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Validação completa!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🚀 Pronto para usar: npm run pr:create"
```

Salve como `scripts/validate.sh` e execute:

```bash
chmod +x scripts/validate.sh
./scripts/validate.sh
```

---

## 📈 Métricas de Sucesso

Após usar o script algumas vezes, você deve observar:

1. **Tempo reduzido:**
   - Antes: ~10-15 minutos para criar PR manualmente
   - Depois: ~30 segundos com o script

2. **Consistência:**
   - PRs sempre com descrição completa
   - Checklists nunca esquecidos
   - Issues criadas automaticamente

3. **Qualidade:**
   - PRs mais técnicas e detalhadas
   - Issues contextualizadas
   - Rastreamento melhorado

---

## 🎯 Próximos Passos

1. ✅ Validação completa
2. 📚 Ler [QUICKSTART.md](./QUICKSTART.md) (2 minutos)
3. 🚀 Criar sua primeira PR: `npm run pr:create`
4. 📖 Explorar [EXAMPLES.md](./EXAMPLES.md) para casos avançados
5. 🔧 Consultar [README.md](./README.md) para troubleshooting

---

## 🤝 Suporte

- **Bug no script?** Abra uma issue com label `bug`
- **Sugestão de melhoria?** Abra uma issue com label `enhancement`
- **Dúvida?** Consulte a documentação ou abra uma discussão

---

## 📝 Changelog

### Versão 1.0.0 (2026-02-12)

- ✨ Script inicial `create-pr.sh`
- 📝 Documentação completa (README, EXAMPLES, QUICKSTART, VALIDATION)
- 🔧 Comando npm `pr:create`
- 🏷️ Sistema de issues automáticas (4 tipos)
- ✅ Validação e troubleshooting

---

**Status:** ✅ **VALIDADO E PRONTO PARA USO**

Execute agora:

```bash
npm run pr:create
```
