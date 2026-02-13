#!/bin/bash

# Cursor Command: Criar PR Automatizada
# Atalho: Ctrl+Shift+P → "Create PR"
# Descrição: Cria Pull Request técnica com issues automaticamente

set -e

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}🚀 Cursor Command: Criar PR Automatizada${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Verificar se o script principal existe
if [ ! -f "scripts/create-pr.sh" ]; then
    echo -e "${RED}❌ Erro: scripts/create-pr.sh não encontrado${NC}"
    echo -e "${YELLOW}Execute a instalação primeiro.${NC}"
    exit 1
fi

# Verificar se validate.sh existe
if [ -f "scripts/validate.sh" ]; then
    echo -e "${BLUE}🔍 Validando ambiente...${NC}"
    if ! ./scripts/validate.sh &> /dev/null; then
        echo -e "${YELLOW}⚠️  Validação falhou. Executando diagnóstico...${NC}"
        ./scripts/validate.sh
        echo ""
        echo -e "${YELLOW}Deseja continuar mesmo assim? (y/n)${NC}"
        read -r CONTINUE
        if [ "$CONTINUE" != "y" ]; then
            echo -e "${RED}Operação cancelada.${NC}"
            exit 1
        fi
    else
        echo -e "${GREEN}✅ Ambiente validado${NC}"
    fi
    echo ""
fi

# Perguntar pela branch base
echo -e "${YELLOW}Digite a branch base para o PR (Enter para auto-detectar):${NC}"
read -r BASE_BRANCH_INPUT

# Executar o script principal
echo -e "${BLUE}🎯 Iniciando criação da PR...${NC}"
echo ""

if [ -n "$BASE_BRANCH_INPUT" ]; then
    bash scripts/create-pr.sh "$BASE_BRANCH_INPUT"
else
    bash scripts/create-pr.sh
fi

# Capturar exit code
EXIT_CODE=$?

echo ""
if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}✨ PR criada com sucesso via Cursor Command!${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
else
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${RED}❌ Erro ao criar PR (exit code: $EXIT_CODE)${NC}"
    echo -e "${RED}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    exit $EXIT_CODE
fi
