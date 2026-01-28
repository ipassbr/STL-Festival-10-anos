# DEX - Developer Enforcement eXecutor

Sistema de enforcement e controle para desenvolvimento de software com IA no Cursor IDE.

---

## O Que É o DEX

DEX (Developer Enforcement eXecutor) é um **agente de enforcement** que atua como system prompt para garantir desenvolvimento disciplinado, seguro e aderente a regras.

**Propósito:**

- Interpretar comandos estruturados (/init, /do, /fix)
- Validar contexto e memória antes de executar
- Aplicar workflow LEAN obrigatório
- Prevenir ações não autorizadas
- Impor penalidades por violações

**Diferença entre DEX e `.cursor/commands/`:**

| Aspecto   | DEX                         | Commands                   |
| --------- | --------------------------- | -------------------------- |
| Tipo      | System prompt / Enforcement | Comandos pontuais          |
| Uso       | Ativo continuamente         | Executado via `/comando`   |
| Propósito | Controlar comportamento     | Executar ações específicas |
| Escopo    | Global (todas interações)   | Local (tarefa única)       |

---

## Como Usar

### 1. Como System Prompt

Cole o conteúdo de `DEX.md` nas configurações de system prompt do Cursor.

### 2. Como Referência em Rules

Adicione em `.cursor/rules/` para enforcement automático.

### 3. Comandos Reconhecidos

```
/init [contexto]  - Inicializar contexto de trabalho
/do [tarefa]      - Executar tarefa com validações
/fix [problema]   - Corrigir algo previamente analisado
```

---

## Técnicas de Prompt Implementadas

O DEX combina 7 técnicas de Prompt Engineering:

### 1. Role Prompting

**Arquivo:** [`../tecnicas/Prompt-Role.md`](../tecnicas/Prompt-Role.md)

**Implementação no DEX:**

```
ROLE
Você é o DEX (Developer Enforcement eXecutor)...
```

**Propósito:** Define identidade, expertise e comportamento do agente.

---

### 2. Guardrails Prompting

**Arquivo:** [`../tecnicas/Prompt-Guardrails.md`](../tecnicas/Prompt-Guardrails.md)

**Implementação no DEX:**

```
REGRAS DE ENFORCEMENT
- Comandos bloqueados
- Penalidades (-10 pts, -100 pts)
- Estados (Normal/Careful/Frozen)
```

**Propósito:** Aplicar regras imutáveis e restrições técnicas rígidas.

---

### 3. Controle Prompting

**Arquivo:** [`../tecnicas/Prompt-Controle.md`](../tecnicas/Prompt-Controle.md)

**Implementação no DEX:**

```
COMANDOS RECONHECIDOS
- /init, /do, /fix
Qualquer outro texto é entrada contextual
```

**Propósito:** Limitar a IA a comandos específicos, rejeitando outros.

---

### 4. Prompt Chaining

**Arquivo:** [`../tecnicas/Prompt-Chaining.md`](../tecnicas/Prompt-Chaining.md)

**Implementação no DEX:**

```
WORKFLOW LEAN (OBRIGATÓRIO)
1. read_file
2. edit_block
3. Mostrar DIFF
4. Aguardar aprovação
5. Continuar após aprovação
```

**Propósito:** Dividir execução em etapas sequenciais dependentes.

---

### 5. Reflection Prompting

**Arquivo:** [`../tecnicas/Prompt-Reflection.md`](../tecnicas/Prompt-Reflection.md)

**Implementação no DEX:**

```
3. Mostrar DIFF
4. Aguardar aprovação do usuário
```

**Propósito:** Validar mudanças antes de executar, permitindo revisão.

---

### 6. Chain-of-Thought (CoT)

**Arquivo:** [`../tecnicas/Prompt-CoT.md`](../tecnicas/Prompt-CoT.md)

**Implementação no DEX:**

```
PRE-FLIGHT CHECKLIST (OBRIGATÓRIO)
- [ ] Memory consultada
- [ ] Contexto confirmado
- [ ] Branch correta
```

**Propósito:** Forçar raciocínio explícito passo a passo antes de agir.

---

### 7. RAG Prompting

**Arquivo:** [`../tecnicas/Prompt-RAG.md`](../tecnicas/Prompt-RAG.md)

**Implementação no DEX:**

```
1. MEMORY & CONTEXT (RAG Process)
a) CONSULTAR MEMÓRIA
b) BUSCAR PADRÕES DO PROJETO
c) VALIDAR CONSISTÊNCIA
d) DECIDIR
```

**Propósito:** Usar contexto do projeto e memória antes de executar.

---

## Como Funciona

### Fluxo de Execução

```
1. Usuário envia comando (/init, /do, /fix)
   │
2. DEX exibe PAINEL (STATUS + RESUMO)
   │
3. Executa PRE-FLIGHT CHECKLIST
   │
4. Consulta MEMORY & CONTEXT (RAG)
   │
5. Valida regras de ENFORCEMENT
   │
6. Se OK: executa WORKFLOW LEAN
   │   ├─► read_file
   │   ├─► edit_block
   │   ├─► Mostra DIFF
   │   ├─► Aguarda aprovação
   │   └─► Continua
   │
7. Se violação: aplica PENALIDADE
   │
8. Retorna ao estado apropriado
```

### Estados Operacionais

| Estado      | Condição      | Comportamento                  |
| ----------- | ------------- | ------------------------------ |
| **Normal**  | 0-1 violações | Operação padrão                |
| **Careful** | 2 violações   | Tudo exige confirmação         |
| **Frozen**  | 3+ violações  | Apenas respostas, sem execução |

**Reset:** 5 interações 100% corretas voltam para Normal.

### Sistema de Penalidades

| Violação                   | Penalidade       |
| -------------------------- | ---------------- |
| Não consultar memória      | -10 pontos       |
| Executar comando bloqueado | -10 a -50 pontos |
| Mudar contexto sem branch  | -100 pontos      |
| Violação de regra LEAN     | Progressiva      |

---

## Quando Usar

### Cenários Recomendados

**Use DEX quando:**

- Projetos críticos com regras rígidas
- Desenvolvimento em produção
- Equipes que precisam de consistência
- Ambientes com compliance
- Prevenção de ações não autorizadas
- Projetos com padrões obrigatórios

**NÃO use DEX quando:**

- Prototipagem rápida sem restrições
- Exploração livre de ideias
- Desenvolvimento pessoal sem regras
- Tarefas triviais e únicas

---

## Relação com Arquitetura

O DEX implementa o padrão **Orchestrator** da arquitetura Orchestrator-Worker:

**Ver:** [`../arquitetura/Arquitetura-Orchestrator-Worker.md`](../arquitetura/Arquitetura-Orchestrator-Worker.md)

**Papel do DEX:**

- Orchestrator: coordena e valida
- Guardrails: limita espaço de ação
- Workers: comandos executam tarefas específicas

---

## Estrutura do Sistema

```
.cursor/prompts/DEX/
├── DEX.md          # Prompt de enforcement (use como system prompt)
└── README.md       # Este arquivo (documentação)
```

---

## Customização

Para adaptar o DEX ao seu projeto:

1. **Comandos Bloqueados** (linha 52-59)
   - Adicione/remova comandos conforme necessário

2. **Regras LEAN** (linha 70-74)
   - Ajuste limites de linhas
   - Adapte restrições técnicas

3. **Trigger Words** (linha 85-92)
   - Adicione palavras que ativam validações extras

4. **Penalidades** (linha 43, 50, 74)
   - Ajuste valores conforme severidade desejada

---

## Exemplo de Uso

```
Usuário: /init contexto de microserviço de autenticação

DEX:
STATUS
- Branch: main
- Mode: Normal
- Violations: 0/3

RESUMO
- Memory: Consultada
- Context: Verificado
- Branch: Correta
- Score: 100/100

Contexto inicializado: Microserviço de autenticação
Pronto para receber comandos /do ou /fix.

---

Usuário: /do criar middleware de validação JWT em middleware/auth.ts

DEX:
[Executa checklist]
[Consulta memória e padrões]
[Executa workflow LEAN]
1. read_file middleware/auth.ts
2. [propõe edição]
3. DIFF:
   + função validateJWT(token)...
4. Aguardando sua aprovação para continuar...
```

---

## Dica Final

O DEX é um **sistema de controle**, não uma restrição criativa. Use-o para garantir qualidade e segurança, mas desative quando precisar de exploração livre.

Para entender melhor as técnicas implementadas, consulte a documentação em [`../tecnicas/`](../tecnicas/) e [`../arquitetura/`](../arquitetura/).
