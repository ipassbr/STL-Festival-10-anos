# 📚 Índice da Documentação - Sistema de PRs Automatizadas

Bem-vindo ao sistema de criação automatizada de Pull Requests!

Este índice te ajuda a encontrar rapidamente o que você precisa.

---

## 🚀 Comece Aqui

### Para Primeira Vez

```
1. QUICKSTART.md  →  2. validate.sh  →  3. npm run pr:create
   (2 minutos)         (30 segundos)        (Primeira PR!)
```

### Para Uso Diário

```bash
npm run pr:create
```

Simples assim! 🎉

---

## 📖 Documentação por Necessidade

### 🆕 "Nunca usei isso antes"

👉 **[QUICKSTART.md](./QUICKSTART.md)** (2 minutos de leitura)

- Setup ultra-rápido
- Comandos essenciais
- Primeiro uso guiado

### ✅ "Quero validar se está tudo OK"

👉 **Execute:** `./scripts/validate.sh` (30 segundos)

- Validação automática completa
- Identifica problemas
- Sugere correções

### 💡 "Quero ver exemplos práticos"

👉 **[EXAMPLES.md](./EXAMPLES.md)** (10 minutos de leitura)

- 5 cenários reais
- Outputs completos
- Workflows típicos

### 📚 "Quero entender tudo em detalhes"

👉 **[README.md](./README.md)** (15 minutos de leitura)

- Documentação completa
- Todos os recursos
- Troubleshooting extensivo

### 🔧 "Encontrei um problema"

👉 **[VALIDATION.md](./VALIDATION.md)** (conforme necessário)

- Troubleshooting detalhado
- Soluções para erros comuns
- Guia de diagnóstico

### 📝 "Quero ver o que mudou"

👉 **[CHANGELOG.md](./CHANGELOG.md)** (5 minutos de leitura)

- Histórico de versões
- Funcionalidades adicionadas
- Roadmap futuro

---

## 📂 Estrutura Completa

```
scripts/
│
├── 🚀 EXECUTÁVEIS
│   ├── create-pr.sh        ⭐ Script principal
│   └── validate.sh         ✅ Validação
│
├── 📖 DOCUMENTAÇÃO (leia nesta ordem)
│   ├── 1. QUICKSTART.md    🏁 Comece aqui!
│   ├── 2. README.md        📚 Referência completa
│   ├── 3. EXAMPLES.md      💡 Exemplos práticos
│   ├── 4. VALIDATION.md    🔧 Troubleshooting
│   ├── 5. CHANGELOG.md     📝 Histórico
│   └── 6. INDEX.md         📑 Este arquivo
│
└── 📊 ESTATÍSTICAS
    Total: 8 arquivos
    Código: ~12KB
    Docs: ~36KB
    Total: ~48KB
```

---

## 🎯 Guias por Tarefa

### Tarefa: "Criar minha primeira PR"

```bash
# 1. Validar instalação (primeira vez)
./scripts/validate.sh

# 2. Criar PR
npm run pr:create

# 3. Pronto! 🎉
```

**Leitura recomendada:** [QUICKSTART.md](./QUICKSTART.md)

---

### Tarefa: "Criar PR de feature completa"

```bash
# Seu código já está commitado
npm run pr:create

# O script vai:
# - Criar PR com descrição técnica
# - Criar 4 issues (Code Review, Testes, Docs, Performance)
# - Linkar tudo automaticamente
```

**Leitura recomendada:** [EXAMPLES.md](./EXAMPLES.md) → Cenário 1

---

### Tarefa: "Criar PR de bugfix simples"

```bash
# Commitar o bugfix
git add .
git commit -m "fix(component): corrige bug X"

# Criar PR
npm run pr:create

# Nenhuma issue será criada (bugfix simples)
```

**Leitura recomendada:** [EXAMPLES.md](./EXAMPLES.md) → Cenário 2

---

### Tarefa: "Resolver erro no script"

```bash
# 1. Executar validação
./scripts/validate.sh

# 2. Ver o erro e sugestão de correção

# 3. Seguir as instruções
```

**Leitura recomendada:** [VALIDATION.md](./VALIDATION.md)

---

### Tarefa: "Entender como funciona"

**Leitura sequencial:**

1. [QUICKSTART.md](./QUICKSTART.md) - Visão geral (2 min)
2. [README.md](./README.md) - Detalhes (15 min)
3. [EXAMPLES.md](./EXAMPLES.md) - Casos práticos (10 min)

---

### Tarefa: "Customizar o script"

**Leitura recomendada:**

1. [README.md](./README.md) - Estrutura da PR
2. [create-pr.sh](./create-pr.sh) - Código-fonte (bem comentado)
3. [CHANGELOG.md](./CHANGELOG.md) - Roadmap

---

## 🔍 Busca Rápida

### Por Tópico

| Tópico             | Arquivo       | Seção             |
| ------------------ | ------------- | ----------------- |
| Instalação         | QUICKSTART.md | Pré-requisitos    |
| Primeiro uso       | QUICKSTART.md | Uso básico        |
| Comandos           | README.md     | Como usar         |
| Erros              | VALIDATION.md | Troubleshooting   |
| Exemplos           | EXAMPLES.md   | Todos os cenários |
| Issues automáticas | README.md     | Sistema de Issues |
| Template de PR     | CHANGELOG.md  | Template de PR    |
| Workflow completo  | EXAMPLES.md   | Workflow completo |
| Validação          | VALIDATION.md | Checklist         |
| GitHub CLI         | README.md     | Pré-requisitos    |
| Commits            | README.md     | Boas práticas     |
| Roadmap            | CHANGELOG.md  | Roadmap Futuro    |

### Por Erro

| Erro                   | Solução em                                           |
| ---------------------- | ---------------------------------------------------- |
| "gh command not found" | VALIDATION.md → Problema: gh command not found       |
| "não está autenticado" | VALIDATION.md → Problema: GitHub CLI não autenticado |
| "Permission denied"    | VALIDATION.md → Problema: Permission denied          |
| "Você está em main"    | VALIDATION.md → Problema: Script não funciona        |
| "No commits"           | VALIDATION.md → Problema: No commits between         |

---

## 📊 Métricas de Documentação

### Níveis de Profundidade

```
QUICKSTART.md    ████░░░░░░  2/10  (Superficial)  ← Comece aqui
README.md        ████████░░  8/10  (Profundo)
EXAMPLES.md      ██████░░░░  6/10  (Prático)
VALIDATION.md    ███████░░░  7/10  (Técnico)
CHANGELOG.md     █████░░░░░  5/10  (Histórico)
```

### Tempo de Leitura

| Arquivo       | Tempo    | Quando Ler               |
| ------------- | -------- | ------------------------ |
| QUICKSTART.md | 2 min    | Primeira vez             |
| validate.sh   | 30s      | Antes de usar            |
| EXAMPLES.md   | 10 min   | Para aprender padrões    |
| README.md     | 15 min   | Para referência completa |
| VALIDATION.md | variável | Quando houver problemas  |
| CHANGELOG.md  | 5 min    | Para ver histórico       |
| INDEX.md      | 3 min    | Para navegar             |

---

## 🎓 Caminhos de Aprendizado

### 🥉 Nível Iniciante (30 minutos)

```
1. QUICKSTART.md          (2 min)
2. ./scripts/validate.sh  (30s)
3. npm run pr:create      (teste real)
4. EXAMPLES.md (cenário 1) (5 min)
```

**Resultado:** Você consegue criar PRs básicas

---

### 🥈 Nível Intermediário (1 hora)

```
1. Nível Iniciante         (30 min)
2. README.md completo      (15 min)
3. EXAMPLES.md completo    (10 min)
4. Criar 3 PRs de teste    (5 min)
```

**Resultado:** Você domina todos os cenários

---

### 🥇 Nível Avançado (2 horas)

```
1. Nível Intermediário     (1h)
2. VALIDATION.md completo  (15 min)
3. CHANGELOG.md            (5 min)
4. Ler create-pr.sh        (30 min)
5. Customizar script       (10 min)
```

**Resultado:** Você pode modificar e melhorar o script

---

## 🔗 Links Úteis

### Documentação Externa

- [GitHub CLI Manual](https://cli.github.com/manual/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Shell Script Guide](https://google.github.io/styleguide/shellguide.html)

### Dentro do Projeto

- [CLAUDE.md](../CLAUDE.md) - Convenções do projeto
- [.cursor/rules/](../.cursor/rules/) - Regras do Cursor

---

## 💡 Dicas Pro

### 1. Alias para Velocidade

```bash
# Adicione ao seu ~/.bashrc ou ~/.zshrc
alias pr='npm run pr:create'

# Agora você pode fazer:
pr
```

### 2. Validação Pré-Commit

```bash
# Adicione ao .husky/pre-push
./scripts/validate.sh || exit 1
```

### 3. Mensagens de Commit Melhores

```bash
# Use este template
git config commit.template .gitmessage

# .gitmessage:
# type(scope): subject
#
# body (opcional)
#
# footer (opcional)
```

### 4. Ver PR no Browser Após Criar

```bash
# Modifique o final do create-pr.sh para:
gh pr view --web
```

---

## 📞 Suporte

### Antes de Pedir Ajuda

1. ✅ Execute `./scripts/validate.sh`
2. ✅ Consulte [VALIDATION.md](./VALIDATION.md)
3. ✅ Veja [EXAMPLES.md](./EXAMPLES.md)

### Como Pedir Ajuda

```bash
# Incluir na sua mensagem:
1. Output de: ./scripts/validate.sh
2. Comando que você executou
3. Erro completo
4. Sistema operacional
5. Versão do gh
```

### Onde Pedir Ajuda

- 🐛 Bug? → Abrir issue com label `bug`
- 💡 Sugestão? → Abrir issue com label `enhancement`
- ❓ Dúvida? → Abrir discussão no GitHub

---

## 🎯 Checklist de Sucesso

Você dominou o sistema quando conseguir:

- [ ] Criar PR em < 30 segundos
- [ ] PR sempre com descrição completa
- [ ] Issues criadas automaticamente quando apropriado
- [ ] Zero erros de validação
- [ ] Entender output do script
- [ ] Resolver problemas sozinho usando VALIDATION.md
- [ ] Customizar templates (avançado)

---

## 🚀 Quick Commands

```bash
# Validar instalação
./scripts/validate.sh

# Criar PR
npm run pr:create

# Ver PRs abertas
gh pr list

# Ver issues
gh issue list

# Ver status de uma PR
gh pr status

# Ver checks de uma PR
gh pr checks

# Editar PR
gh pr edit <número>
```

---

## 📈 Próximos Passos

Após dominar o básico:

1. ⭐ Crie seu alias personalizado
2. 🎨 Customize os templates
3. 🔧 Adicione validações específicas do projeto
4. 📊 Contribua com melhorias
5. 📚 Documente casos de uso únicos

---

## 🎉 Conclusão

**Você tem tudo que precisa!**

```
QUICKSTART → validate.sh → npm run pr:create → Sucesso! 🎉
```

Comece agora:

```bash
cd scripts
cat QUICKSTART.md
```

---

**Criado com ❤️ para o time STL Festival**

**Versão:** 1.0.0  
**Atualizado:** 2026-02-12  
**Status:** ✅ Completo

🚀 **Happy automating!**
