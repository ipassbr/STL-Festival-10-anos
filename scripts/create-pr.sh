#!/bin/bash

# Script para criar PR técnica com issues associadas
# Uso: ./scripts/create-pr.sh [base-branch]
# Exemplo: ./scripts/create-pr.sh feature/tickets-section

set -e

echo "🔍 Analisando mudanças no repositório..."

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se gh está instalado
if ! command -v gh &> /dev/null; then
    echo -e "${RED}❌ GitHub CLI (gh) não está instalado${NC}"
    echo "Instale com: sudo apt install gh (ou brew install gh no macOS)"
    exit 1
fi

# Verificar autenticação do gh
if ! gh auth status &> /dev/null; then
    echo -e "${RED}❌ GitHub CLI não está autenticado${NC}"
    echo "Execute: gh auth login"
    exit 1
fi

# Obter branch atual
CURRENT_BRANCH=$(git branch --show-current)

# Determinar branch base
if [ -n "$1" ]; then
    # Branch base fornecida como argumento
    BASE_BRANCH="$1"
else
    # Tentar detectar automaticamente ou usar padrão
    if git show-ref --verify --quiet refs/heads/develop; then
        BASE_BRANCH="develop"
    elif git show-ref --verify --quiet refs/heads/main; then
        BASE_BRANCH="main"
    else
        echo -e "${YELLOW}⚠️  Não foi possível detectar branch base automaticamente${NC}"
        echo -e "${YELLOW}Branches disponíveis:${NC}"
        git branch | grep -v "^*"
        echo ""
        echo -e "${YELLOW}Digite a branch base para o PR:${NC}"
        read -r BASE_BRANCH
    fi
fi

# Validar que não estamos na branch base
if [ "$CURRENT_BRANCH" = "$BASE_BRANCH" ]; then
    echo -e "${RED}❌ Você está em $CURRENT_BRANCH (branch base). Crie uma feature branch primeiro.${NC}"
    exit 1
fi

# Verificar se a branch base existe
if ! git show-ref --verify --quiet refs/heads/"$BASE_BRANCH"; then
    echo -e "${RED}❌ Branch base '$BASE_BRANCH' não existe localmente${NC}"
    echo -e "${YELLOW}Tentando buscar do remote...${NC}"
    if git fetch origin "$BASE_BRANCH":"$BASE_BRANCH" 2>/dev/null; then
        echo -e "${GREEN}✅ Branch '$BASE_BRANCH' baixada do remote${NC}"
    else
        echo -e "${RED}❌ Branch '$BASE_BRANCH' não encontrada no remote${NC}"
        exit 1
    fi
fi

echo -e "${BLUE}📍 Branch atual: ${GREEN}$CURRENT_BRANCH${NC}"
echo -e "${BLUE}📍 Branch base: ${GREEN}$BASE_BRANCH${NC}"

# Verificar se há mudanças não commitadas
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  Há mudanças não commitadas. Deseja commitar agora? (y/n)${NC}"
    read -r COMMIT_NOW
    
    if [ "$COMMIT_NOW" = "y" ]; then
        # Mostrar arquivos modificados
        echo -e "${BLUE}Arquivos modificados:${NC}"
        git status --short
        
        # Adicionar todos os arquivos
        git add .
        
        # Solicitar mensagem de commit
        echo -e "${YELLOW}Digite a mensagem do commit (formato: type(scope): message):${NC}"
        read -r COMMIT_MSG
        
        git commit -m "$COMMIT_MSG"
        echo -e "${GREEN}✅ Commit criado${NC}"
    fi
fi

# Analisar commits desde a branch base
echo -e "${BLUE}📊 Analisando commits na branch...${NC}"
COMMITS=$(git log "$BASE_BRANCH"..HEAD --oneline)
COMMIT_COUNT=$(echo "$COMMITS" | wc -l)

echo -e "${GREEN}Total de commits: $COMMIT_COUNT${NC}"
echo "$COMMITS"

# Analisar tipos de mudanças
echo -e "\n${BLUE}📁 Arquivos modificados:${NC}"
git diff "$BASE_BRANCH"..HEAD --name-status | head -20

# Verificar se a branch já existe no remote
if git ls-remote --heads origin "$CURRENT_BRANCH" | grep -q "$CURRENT_BRANCH"; then
    echo -e "${YELLOW}⚠️  Branch já existe no remote. Fazendo push...${NC}"
    git push origin "$CURRENT_BRANCH"
else
    echo -e "${BLUE}🚀 Fazendo push da nova branch...${NC}"
    git push -u origin "$CURRENT_BRANCH"
fi

# Gerar título da PR baseado nos commits
PR_TITLE=$(git log "$BASE_BRANCH"..HEAD --format=%s | head -1)
if [ -z "$PR_TITLE" ]; then
    PR_TITLE="$CURRENT_BRANCH"
fi

# Analisar mudanças para gerar descrição
echo -e "\n${BLUE}📝 Gerando descrição da PR...${NC}"

# Contar arquivos por tipo
ASTRO_FILES=$(git diff "$BASE_BRANCH"..HEAD --name-only | grep -c '\.astro$' || echo 0)
TSX_FILES=$(git diff "$BASE_BRANCH"..HEAD --name-only | grep -c '\.tsx$' || echo 0)
TS_FILES=$(git diff "$BASE_BRANCH"..HEAD --name-only | grep -c '\.ts$' || echo 0)
CSS_FILES=$(git diff "$BASE_BRANCH"..HEAD --name-only | grep -c '\.css$' || echo 0)
JSON_FILES=$(git diff "$BASE_BRANCH"..HEAD --name-only | grep -c '\.json$' || echo 0)

# Identificar seções modificadas
SECTIONS=$(git diff "$BASE_BRANCH"..HEAD --name-only | grep -oP 'src/components/\K[^/]+' | sort -u | head -5)

# Criar corpo da PR
PR_BODY=$(cat <<EOF
## 📋 Resumo

Esta PR implementa melhorias técnicas na branch \`$CURRENT_BRANCH\`.

## 🔧 Mudanças Técnicas

### Arquivos Modificados
- 📄 Astro: $ASTRO_FILES arquivo(s)
- ⚛️  React: $TSX_FILES arquivo(s)
- 📘 TypeScript: $TS_FILES arquivo(s)
- 🎨 CSS: $CSS_FILES arquivo(s)
- 📦 JSON: $JSON_FILES arquivo(s)

### Seções Afetadas
$(echo "$SECTIONS" | sed 's/^/- /')

### Commits Incluídos
\`\`\`
$COMMITS
\`\`\`

## ✅ Checklist Técnico

### Performance
- [ ] Lighthouse score ≥ 90 verificado
- [ ] Bundle JavaScript < 50KB gzipped
- [ ] Imagens otimizadas via Cloudinary (f_auto,q_auto)
- [ ] Lazy loading aplicado em imagens below-fold

### Acessibilidade
- [ ] Navegação via teclado testada
- [ ] aria-labels presentes em componentes interativos
- [ ] Contrastes de cores verificados (WCAG AA)
- [ ] Hierarquia de headings correta

### Code Quality
- [ ] ESLint passou sem erros
- [ ] TypeScript compilou sem erros
- [ ] Sem console.log ou debuggers
- [ ] Self-review completo

### Design System
- [ ] Cores via tokens CSS (sem hex hardcoded)
- [ ] Tipografia usando escala modular
- [ ] Espaçamentos via escala 4px
- [ ] Componentes seguem padrões do design system

### Islands & Hydration
- [ ] Componentes estáticos sem client:*
- [ ] client:visible para componentes below-fold
- [ ] client:load apenas para ilhas críticas

## 🧪 Testes

- [ ] Testado em Chrome/Edge
- [ ] Testado em Firefox
- [ ] Testado em Safari
- [ ] Testado em mobile (iOS/Android)
- [ ] Testado com screen reader

## 📸 Screenshots

<!-- Adicionar screenshots se houver mudanças visuais -->

## 🔗 Issues Relacionadas

<!-- Serão criadas automaticamente pelo script -->

---

**Deploy Preview**: Vercel vai gerar automaticamente o link do preview após a criação da PR.
EOF
)

# Criar PR
echo -e "${BLUE}🎯 Criando Pull Request...${NC}"
PR_URL=$(gh pr create \
    --title "$PR_TITLE" \
    --body "$PR_BODY" \
    --base "$BASE_BRANCH" \
    --head "$CURRENT_BRANCH")

if [ -z "$PR_URL" ]; then
    echo -e "${RED}❌ Erro ao criar PR${NC}"
    exit 1
fi

echo -e "${GREEN}✅ PR criada com sucesso!${NC}"
echo -e "${BLUE}🔗 URL: ${GREEN}$PR_URL${NC}"

# Extrair número da PR
PR_NUMBER=$(echo "$PR_URL" | grep -oP '\d+$')

# Criar issues baseadas nas mudanças
echo -e "\n${BLUE}📋 Criando issues relacionadas...${NC}"

ISSUES_CREATED=0

# Issue 1: Code Review
if [ $COMMIT_COUNT -gt 3 ]; then
    echo -e "${YELLOW}Criando issue: Code Review Detalhado${NC}"
    ISSUE_URL=$(gh issue create \
        --title "🔍 Code Review: $CURRENT_BRANCH" \
        --body "## Contexto
Esta issue rastreia o code review da PR #$PR_NUMBER.

## Itens de Review
- [ ] Verificar lógica de negócio
- [ ] Validar tratamento de erros
- [ ] Confirmar testes adequados
- [ ] Revisar performance
- [ ] Validar acessibilidade

## PR Relacionada
#$PR_NUMBER" \
        --label "code-review,priority-high")
    
    ISSUES_CREATED=$((ISSUES_CREATED + 1))
    echo -e "${GREEN}✅ Issue criada: $ISSUE_URL${NC}"
fi

# Issue 2: Testes
if [ $TSX_FILES -gt 0 ] || [ $TS_FILES -gt 0 ]; then
    echo -e "${YELLOW}Criando issue: Cobertura de Testes${NC}"
    ISSUE_URL=$(gh issue create \
        --title "🧪 Adicionar testes para $CURRENT_BRANCH" \
        --body "## Contexto
Adicionar testes unitários e de integração para as mudanças da PR #$PR_NUMBER.

## Arquivos que Precisam de Testes
- React/TSX: $TSX_FILES arquivo(s)
- TypeScript: $TS_FILES arquivo(s)

## Checklist
- [ ] Testes unitários para componentes React
- [ ] Testes de integração
- [ ] Testes de acessibilidade
- [ ] Coverage ≥ 80%

## PR Relacionada
#$PR_NUMBER" \
        --label "testing,enhancement")
    
    ISSUES_CREATED=$((ISSUES_CREATED + 1))
    echo -e "${GREEN}✅ Issue criada: $ISSUE_URL${NC}"
fi

# Issue 3: Documentação
if [ $COMMIT_COUNT -gt 2 ]; then
    echo -e "${YELLOW}Criando issue: Documentação${NC}"
    ISSUE_URL=$(gh issue create \
        --title "📚 Documentar mudanças de $CURRENT_BRANCH" \
        --body "## Contexto
Atualizar documentação relacionada às mudanças da PR #$PR_NUMBER.

## Itens de Documentação
- [ ] Atualizar README se necessário
- [ ] Documentar novos componentes
- [ ] Atualizar guia de contribuição
- [ ] Adicionar exemplos de uso

## Seções Modificadas
$(echo "$SECTIONS" | sed 's/^/- /')

## PR Relacionada
#$PR_NUMBER" \
        --label "documentation")
    
    ISSUES_CREATED=$((ISSUES_CREATED + 1))
    echo -e "${GREEN}✅ Issue criada: $ISSUE_URL${NC}"
fi

# Issue 4: Performance
if [ $ASTRO_FILES -gt 2 ] || [ $TSX_FILES -gt 2 ]; then
    echo -e "${YELLOW}Criando issue: Auditoria de Performance${NC}"
    ISSUE_URL=$(gh issue create \
        --title "⚡ Auditoria de performance para $CURRENT_BRANCH" \
        --body "## Contexto
Verificar impacto de performance das mudanças da PR #$PR_NUMBER.

## Checklist de Performance
- [ ] Lighthouse score ≥ 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Bundle size < 50KB gzipped
- [ ] Imagens otimizadas (Cloudinary)
- [ ] Lazy loading implementado

## Arquivos Críticos
- Astro: $ASTRO_FILES arquivo(s)
- React: $TSX_FILES arquivo(s)

## PR Relacionada
#$PR_NUMBER" \
        --label "performance,priority-medium")
    
    ISSUES_CREATED=$((ISSUES_CREATED + 1))
    echo -e "${GREEN}✅ Issue criada: $ISSUE_URL${NC}"
fi

# Resumo final
echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✨ Processo concluído com sucesso!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}📊 Resumo:${NC}"
echo -e "  ${GREEN}✓${NC} PR criada: $PR_URL"
echo -e "  ${GREEN}✓${NC} Issues criadas: $ISSUES_CREATED"
echo -e "  ${GREEN}✓${NC} Commits incluídos: $COMMIT_COUNT"
echo -e "  ${GREEN}✓${NC} Branch: $CURRENT_BRANCH"
echo -e "\n${YELLOW}📌 Próximos passos:${NC}"
echo -e "  1. Aguardar Vercel criar o deploy preview"
echo -e "  2. Testar o preview deployment"
echo -e "  3. Solicitar code review"
echo -e "  4. Endereçar issues criadas"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
