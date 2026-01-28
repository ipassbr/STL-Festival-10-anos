````markdown
# Arquitetura Orchestrator–Worker explicada com Mermaid

Este documento explica a **arquitetura Orchestrator–Worker** usando **diagramas Mermaid**, aplicada ao contexto de **IDEs com IA (ex: Cursor)** e sistemas agentic.  
A ideia é sair do abstrato e tornar o fluxo **visual, verificável e controlável**.

---

## 1️⃣ Visão macro — Modelo mental Orchestrator–Worker

Diagrama conceitual mínimo, independente de ferramenta.

```mermaid
flowchart TD
    U[Usuário / Dev] --> O[Orchestrator]

    O --> W1[Worker: Análise]
    O --> W2[Worker: Planejamento]
    O --> W3[Worker: Execução]
    O --> W4[Worker: Revisão]

    W1 --> O
    W2 --> O
    W3 --> O
    W4 --> O

    O --> R[Resposta Final]
```
````

### Leitura correta do diagrama

- O **Orchestrator** é o único ponto de entrada e saída.
- Workers **não conversam entre si**.
- Workers **não decidem próximos passos**.
- Toda decisão volta para o Orchestrator.

Esse é o padrão-base de:

- Master–Worker
- Planner–Executor
- Agentic AI moderno

---

## 2️⃣ Fluxo real dentro de uma IDE (Cursor / IDE com IA)

Agora o mesmo conceito aplicado ao uso prático dentro da IDE.

```mermaid
sequenceDiagram
    participant U as Usuário
    participant O as Orchestrator (Prompt Base / Rules)
    participant A as Worker - Análise
    participant P as Worker - Planejamento
    participant E as Worker - Execução
    participant V as Worker - Validação

    U->>O: Solicitação técnica
    O->>A: Analisar contexto e requisitos
    A-->>O: Resumo + riscos

    O->>P: Definir estratégia e passos
    P-->>O: Plano estruturado

    O->>E: Executar conforme o plano
    E-->>O: Resultado bruto

    O->>V: Validar regras e qualidade
    V-->>O: OK ou ajustes

    O-->>U: Resposta final consolidada
```

### Tradução direta para o Cursor

- **Orchestrator** → system prompt / rules
- **Workers** → roles, etapas, sub-prompts
- **Sequência** → Prompt Chaining
- **Validação** → Reflection / Verify

Nada disso exige código adicional — é **arquitetura cognitiva via prompt**.

---

## 3️⃣ Versão profissional — com Guardrails e Enforcement

Aqui entra o nível que evita alucinação, drift e execução indevida.

```mermaid
flowchart TD
    U[Usuário] --> O[Orchestrator]

    O -->|check escopo| G[Guardrails]
    G -->|ok| O
    G -->|violação| ERR[Erro Controlado]

    O --> A[Worker: Análise]
    A --> O

    O --> P[Worker: Planejamento]
    P --> O

    O -->|plano aprovado?| D{Decisão}
    D -->|não| P
    D -->|sim| E[Worker: Execução]

    E --> O
    O --> V[Worker: Validação]
    V --> O

    O --> R[Resposta Final]
```

### Pontos críticos

- **Guardrails não são workers**
- Funcionam como um _firewall cognitivo_
- Se regras são violadas, o fluxo **não continua**
- O Orchestrator controla **quando executar** e **quando parar**

Esse padrão aparece em:

- LangGraph
- Plan-and-Execute agents
- Sistemas internos de agentes LLM

---

## 4️⃣ Mapeamento direto: Arquitetura → Cursor

| Conceito Arquitetural | Implementação no Cursor     |
| --------------------- | --------------------------- |
| Orchestrator          | Prompt base / rules         |
| Worker                | Role Prompting              |
| Sequência             | Prompt Chaining             |
| Validação             | Reflection / Verify         |
| Guardrails            | Constraint-based / Rules    |
| Decisão               | Perguntar antes de executar |

Você não “programa” isso — você **desenha comportamento**.

---

## 5️⃣ Regra de ouro

> **Se o modelo decide sozinho o que fazer a seguir,
> você NÃO tem um orchestrator.
> Você tem um improvisador.**

O Mermaid ajuda porque obriga a responder:

- Quem decide?
- Quem executa?
- Quem valida?
- Onde o fluxo pode parar?

---
