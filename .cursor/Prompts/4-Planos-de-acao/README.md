# 🏗️ Hierarquia e Estratégia dos 4 Planos de Ação em IA

Este diretório contém os prompts para os **4 níveis de Planos de Ação** em workflows de desenvolvimento com IA, organizados hierarquicamente do nível mais estratégico (macro) ao mais operacional (micro).

---

## 📊 Visão Geral da Hierarquia

Os planos de ação em um workflow de desenvolvimento com IA são divididos em diferentes níveis de granularidade e tipos de controle, servindo para organizar desde a estratégia macro até a execução técnica guiada.

### 🔄 Fluxo de Trabalho Ideal

```
┌─────────────────────────────────────────────────┐
│ 1. Plano de Ação Global (Alto Nível)          │
│    Define: O QUÊ será feito                    │
│    Foco: Ordem estratégica e macroetapas       │
└─────────────────┬───────────────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────────────┐
│ 2. Plano Baseado em Etapa/Tópico (Baixo Nível) │
│    Define: COMO será implementado tecnicamente │
│    Foco: Detalhes granulares de implementação   │
└─────────────────┬───────────────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────────────┐
│ 3. Plano Baseado no Prompt (Workflow/Controle) │
│    Define: Sequência de raciocínio lógico       │
│    Foco: Passos verificáveis antes da execução  │
└─────────────────┬───────────────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────────────┐
│ 4. Plano Controlado pela IA (Rastreio Interno) │
│    Define: Checklists automáticos da IA         │
│    Foco: Tracking interno durante execução      │
└─────────────────────────────────────────────────┘
```

---

## 📋 Os 4 Níveis Detalhados

### 1️⃣ Plano de Ação Global (Visão de Alto Nível)

**Localização**: `Global-action/Promt-Global-action.md`

- **Nível**: Alto (Macro)
- **Foco**: Visão estratégica do projeto ou sprint como um todo
- **Objetivo**: Definir ordem de desenvolvimento e macroetapas (ex: setup de ambiente, bootstrap de servidor, rotas)
- **Responsabilidade**: Exclusiva do desenvolvedor (explícita e intencional)
- **Quando usar**: Início do projeto, grandes refatorações, decisões arquiteturais

**Exemplo de uso**: "Preciso construir um e-commerce completo. Como estruturar?"

---

### 2️⃣ Plano de Ação Baseado na Etapa ou Tópico (Visão de Baixo Nível)

**Localização**: `Plano-de-acao-baseada-etapa-topico/Prompt-Etapa-Topico.md`

- **Nível**: Baixo (Micro/Granular)
- **Foco**: Como uma etapa técnica específica será desenvolvida
- **Objetivo**: Detalhar itens granulares dentro de uma funcionalidade (CRUD, processamento de dados, gerenciamento de sessões)
- **Responsabilidade**: Também do desenvolvedor (mantém controle técnico)
- **Quando usar**: Implementar uma feature específica, resolver um bug complexo
- **Ferramenta complementar**: Plan Mode do Cursor

**Exemplo de uso**: "Implementar a macroetapa 1: Sistema de Autenticação. Quais são as tasks técnicas?"

---

### 3️⃣ Plano de Ação Baseado no Prompt (Nível de Workflow/Controle)

**Localização**: `Plano-de-acao-baseado-prompt/Prompt-Workflow-Controle.md`

- **Nível**: Workflow/Controle
- **Foco**: Instruções no prompt que forçam a IA a seguir um raciocínio lógico antes de executar
- **Objetivo**: Fazer a IA esboçar uma sequência de passos específicos e verificáveis baseados em estratégia definida
- **Controle**: Permite definir níveis de autonomia (pedir permissão antes de avançar, passar controle ao humano em dúvidas)
- **Quando usar**: Quando precisa garantir que a IA siga um processo específico antes de agir

**Exemplo de uso**: "Antes de implementar, liste os passos que você seguirá e peça confirmação"

---

### 4️⃣ Plano de Ação Controlado pela IA (Nível de Rastreio Interno)

**Nota**: Este nível é gerenciado automaticamente por ferramentas modernas (Windsurf, Cloud Code, Cursor)

- **Nível**: Rastreio Interno
- **Foco**: Checklists e anotações automáticas geradas pela própria IA
- **Objetivo**: Manter linha de raciocínio durante longas sessões de programação
- **Limitação**: Não substitui o planejamento do desenvolvedor. A IA não possui dimensão macro e pode tomar decisões desconexas sem guia externo
- **Quando usar**: Automático em ferramentas modernas, mas deve ser complementado pelos níveis 1-3

---

## 🎯 Diferença Crucial: Planos vs. Tarefas

- **Planos**: Dão a visão do **"O QUÊ"** será feito
- **Tarefas**: Determinam tecnicamente o **"COMO"** (detalhes de baixo nível e exemplos de código)

Ambos são essenciais para manter a sustentabilidade do software a longo prazo e garantir que o desenvolvedor não perca o controle caso o contexto da IA seja reiniciado.

---

## 📚 Como Usar Esta Hierarquia

1. **Inicie com o Plano Global** (`Global-action/`)
   - Defina a estratégia macro do projeto
   - Estabeleça ordem de desenvolvimento
   - Identifique macroetapas

2. **Detalhe com Plano de Etapa/Tópico** (`Plano-de-acao-baseada-etapa-topico/`)
   - Para cada macroetapa, crie um plano técnico detalhado
   - Use em conjunto com Plan Mode do Cursor
   - Defina tasks específicas

3. **Controle com Plano Baseado no Prompt** (`Plano-de-acao-baseado-prompt/`)
   - Adicione instruções específicas quando necessário
   - Defina níveis de autonomia
   - Estabeleça pontos de validação

4. **Acompanhe com Rastreio da IA**
   - Use recursos nativos das ferramentas
   - Mas sempre mantenha controle através dos níveis 1-3

---

## ✅ Benefícios desta Abordagem

- ✅ **Evita "vibe coding"**: Programação sem direção clara
- ✅ **Mantém controle**: Desenvolvedor não perde autonomia
- ✅ **Sustentabilidade**: Software permanece organizado a longo prazo
- ✅ **Contexto preservado**: Mesmo se contexto da IA reiniciar, planos permanecem
- ✅ **Escalabilidade**: Funciona para projetos pequenos e grandes

---

## 📖 Referências

Esta hierarquia é baseada em estudos sobre workflows eficientes de desenvolvimento com IA, enfatizando a importância de manter o desenvolvedor no controle estratégico enquanto aproveita a capacidade técnica da IA para execução.
