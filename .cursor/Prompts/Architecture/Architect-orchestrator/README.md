# Arquitetura de Sistemas com IA

Conceitos e padrões arquiteturais para construir sistemas inteligentes usando IA em IDEs e ambientes de desenvolvimento.

---

## O Que É Esta Seção

Esta pasta contém **documentos conceituais e arquiteturais** que explicam:

- Como estruturar sistemas com IA
- Padrões de design para agentes e assistentes
- Modelos mentais para coordenação de tarefas
- Fluxos de controle e validação

**Diferença entre `arquitetura/` e `tecnicas/`:**

| Aspecto  | `tecnicas/`           | `arquitetura/`         |
| -------- | --------------------- | ---------------------- |
| Foco     | Como fazer (práticas) | Por que fazer (teoria) |
| Conteúdo | Templates prontos     | Conceitos e modelos    |
| Uso      | Copiar e colar        | Entender e aplicar     |
| Nível    | Tático                | Estratégico            |

---

## Documentos Disponíveis

### [Arquitetura Orchestrator-Worker](./Arquitetura-Orchestrator-Worker.md)

**Tema:** Padrão Orchestrator–Worker para coordenação de agentes IA

**O que você aprende:**

- Modelo mental Orchestrator–Worker
- Como aplicar em IDEs (Cursor)
- Fluxo com Guardrails e validação
- Mapeamento para técnicas de prompt

**Quando usar:**

- Desenhar sistemas multi-agente
- Estruturar fluxos complexos
- Entender como técnicas se conectam
- Prevenir execução descontrolada

**Conceitos relacionados:**

- Prompt Chaining (etapas sequenciais)
- Guardrails (validação e limites)
- Role Prompting (definir workers)
- Reflection (validação de output)

---

## Como Usar Estes Documentos

### 1. **Leia Primeiro**

Entenda os conceitos antes de aplicar técnicas específicas.

### 2. **Relacione com Técnicas**

Veja como as técnicas de prompt se encaixam nos padrões arquiteturais.

### 3. **Adapte ao Contexto**

Use os conceitos para desenhar seus próprios fluxos.

### 4. **Combine com Comandos**

Traduza arquitetura em comandos executáveis (`.cursor/commands/`).

---

## Relação com Outras Seções

```
.cursor/prompts/
├── arquitetura/          ← Você está aqui
│   ├── README.md         (este arquivo)
│   └── Orchestrator-Worker.md
│
└── tecnicas/             ← Templates práticos
    ├── Prompt-Chaining.md
    ├── Prompt-Guardrails.md
    ├── Prompt-Role.md
    └── ...
```

**Fluxo recomendado:**

1. Leia `arquitetura/` para entender **o modelo mental**
2. Consulte `tecnicas/` para ver **como implementar**
3. Use `commands/` para **executar na prática**

---

## Exemplo de Aplicação

### Cenário: Implementar Feature Complexa

**1. Modelo Mental (Arquitetura):**

```
Orchestrator coordena:
- Worker: Análise de requisitos
- Worker: Planejamento de implementação
- Worker: Execução de código
- Worker: Validação e testes
```

**2. Técnicas Aplicadas:**

```
Role Prompting → Define cada worker
Prompt Chaining → Conecta as etapas
Guardrails → Valida regras em cada etapa
Reflection → Revisa output de cada worker
```

**3. Comando Executável:**

```
/implement-feature
(comando que implementa o padrão acima)
```

---

## Quando Consultar Esta Seção

| Situação                             | Documento           |
| ------------------------------------ | ------------------- |
| Desenhando sistema multi-agente      | Orchestrator-Worker |
| Estruturando fluxo complexo          | Orchestrator-Worker |
| Entendendo como técnicas se conectam | Orchestrator-Worker |
| Querendo evitar execução caótica     | Orchestrator-Worker |

---

## Próximos Conceitos (Futuro)

Possíveis documentos arquiteturais a adicionar:

- **Padrões de Validação** - Como garantir qualidade de output
- **Design de Fluxos** - Estratégias para estruturar processos
- **Controle de Estado** - Gestão de contexto entre etapas
- **Error Handling** - Tratamento de falhas em agentes
- **Observability** - Rastreabilidade e debugging de fluxos

---

## Dica Final

> **Arquitetura antes de execução.**
>
> Entenda o modelo mental primeiro. As técnicas são ferramentas para implementar a arquitetura, não o contrário.

Se você está perdido em como estruturar um sistema complexo, comece lendo os documentos desta pasta antes de escolher técnicas específicas.
