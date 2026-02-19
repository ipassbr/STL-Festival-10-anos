#!/bin/bash

# Script de validação da instalação do create-pr.sh
# Verifica se todos os componentes estão instalados e configurados corretamente

echo "🔍 Validando instalação do create-pr.sh..."
echo ""

# Cores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

ERRORS=0
WARNINGS=0

# Check 1: Script existe
if [ -f "scripts/create-pr.sh" ]; then
    echo -e "${GREEN}✅ Script existe${NC}"
else
    echo -e "${RED}❌ Script não encontrado${NC}"
    ERRORS=$((ERRORS + 1))
fi

# Check 2: Script é executável
if [ -x "scripts/create-pr.sh" ]; then
    echo -e "${GREEN}✅ Script é executável${NC}"
else
    echo -e "${RED}❌ Script não é executável${NC}"
    echo -e "${YELLOW}   Execute: chmod +x scripts/create-pr.sh${NC}"
    ERRORS=$((ERRORS + 1))
fi

# Check 3: Sintaxe do script
if bash -n scripts/create-pr.sh 2>/dev/null; then
    echo -e "${GREEN}✅ Sintaxe do script válida${NC}"
else
    echo -e "${RED}❌ Erro de sintaxe no script${NC}"
    ERRORS=$((ERRORS + 1))
fi

# Check 4: GitHub CLI instalado
if command -v gh &> /dev/null; then
    VERSION=$(gh --version | head -1)
    echo -e "${GREEN}✅ GitHub CLI instalado ($VERSION)${NC}"
else
    echo -e "${RED}❌ GitHub CLI não encontrado${NC}"
    echo -e "${YELLOW}   Instale: sudo apt install gh (ou brew install gh)${NC}"
    ERRORS=$((ERRORS + 1))
fi

# Check 5: GitHub CLI autenticado
if gh auth status &> /dev/null; then
    USER=$(gh api user --jq .login 2>/dev/null || echo "unknown")
    echo -e "${GREEN}✅ GitHub CLI autenticado (@$USER)${NC}"
else
    echo -e "${YELLOW}⚠️  GitHub CLI não autenticado${NC}"
    echo -e "${YELLOW}   Execute: gh auth login${NC}"
    WARNINGS=$((WARNINGS + 1))
fi

# Check 6: Comando npm configurado
if grep -q '"pr:create"' package.json; then
    echo -e "${GREEN}✅ Comando npm configurado${NC}"
else
    echo -e "${RED}❌ Comando npm não encontrado em package.json${NC}"
    ERRORS=$((ERRORS + 1))
fi

# Check 7: Git configurado
if git config user.name &> /dev/null && git config user.email &> /dev/null; then
    GIT_USER=$(git config user.name)
    GIT_EMAIL=$(git config user.email)
    echo -e "${GREEN}✅ Git configurado ($GIT_USER <$GIT_EMAIL>)${NC}"
else
    echo -e "${YELLOW}⚠️  Git não configurado completamente${NC}"
    echo -e "${YELLOW}   Execute: git config --global user.name 'Seu Nome'${NC}"
    echo -e "${YELLOW}   Execute: git config --global user.email 'seu@email.com'${NC}"
    WARNINGS=$((WARNINGS + 1))
fi

# Check 8: Documentação existe
echo ""
echo "📚 Verificando documentação:"
DOCS=("README.md" "EXAMPLES.md" "QUICKSTART.md" "VALIDATION.md")
for doc in "${DOCS[@]}"; do
    if [ -f "scripts/$doc" ]; then
        SIZE=$(du -h "scripts/$doc" | cut -f1)
        echo -e "${GREEN}   ✅ $doc ($SIZE)${NC}"
    else
        echo -e "${YELLOW}   ⚠️  Documentação faltando: $doc${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
done

# Check 9: Verificar se está em repositório git
if git rev-parse --git-dir &> /dev/null; then
    REPO_ROOT=$(git rev-parse --show-toplevel)
    REPO_NAME=$(basename "$REPO_ROOT")
    echo -e "\n${GREEN}✅ Repositório Git: $REPO_NAME${NC}"
else
    echo -e "\n${RED}❌ Não está em um repositório Git${NC}"
    ERRORS=$((ERRORS + 1))
fi

# Check 10: Verificar remote origin
if git remote get-url origin &> /dev/null; then
    ORIGIN=$(git remote get-url origin)
    echo -e "${GREEN}✅ Remote origin configurado${NC}"
    echo -e "${YELLOW}   $ORIGIN${NC}"
else
    echo -e "${YELLOW}⚠️  Remote origin não configurado${NC}"
    WARNINGS=$((WARNINGS + 1))
fi

# Resumo
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✨ Validação completa! Tudo OK!${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo -e "${GREEN}🚀 Pronto para usar:${NC}"
    echo -e "${YELLOW}   npm run pr:create${NC}"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠️  Validação completa com $WARNINGS aviso(s)${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo -e "${YELLOW}Script pode ser usado, mas considere resolver os avisos acima.${NC}"
    echo ""
    echo -e "${GREEN}🚀 Para usar:${NC}"
    echo -e "${YELLOW}   npm run pr:create${NC}"
    exit 0
else
    echo -e "${RED}❌ Validação falhou com $ERRORS erro(s) e $WARNINGS aviso(s)${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo -e "${RED}Por favor, corrija os erros acima antes de usar o script.${NC}"
    echo ""
    echo -e "${YELLOW}📚 Consulte: scripts/VALIDATION.md${NC}"
    exit 1
fi
