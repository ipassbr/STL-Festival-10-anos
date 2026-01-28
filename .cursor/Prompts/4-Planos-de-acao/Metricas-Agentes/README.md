# Nível 5: Métricas de Agentes

Sistema de monitoramento para workflows multiagente.

---

## 📊 Métricas Coletadas

### 1. Por Skill (Subagente):

- **Tokens consumidos** - Total de tokens usados por cada Skill
- **Tempo de execução** - Duração média por chamada
- **Taxa de sucesso** - % de execuções bem-sucedidas
- **Erros comuns** - Padrões de falha identificados

**Exemplo:**

```json
{
  "skill": "clean-code",
  "calls": 234,
  "tokens": 1200000,
  "avg_duration": 3.2,
  "success_rate": 0.94,
  "cost_usd": 18.5
}
```

### 2. Por Workflow:

- **Custo total** - Tokens × pricing
- **Latência ponta-a-ponta** - Tempo total do workflow
- **Handoffs realizados** - Número de delegações
- **Qualidade do código** - Taxa de aprovação em reviews

**Exemplo:**

```json
{
  "workflow": "feature-authentication",
  "skills_used": [
    "backend-dev-guidelines",
    "react-patterns",
    "security-review"
  ],
  "total_tokens": 45000,
  "duration": 420,
  "handoffs": 3,
  "cost_usd": 2.35
}
```

### 3. Por Projeto:

- **Skills mais usadas** - Ranking de utilização
- **Padrões de delegação** - Combinações comuns
- **ROI** - Tempo economizado vs custo
- **Evolução de qualidade** - Tendência temporal

**Exemplo:**

```markdown
## Projeto: Cursor-IDE

- Total de chamadas: 1,234
- Skills favoritas: clean-code (234), react-patterns (156)
- ROI: 2,674% (87h economizadas / $156.78 gastos)
- Qualidade: +15% vs mês anterior
```

---

## 🛠️ Implementação

### Arquitetura:

```
Cursor Agent
    ↓ (usa Skill)
metrics_tracker.py
    ↓ (log)
.cursor/data/metrics/YYYY-MM-DD.jsonl
    ↓ (agrega)
/metrics-report
    ↓ (gera)
Dashboard em Markdown
```

### Arquivos:

1. **Script de tracking**: `.cursor/scripts/metrics_tracker.py`
2. **Logs diários**: `.cursor/data/metrics/YYYY-MM-DD.jsonl`
3. **Comando de relatório**: `.cursor/Commands/metrics-report.md`
4. **Dashboard**: `.cursor/docs/metrics-dashboard.md` (gerado)

---

## 📈 Como Usar

### 1. Logging Automático

O sistema registra automaticamente cada vez que uma Skill é usada:

```python
# Interno do Cursor (pseudo-código)
def use_skill(skill_name, context):
    start_time = time.now()
    tokens_start = get_token_count()

    result = execute_skill(skill_name, context)

    tokens_used = get_token_count() - tokens_start
    duration = time.now() - start_time

    metrics_tracker.log_skill_usage(
        skill_name=skill_name,
        tokens=tokens_used,
        duration=duration,
        success=result.success
    )

    return result
```

### 2. Gerar Relatório

Execute no chat do Cursor:

```
/metrics-report week
```

Ou:

```
/metrics-report month
/metrics-report project
```

### 3. Visualizar Dashboard

Relatório gerado em: `.cursor/docs/metrics-dashboard.md`

---

## 📊 Exemplo de Relatório

```markdown
# Relatório de Métricas - Semana 20-26/01/2026

## 📈 Visão Geral

- **Total de operações**: 567
- **Skills únicas usadas**: 18
- **Tokens consumidos**: 3.2M
- **Custo total**: $62.45
- **Tempo total de execução**: 4.2h

## 🏆 Top 5 Skills Mais Usadas

1. **@clean-code**: 234 chamadas, 1.2M tokens, $18.50
   - Taxa de sucesso: 94%
   - Duração média: 3.2s
2. **@react-patterns**: 156 chamadas, 890K tokens, $13.35
   - Taxa de sucesso: 91%
   - Duração média: 4.1s
3. **@backend-dev-guidelines**: 98 chamadas, 670K tokens, $10.05
   - Taxa de sucesso: 96%
   - Duração média: 5.8s

## 🔄 Eficiência de Handoffs

- **Total de handoffs**: 45
- **Média de subagentes por task**: 2.3
- **Redução de contexto**: 67% vs abordagem monolítica

## ✅ Qualidade do Código

- **Taxa de aprovação em /code-review**: 89%
- **Bugs encontrados pós-deploy**: 3 (vs 12 mês anterior)
- **Cobertura de testes**: 87% (+12% vs mês anterior)

## 💰 ROI Estimado

- **Horas economizadas**: 87h (baseado em velocidade média)
- **Custo em tokens**: $62.45
- **Valor/hora** (assumindo $50/h): $4,350
- **ROI**: 2,674%

## 📊 Padrões de Uso

### Combinações Comuns:

1. `@backend-dev-guidelines` → `@clean-code` → `/code-review` (28x)
2. `@react-patterns` → `@frontend-design` → `/code-review` (22x)
3. `/handoff` → múltiplas Skills → `/test-fix-all` (15x)

### Workflows de Sucesso:

- **Feature completa**: 4.2 Skills em média, 95% sucesso
- **Refatoração**: 2.8 Skills em média, 91% sucesso
- **Bug fix**: 1.9 Skills em média, 87% sucesso
```

---

## 🎯 Objetivos das Métricas

1. **Otimização de custos** - Identificar Skills caras vs valor
2. **Melhoria de qualidade** - Tracking de sucesso/falhas
3. **Previsibilidade** - Estimativas mais precisas
4. **ROI** - Justificar investimento em IA

---

## 🔧 Configuração Avançada

### Ajustar pricing:

Edite `.cursor/scripts/metrics_tracker.py`:

```python
def calculate_cost(self, tokens):
    # Pricing: Claude Sonnet 4.5
    input_cost = 0.003  # per 1K tokens
    output_cost = 0.015  # per 1K tokens
    return (tokens / 1000) * ((input_cost + output_cost) / 2)
```

### Adicionar métricas customizadas:

```python
def log_custom_metric(self, metric_name, value):
    entry = {
        "timestamp": datetime.now().isoformat(),
        "metric": metric_name,
        "value": value
    }
    # Log to custom file
```

---

## 📚 Integração com Obsidian

Sincronize relatórios para Obsidian:

```
/metrics-report week → .cursor/docs/metrics-dashboard.md
                     ↓
           /sync-docs-obsidian
                     ↓
           Obsidian/Metrics/week-26-01-2026.md
```

Visualize evolução no Obsidian graph view!

---

## 🚀 Próximos Passos

1. ✅ Execute código pela primeira vez para iniciar logging
2. ✅ Após 1 semana, gere primeiro relatório
3. ✅ Analise padrões de uso
4. ✅ Otimize workflows baseado em métricas
5. ✅ Itere e melhore continuamente

---

**Status**: Sistema de métricas pronto para uso! 📊
