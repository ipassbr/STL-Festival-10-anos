# Commit Code

## Visao Geral

Analise as alteracoes feitas no codigo, gere uma mensagem de commit adequada seguindo as convencoes do projeto e execute o commit **somente apos aprovacao explicita do usuario**.

## Etapas

1. **Analisar alteracoes**: Execute `git status` e `git diff --staged` (ou `git diff` se nada estiver staged) para entender o que foi modificado
2. **Identificar o tipo de mudanca**: Classifique usando Conventional Commits:
   - `feat` - Nova funcionalidade
   - `fix` - Correcao de bug
   - `docs` - Documentacao
   - `style` - Formatacao (nao afeta logica)
   - `refactor` - Refatoracao de codigo
   - `perf` - Melhoria de performance
   - `test` - Testes
   - `chore` - Tarefas de manutencao
3. **Identificar o escopo**: Use um dos escopos do projeto (`hero`, `lineup`, `preloader`, `i18n`, `config`, `types`, `utils`, `ui`, `styles`) ou outro que faca sentido para a mudanca
4. **Gerar mensagem de commit**: Siga o formato `<type>(<scope>): <subject>`
5. **Apresentar ao usuario**: Mostre um resumo das mudancas e a mensagem de commit proposta
6. **Aguardar aprovacao**: **NAO execute o commit** ate o usuario aprovar explicitamente
7. **Executar commit**: Apos aprovacao, faca o stage dos arquivos relevantes (se necessario) e execute o commit

## Regras Obrigatorias

- **Idioma**: Mensagens de commit SEMPRE em portugues brasileiro (pt-br)
- **Sem caracteres especiais**: NAO use acentos, cedilha, til ou qualquer caractere especial (a e i o u a o c n) na mensagem de commit
- **Formato**: Siga rigorosamente o padrao Conventional Commits
- **Aprovacao**: NUNCA execute `git commit` sem aprovacao explicita do usuario

## Formato de Apresentacao

Ao apresentar a proposta de commit, use este formato:

```text
📁 Arquivos alterados:
- arquivo1.ts (modificado)
- arquivo2.astro (novo)

📝 Mensagem de commit proposta:
feat(escopo): descricao clara da mudanca

📋 Resumo:
Breve descricao do que foi feito e por que.
```

Aguarde a resposta do usuario antes de prosseguir. Se o usuario pedir alteracoes na mensagem, ajuste e apresente novamente.
