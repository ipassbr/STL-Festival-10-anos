#!/bin/bash

# Script para criar labels necessárias no repositório GitHub
# Uso: ./scripts/setup-labels.sh

set -e

echo "🏷️  Configurando labels do GitHub..."
echo ""

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Verificar GitHub CLI
if ! command -v gh &> /dev/null; then
    echo -e "${RED}❌ GitHub CLI não instalado${NC}"
    exit 1
fi

# Verificar autenticação
if ! gh auth status &> /dev/null; then
    echo -e "${RED}❌ GitHub CLI não autenticado${NC}"
    exit 1
fi

# Array de labels
declare -A LABELS=(
    ["code-review"]="Code review necessário|0075ca"
    ["testing"]="Relacionado a testes|0e8a16"
    ["documentation"]="Melhorias na documentação|0075ca"
    ["performance"]="Relacionado a performance|d4c5f9"
    ["enhancement"]="Nova funcionalidade ou melhoria|a2eeef"
    ["priority-high"]="Alta prioridade|d93f0b"
    ["priority-medium"]="Média prioridade|fbca04"
    ["priority-low"]="Baixa prioridade|c5def5"
    ["bug"]="Algo não está funcionando|d73a4a"
)

CREATED=0
SKIPPED=0
ERRORS=0

echo -e "${BLUE}Criando labels necessárias...${NC}"
echo ""

for label in "${!LABELS[@]}"; do
    IFS='|' read -r description color <<< "${LABELS[$label]}"
    
    if gh label create "$label" --description "$description" --color "$color" 2>/dev/null; then
        echo -e "${GREEN}✅ Criada: $label${NC}"
        CREATED=$((CREATED + 1))
    else
        if gh label list | grep -q "^$label"; then
            echo -e "${YELLOW}⚠️  Já existe: $label${NC}"
            SKIPPED=$((SKIPPED + 1))
        else
            echo -e "${RED}❌ Erro ao criar: $label${NC}"
            ERRORS=$((ERRORS + 1))
        fi
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}Resumo:${NC}"
echo -e "  ${GREEN}✅ Criadas: $CREATED${NC}"
echo -e "  ${YELLOW}⚠️  Já existiam: $SKIPPED${NC}"
if [ $ERRORS -gt 0 ]; then
    echo -e "  ${RED}❌ Erros: $ERRORS${NC}"
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✨ Setup de labels concluído!${NC}"
    echo ""
    echo -e "${BLUE}📋 Para ver todas as labels:${NC}"
    echo "   gh label list"
    exit 0
else
    echo -e "${RED}⚠️  Alguns erros ocorreram. Verifique manualmente.${NC}"
    exit 1
fi
