# 🤖 PLANO DE AÇÃO CONTROLADO PELA IA — NÍVEL DE RASTREIO INTERNO

## 📌 Natureza deste Nível

⚠️ **ATENÇÃO**: Este nível é **gerenciado automaticamente** por ferramentas modernas de IA (Cursor, Windsurf, Cloud Code). **Não é um prompt para o desenvolvedor usar**, mas sim uma **documentação sobre o recurso nativo** dessas ferramentas.

---

## 🏗️ Contexto na Hierarquia

Este é o **Nível 4: Plano de Ação Controlado pela IA (Nível de Rastreio Interno)**.

**Hierarquia Completa**:

- **Nível 1 (Global)**: Desenvolvedor define O QUÊ (macroetapas)
- **Nível 2 (Etapa/Tópico)**: Desenvolvedor define COMO (tasks técnicas)
- **Nível 3 (Prompt)**: Desenvolvedor controla workflow de raciocínio
- **Nível 4 (Este)**: IA gerencia rastreio interno automaticamente

**⚠️ IMPORTANTE**: Este nível **NÃO SUBSTITUI** os níveis 1-3. Ele é complementar e deve ser usado **em conjunto** com o planejamento do desenvolvedor.

---

## 🧭 O que é o Rastreio Interno da IA?

O Rastreio Interno da IA é um recurso nativo de ferramentas modernas onde a **própria IA gera checklists e anotações automáticas** para rastrear seu progresso durante a implementação.

### Exemplos em Ferramentas Modernas

**Cursor (Agent Mode)**:

- Cria checklists automáticos durante implementação
- Marca tasks como concluídas conforme avança
- Mantém histórico de ações realizadas

**Windsurf (Cascade)**:

- Gera plano de ação automático antes de implementar
- Acompanha progresso em tempo real
- Ajusta plano conforme surgem descobertas

**Cloud Code / GitHub Copilot**:

- Rastreia mudanças sugeridas
- Mantém contexto entre múltiplas interações
- Sugere próximos passos baseado no progresso

---

## 🎯 Objetivos do Rastreio da IA

- **Manter linha de raciocínio**: Durante longas sessões de programação
- **Tracking automático**: Quais tasks foram realizadas
- **Contexto preservado**: Evitar repetição de trabalho
- **Progresso visível**: Desenvolvedor acompanha o que a IA está fazendo

---

## ⚠️ Limitações Críticas

### 🚨 O que o Rastreio da IA NÃO faz:

1. **Não possui visão macro do projeto**
   - A IA não entende a arquitetura completa
   - Pode tomar decisões desconexas sem guia externo
2. **Não substitui planejamento do desenvolvedor**
   - Sem os Níveis 1-3, a IA pode "inventar" planos arbitrários
   - Decisões podem não fazer sentido no contexto macro

3. **Não é confiável sozinho**
   - Pode "alucinar" tasks que não fazem sentido
   - Pode perder contexto em sessões longas

4. **Não preserva conhecimento entre sessões**
   - Se contexto for reiniciado, o rastreio se perde
   - Planos dos Níveis 1-3 são permanentes, este não

---

## ✅ Como Usar Corretamente

### Fluxo Recomendado

```
1. DEV cria Plano Global (Nível 1)
   └─> Define macroetapas e ordem estratégica

2. DEV cria Plano de Etapa (Nível 2)
   └─> Detalha tasks técnicas para a etapa atual

3. DEV define controle de workflow (Nível 3) se necessário
   └─> Estabelece pontos de validação

4. IA usa Rastreio Interno (Nível 4) AUTOMATICAMENTE
   └─> Acompanha progresso durante execução
   └─> Complementa (não substitui) níveis 1-3
```

### ✅ Boas Práticas

- ✅ **Sempre comece** com Plano Global (Nível 1)
- ✅ **Detalhe tecnicamente** com Plano de Etapa (Nível 2)
- ✅ **Confie no rastreio** para acompanhar progresso interno
- ✅ **Mas não dependa** exclusivamente dele para direção
- ✅ **Valide regularmente** que a IA está seguindo o plano correto

### ❌ Más Práticas (Evitar)

- ❌ **Não confie** apenas no rastreio da IA sem planos dos níveis 1-3
- ❌ **Não deixe** a IA decidir o que fazer sem direção clara
- ❌ **Não assuma** que o rastreio está correto sem validação
- ❌ **Não espere** que o rastreio sobreviva a reinício de contexto

---

## 🔍 Identificando Rastreio da IA nas Ferramentas

### Cursor (Agent Mode)

Quando você ativa o Agent Mode, o Cursor:

1. Analisa o contexto e a tarefa solicitada
2. Cria uma lista de passos que pretende seguir
3. Marca cada passo como concluído conforme avança
4. Atualiza a lista se encontrar obstáculos

**Exemplo de output**:

```
✓ Analisado código existente
✓ Criado modelo de usuário
⏳ Implementando endpoint de registro
⏸ Pendente: Testes de integração
```

### Windsurf (Cascade)

O Cascade mostra um plano visual:

```
📋 Plano de Implementação
├─ ✓ Setup inicial
├─ ⏳ Implementar autenticação
│   ├─ ✓ Modelo de usuário
│   ├─ ⏳ Endpoints
│   └─ ⏸ Testes
└─ ⏸ Deploy
```

---

## 🛠️ Trabalhando com o Rastreio da IA

### Quando Confiar

✅ **Confie quando**:

- Você forneceu planos claros nos Níveis 1-3
- O rastreio está alinhado com seu plano
- A IA está seguindo a ordem esperada
- As tasks fazem sentido técnico

### Quando Intervir

🛑 **Interrompa quando**:

- A IA está fazendo algo que não faz sentido
- O rastreio divergiu do seu plano
- Decisões arbitrárias estão sendo tomadas
- A IA está "inventando" tasks não solicitadas

### Como Corrigir

1. **Pare a IA** imediatamente
2. **Revise os Níveis 1-3**: Certifique-se que estão claros
3. **Reoriente a IA**: Lembre-a do plano correto
4. **Reinicie com contexto**: Forneça o plano novamente se necessário

---

## 📊 Comparação: Rastreio IA vs. Planos do Desenvolvedor

| Aspecto               | Rastreio IA (Nível 4) | Planos do DEV (Níveis 1-3)       |
| --------------------- | --------------------- | -------------------------------- |
| **Quem cria**         | IA automaticamente    | Desenvolvedor explicitamente     |
| **Permanência**       | Temporário (sessão)   | Permanente (arquivos)            |
| **Visão**             | Micro (tasks atuais)  | Macro + Micro (projeto completo) |
| **Confiabilidade**    | Moderada              | Alta                             |
| **Contexto**          | Perdido em reinício   | Preservado sempre                |
| **Propósito**         | Tracking interno      | Direção estratégica              |
| **Substitui outros?** | ❌ NÃO                | ✅ Define a direção              |

---

## 💡 Analogia Útil

Pense nos 4 níveis como uma **viagem de carro**:

- **Nível 1 (Global)**: Mapa da viagem completa (cidades, rotas principais)
- **Nível 2 (Etapa)**: Direções detalhadas para chegar na próxima cidade
- **Nível 3 (Prompt)**: Regras de trânsito e pontos de parada obrigatórios
- **Nível 4 (IA)**: GPS que acompanha sua localização em tempo real

❌ **Sem os níveis 1-3**: O GPS (IA) pode te levar a qualquer lugar, sem destino claro  
✅ **Com os níveis 1-3**: O GPS (IA) confirma que você está seguindo a rota planejada

---

## ✅ Checklist de Uso Correto

Antes de confiar no Rastreio da IA, confirme:

- [ ] Criei um Plano Global (Nível 1) definindo macroetapas?
- [ ] Detalhei tecnicamente a etapa atual (Nível 2)?
- [ ] Se necessário, estabeleci controles de workflow (Nível 3)?
- [ ] O rastreio da IA está alinhado com meus planos?
- [ ] Estou validando regularmente o progresso da IA?
- [ ] Tenho como recuperar o contexto se a IA perder a direção?

Se todas as respostas forem **SIM**, então você está usando o Rastreio da IA corretamente!

---

## 🔗 Relação com Outros Níveis

- **Recebe direção de**: Níveis 1, 2 e 3 (planos do desenvolvedor)
- **Não substitui**: Nenhum dos níveis anteriores
- **Complementa**: Adicionando tracking automático
- **Falha sem**: Direção clara dos níveis 1-3

---

## 📖 Resumo Executivo

O **Rastreio Interno da IA** é uma ferramenta poderosa para acompanhar progresso, mas:

✅ **Use-o** como complemento aos seus planos
❌ **Não confie** nele como única fonte de direção
🎯 **Objetivo**: Tracking interno, não planejamento estratégico
🛡️ **Proteção**: Sempre tenha planos dos níveis 1-3 como backup

**Lembre-se**: A IA é excelente para **executar** planos, mas **você** deve definir a direção.

---

## 🚀 Próximos Passos

1. Sempre comece com **Plano Global** (Nível 1)
2. Detalhe com **Plano de Etapa** (Nível 2)
3. Adicione **controles de workflow** se necessário (Nível 3)
4. **Confie no rastreio da IA** (Nível 4) para tracking interno
5. **Valide regularmente** que tudo está alinhado

---

**💡 Dica Final**: O rastreio da IA é como um assistente que anota o que está fazendo. Útil, mas não define o que deve ser feito. Essa definição vem de você (Níveis 1-3).
