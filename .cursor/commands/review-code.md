# Review Code

## Visao Geral

Revise o codigo commitado, apresente uma analise de qualidade e, **somente apos aprovacao explicita do usuario**, execute o `git push` para o repositorio remoto.

## Etapas

1. **Identificar commits pendentes**: Execute `git log origin/HEAD..HEAD --oneline` para listar commits que ainda nao foram enviados ao remoto
2. **Analisar as mudancas**: Execute `git diff origin/HEAD..HEAD` para revisar o codigo alterado
3. **Realizar revisao**: Avalie as mudancas com base nos criterios abaixo
4. **Apresentar relatorio**: Mostre o resultado da revisao ao usuario
5. **Aguardar aprovacao**: **NAO execute o push** ate o usuario aprovar explicitamente
6. **Executar push**: Apos aprovacao, execute `git push`

## Criterios de Revisao

### Qualidade do Codigo

- [ ] Codigo legivel e bem estruturado
- [ ] Funcoes pequenas e focadas
- [ ] Nomes de variaveis descritivos
- [ ] Sem duplicacao de codigo
- [ ] Segue as convencoes do projeto (PascalCase componentes, kebab-case utils, camelCase hooks)

### TypeScript

- [ ] Sem uso de `any`
- [ ] Props de componentes tipadas
- [ ] Interfaces usadas para tipos de objetos

### Padroes do Projeto

- [ ] Arquitetura de Ilhas respeitada (Astro para estatico, React apenas para interatividade)
- [ ] Tokens de design usados (sem cores hardcoded)
- [ ] Traducoes atualizadas nos 3 idiomas se necessario (pt-BR, en, es)
- [ ] Aliases de caminho usados (`@components/`, `@i18n/`, etc.)

### Performance

- [ ] Eventos de scroll usando RAF com flag de ticking
- [ ] Diretivas de hidratacao adequadas (`client:load`, `client:idle`, `client:visible`)
- [ ] Sem imports desnecessarios

### Seguranca

- [ ] Sem segredos hardcoded
- [ ] Variaveis de ambiente usadas para dados sensiveis

## Formato de Apresentacao

```text
🔍 Revisao de Codigo

📦 Commits pendentes:
- abc1234 feat(hero): adiciona video de fundo

✅ Aprovado / ⚠️ Atencao / ❌ Problema

📋 Detalhes:
- Qualidade do Codigo: ✅
- TypeScript: ✅
- Padroes do Projeto: ⚠️ (descricao do ponto de atencao)
- Performance: ✅
- Seguranca: ✅

💡 Sugestoes (se houver):
- Sugestao 1
- Sugestao 2

🚀 Pronto para push? Aguardando sua aprovacao.
```

Aguarde a resposta do usuario antes de prosseguir. Se o usuario pedir correcoes, ajude a implementa-las, faca um novo commit (usando o fluxo do `/commit-code`) e apresente a revisao novamente.
