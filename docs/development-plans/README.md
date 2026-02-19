# Development Plans - STL Festival Landing Page

## 📋 Visão Geral

Esta pasta contém os **planos de desenvolvimento detalhados** para cada seção da landing page do STL Festival.

Cada plano documenta:

- Objetivos e requisitos
- Componentes necessários
- Assets e dependências
- Issues a serem criados
- Critérios de aceitação
- Estratégia de branch e PR

---

## 📁 Estrutura

```
development-plans/
├── README.md                    # Este arquivo (guia)
├── TEMPLATE-SECTION-PLAN.md    # Template para criar novos planos
├── 01-setup-base.md             # Setup inicial do projeto
├── 02-preloader.md              # Preloader customizado
├── 03-hero-section.md           # Hero Section
├── 04-navigation.md             # Navegação e header
├── 05-lineup.md                 # Seção de lineup
├── 06-setores.md                # Seção de setores
├── 07-sobre-festival.md         # Sobre o festival (10 anos)
├── 08-valores-acessibilidade.md # Acessibilidade
├── 09-valores-sustentabilidade.md # Sustentabilidade
├── 10-valores-diversidade.md    # Diversidade
├── 11-experiencias-exclusivas.md # Tirolesa e Translado
├── 12-stl-valley.md             # STL Valley
├── 13-ipass-info.md             # Informações iPass
├── 14-faq.md                    # FAQ
└── 15-footer.md                 # Footer
```

---

## 🔄 Processo de Criação de Planos

### 1. Quando Criar um Plano?

⚠️ **Criar o plano ANTES de iniciar o desenvolvimento da seção.**

**Momento ideal:**

- Após conclusão da seção anterior (aprendizados aplicados)
- Quando assets/informações necessárias estiverem disponíveis
- Antes de criar a branch `feature/section-[nome]`

### 2. Como Criar um Plano?

#### Passo 1: Copiar o Template

```bash
cp TEMPLATE-SECTION-PLAN.md 03-hero-section.md
```

#### Passo 2: Preencher Todas as Seções

**Seções Obrigatórias:**

- ✅ Informações Básicas (nome, prioridade, branch, tempo)
- ✅ Objetivo da Seção (propósito, problema resolvido)
- ✅ Requisitos Funcionais (RF-01, RF-02, etc.)
- ✅ Requisitos Não-Funcionais (performance, A11y, SEO)
- ✅ Componentes Necessários (base + customizados)
- ✅ Assets e Dependências (imagens, vídeos, textos)
- ✅ Issues a Serem Criados (mínimo 5-7 issues)
- ✅ Critérios de Aceitação (checklist detalhado)

**Seções Opcionais (mas recomendadas):**

- Animações e Interações
- Notas de Implementação
- Estimativas e Tracking

#### Passo 3: Validar com Stakeholders (se necessário)

Se a seção é crítica ou tem decisões de negócio:

- Revisar plano com stakeholders
- Ajustar conforme feedback
- Aprovar antes de iniciar

#### Passo 4: Criar Issues no GitHub

Baseado no plano, criar todos os issues listados:

```
Issue #1: [Hero] Setup e Estrutura Base
Issue #2: [Hero] Implementar Countdown Timer
Issue #3: [Hero] Integrar Vídeo/Imagem de Background
...
```

#### Passo 5: Criar Branch

```bash
git checkout develop
git pull origin develop
git checkout -b feature/section-hero
```

#### Passo 6: Desenvolver

Seguir o plano, implementar, testar, iterar.

#### Passo 7: Criar PR

Usar template do plano para criar PR estruturado.

---

## 🎯 Ordem Recomendada de Desenvolvimento

### Fase 1: Base e Infraestrutura (Semana 1-2)

| #   | Seção            | Prioridade | Status      |
| --- | ---------------- | ---------- | ----------- |
| 01  | Setup Base       | 🔴 Crítica | ⏸️ Pendente |
| -   | Componentes Base | 🔴 Crítica | ⏸️ Pendente |

### Fase 2: Seções Críticas (Semana 2-4)

| #   | Seção        | Prioridade | Status      |
| --- | ------------ | ---------- | ----------- |
| 02  | Preloader    | 🔴 Crítica | ⏸️ Pendente |
| 03  | Hero Section | 🔴 Crítica | ⏸️ Pendente |
| 04  | Navigation   | 🔴 Crítica | ⏸️ Pendente |
| 05  | Lineup       | 🟡 Alta    | ⏸️ Pendente |
| 06  | Setores      | 🟡 Alta    | ⏸️ Pendente |

### Fase 3: Conteúdo Informativo (Semana 4-5)

| #   | Seção                   | Prioridade | Status      |
| --- | ----------------------- | ---------- | ----------- |
| 07  | Sobre Festival          | 🟢 Média   | ⏸️ Pendente |
| 08  | Acessibilidade          | 🟢 Média   | ⏸️ Pendente |
| 09  | Sustentabilidade        | 🟢 Média   | ⏸️ Pendente |
| 10  | Diversidade             | 🟢 Média   | ⏸️ Pendente |
| 11  | Experiências Exclusivas | 🟢 Média   | ⏸️ Pendente |
| 12  | STL Valley              | 🟢 Média   | ⏸️ Pendente |

### Fase 4: Conversão e Suporte (Semana 5-6)

| #   | Seção      | Prioridade | Status      |
| --- | ---------- | ---------- | ----------- |
| 13  | iPass Info | 🟡 Alta    | ⏸️ Pendente |
| 14  | FAQ        | 🟡 Alta    | ⏸️ Pendente |
| 15  | Footer     | 🔴 Crítica | ⏸️ Pendente |

---

## 📝 Convenções de Nomenclatura

### Branches

```
feature/section-[nome-da-seção]
feature/component-[nome-do-componente]
```

**Exemplos:**

- `feature/section-hero`
- `feature/section-lineup`
- `feature/component-preloader`
- `feature/component-countdown-timer`

### Issues

```
[SEÇÃO] Título descritivo
[COMPONENT] Título descritivo
```

**Exemplos:**

- `[Hero] Setup e Estrutura Base`
- `[Hero] Implementar Countdown Timer`
- `[Component] Criar Accordion para FAQ`

### Pull Requests

```
[SECTION] Nome da Seção - Descrição breve
[COMPONENT] Nome do Componente - Descrição breve
```

**Exemplos:**

- `[SECTION] Hero - Implementação completa com countdown e animações`
- `[COMPONENT] Preloader - Migração e integração do código existente`

---

## ✅ Checklist para Cada Plano

Antes de considerar um plano completo, validar:

### Planejamento

- [ ] Objetivo da seção está claro
- [ ] Requisitos funcionais documentados (mínimo 3)
- [ ] Requisitos não-funcionais definidos
- [ ] Componentes listados
- [ ] Assets identificados
- [ ] Dependências mapeadas

### Issues

- [ ] Mínimo 5 issues criados
- [ ] Cada issue tem descrição clara
- [ ] Cada issue tem tempo estimado
- [ ] Issues cobrem: setup, features, responsividade, animações, testes

### Critérios de Aceitação

- [ ] Funcionalidade definida
- [ ] Design especificado
- [ ] Performance (metas Lighthouse)
- [ ] Acessibilidade (WCAG AA)
- [ ] Responsividade (3 breakpoints)
- [ ] i18n (3 idiomas)

### Git Flow

- [ ] Nome da branch definido
- [ ] Template de PR preparado
- [ ] Reviewers identificados

---

## 🚀 Início Rápido

### Para Criar Seu Primeiro Plano

1. **Leia o template completo:**

   ```bash
   cat TEMPLATE-SECTION-PLAN.md
   ```

2. **Copie e renomeie:**

   ```bash
   cp TEMPLATE-SECTION-PLAN.md 03-hero-section.md
   ```

3. **Preencha todas as seções** (não deixe `[placeholders]`)

4. **Valide com checklist acima**

5. **Crie issues no GitHub** baseado no plano

6. **Inicie desenvolvimento:**
   ```bash
   git checkout -b feature/section-hero
   ```

---

## 📊 Tracking de Progresso

Atualizar o README conforme seções forem concluídas:

| Seção            | Plano Criado | Issues Criados | Branch | PR  | Status      |
| ---------------- | ------------ | -------------- | ------ | --- | ----------- |
| Setup Base       | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| Preloader        | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| Hero             | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| Navigation       | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| Lineup           | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| Setores          | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| Sobre Festival   | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| Acessibilidade   | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| Sustentabilidade | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| Diversidade      | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| Exp. Exclusivas  | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| STL Valley       | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| iPass Info       | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| FAQ              | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |
| Footer           | ⏸️           | ⏸️             | -      | -   | ⏸️ Pendente |

**Legenda:**

- ⏸️ Pendente
- 🟡 Em Progresso
- ✅ Concluído
- 🔴 Bloqueado

---

## 💡 Dicas e Boas Práticas

### Durante o Planejamento

1. **Seja Específico:** Evite requisitos vagos ("fazer bonito", "melhorar UX")
2. **Pense em Assets:** Liste TODOS os assets necessários (não subestime)
3. **Estime Realisticamente:** Adicione buffer de 20-30% ao tempo estimado
4. **Documente Decisões:** Por que escolheu X ao invés de Y?
5. **Pense em i18n:** Desde o início, não como "depois faço"

### Durante o Desenvolvimento

1. **Siga o Plano:** Não desvie sem documentar a mudança
2. **Atualize Issues:** Mova de "To Do" → "In Progress" → "Done"
3. **Commit Frequente:** Pequenos commits com mensagens claras
4. **Teste Continuamente:** Não deixe todos os testes para o final
5. **Documente Problemas:** Se encontrou dificuldade, documente no plano
6. **Use TypeScript:** Todos os componentes React devem ser desenvolvidos em TypeScript (básico) para type safety

### Durante o Code Review

1. **Use o Checklist do PR:** Valide todos os itens
2. **Teste Localmente:** Não confie apenas no CI/CD
3. **Valide Métricas:** Lighthouse, A11y, Performance
4. **Feedback Construtivo:** Sugira melhorias, não apenas critique

---

## 📚 Referências

- **Documentação Principal:** `docs/00-INDICE.md.md`
- **Relatório de Validação:** `docs/RELATORIO-VALIDACAO.md`
- **PRD:** `docs/03-PRD.md`
- **Design System:** `docs/05-DESIGN-SYSTEM.md`
- **Tech Stack:** `docs/04-TECH-STACK-ANALYSIS.md`

---

## 🤝 Contribuindo

### Para Adicionar um Novo Plano

1. Fork do repositório
2. Copie o template
3. Preencha todas as seções
4. Crie PR para `docs/development-plans/`
5. Aguarde review

### Para Sugerir Melhorias no Template

1. Abra uma issue com tag `[TEMPLATE]`
2. Descreva a melhoria proposta
3. Justifique o benefício
4. Aguarde discussão e aprovação

---

**Última Atualização:** 28 de Janeiro de 2026
**Mantido por:** Equipe de Desenvolvimento STL Festival
