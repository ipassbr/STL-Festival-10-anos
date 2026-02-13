# 🎯 Cursor Commands

Comandos customizados para o Cursor IDE que facilitam workflows comuns do projeto.

## 📋 Comandos Disponíveis

### 🚀 Create PR

**Descrição:** Cria Pull Request técnica com issues automaticamente

**Como usar:**

1. Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no macOS)
2. Digite "Create PR"
3. Pressione Enter

**Ou via terminal integrado:**

```bash
bash .cursor/commands/create-pr.sh
```

**O que o comando faz:**

- ✅ Valida ambiente automaticamente
- ✅ Executa `scripts/create-pr.sh`
- ✅ Cria PR com descrição técnica completa
- ✅ Gera issues contextualizadas
- ✅ Mostra resultado formatado no terminal

**Pré-requisitos:**

- GitHub CLI (`gh`) instalado e autenticado
- Branch deve ser feature/bugfix/hotfix (não main/develop)
- Script principal em `scripts/create-pr.sh`

**Atalho:** `Ctrl+Shift+P` → "Create PR"

---

## 📁 Estrutura

```
.cursor/commands/
├── create-pr.sh      🚀 Script executável
├── create-pr.json    ⚙️  Configuração do comando
└── README.md         📖 Esta documentação
```

---

## 🔧 Como Funciona

### 1. Configuração JSON (`create-pr.json`)

Define o comando no Cursor IDE:

- Nome e descrição
- Comando a executar
- Ícone e categoria
- Tags para busca
- Requisitos (Git, GitHub)

### 2. Script Bash (`create-pr.sh`)

Wrapper que:

1. Valida ambiente
2. Executa script principal
3. Formata output
4. Trata erros

### 3. Script Principal (`scripts/create-pr.sh`)

Sistema completo de automação de PRs

---

## 🎨 Personalização

### Adicionar Novos Comandos

Crie dois arquivos para cada comando:

#### 1. Script executável: `.cursor/commands/meu-comando.sh`

```bash
#!/bin/bash
# Seu comando aqui
echo "Executando meu comando..."
```

#### 2. Configuração JSON: `.cursor/commands/meu-comando.json`

```json
{
  "name": "Meu Comando",
  "description": "Descrição do comando",
  "command": "bash .cursor/commands/meu-comando.sh",
  "icon": "🎯",
  "category": "Custom",
  "tags": ["tag1", "tag2"],
  "cwd": "${workspaceFolder}",
  "showInTerminal": true
}
```

#### 3. Tornar executável

```bash
chmod +x .cursor/commands/meu-comando.sh
```

---

## 🚀 Comandos Úteis

### Via Terminal Integrado

```bash
# Criar PR
bash .cursor/commands/create-pr.sh

# Listar comandos disponíveis
ls -1 .cursor/commands/*.sh

# Ver configurações
cat .cursor/commands/*.json
```

### Via Command Palette

1. `Ctrl+Shift+P` (ou `Cmd+Shift+P`)
2. Digite o nome do comando
3. Enter

---

## 📚 Referências

- [Documentação do Sistema de PRs](../../scripts/README.md)
- [Guia Rápido](../../scripts/QUICKSTART.md)
- [Exemplos Práticos](../../scripts/EXAMPLES.md)
- [Validação e Troubleshooting](../../scripts/VALIDATION.md)

---

## 🎯 Workflow Recomendado

### Criar Feature com PR

```bash
# 1. Criar branch
git checkout -b feature/nova-funcionalidade develop

# 2. Fazer mudanças
# ... trabalho no código ...

# 3. Commitar
git add .
git commit -m "feat(scope): adiciona funcionalidade"

# 4. Criar PR via Cursor Command
# Ctrl+Shift+P → "Create PR"

# 5. Aguardar Vercel preview e code review
```

### Criar Bugfix com PR

```bash
# 1. Criar branch
git checkout -b bugfix/corrige-bug develop

# 2. Corrigir bug
# ... fazer correção ...

# 3. Commitar
git add .
git commit -m "fix(scope): corrige bug X"

# 4. Criar PR via Cursor Command
# Ctrl+Shift+P → "Create PR"
```

---

## 💡 Dicas

### 1. Atalho de Teclado Personalizado

Adicione ao seu `keybindings.json`:

```json
{
  "key": "ctrl+alt+p",
  "command": "workbench.action.terminal.sendSequence",
  "args": {
    "text": "bash .cursor/commands/create-pr.sh\n"
  }
}
```

### 2. Alias no Terminal

Adicione ao seu `~/.bashrc` ou `~/.zshrc`:

```bash
alias cpr='bash .cursor/commands/create-pr.sh'
```

Agora você pode digitar apenas `cpr` no terminal!

### 3. Task no VS Code/Cursor

Adicione ao `.vscode/tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Create PR",
      "type": "shell",
      "command": "bash .cursor/commands/create-pr.sh",
      "group": "build",
      "presentation": {
        "reveal": "always",
        "panel": "dedicated"
      },
      "problemMatcher": []
    }
  ]
}
```

---

## 🔍 Debugging

### Comando não aparece na Command Palette

1. Recarregue o Cursor: `Ctrl+Shift+P` → "Reload Window"
2. Verifique se o JSON está válido: `cat .cursor/commands/create-pr.json | jq`
3. Verifique permissões: `ls -lh .cursor/commands/`

### Comando falha ao executar

1. Execute manualmente para ver erro completo:

   ```bash
   bash .cursor/commands/create-pr.sh
   ```

2. Valide ambiente:

   ```bash
   ./scripts/validate.sh
   ```

3. Verifique logs no terminal integrado

---

## 📊 Estatísticas

| Comando   | Tempo Médio | Ações             |
| --------- | ----------- | ----------------- |
| Create PR | 30s         | 1 PR + 0-4 issues |

**Economia de tempo:** ~95% (de 10-15min para 30s)

---

## 🤝 Contribuindo

Quer adicionar novos comandos?

1. Crie o script `.sh`
2. Crie o config `.json`
3. Torne executável: `chmod +x`
4. Teste localmente
5. Documente neste README
6. Abra PR

---

## 📝 Changelog

### v1.0.0 (2026-02-12)

- ✨ Comando "Create PR" inicial
- 📖 Documentação completa
- 🎯 Integração com Command Palette
- ✅ Validação automática de ambiente

---

**Criado para:** STL Festival 10 Anos  
**Versão:** 1.0.0  
**Data:** 2026-02-12

🚀 **Happy commanding!**
