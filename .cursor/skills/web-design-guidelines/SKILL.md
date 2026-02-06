---
name: web-design-guidelines
description: Revisar código de UI para conformidade com as Diretrizes de Interface Web. Use quando solicitado para "revisar minha UI", "verificar acessibilidade", "auditar design", "revisar UX" ou "verificar meu site contra melhores práticas".
argument-hint: <file-or-pattern>
---

# Diretrizes de Interface Web

Revisar arquivos para conformidade com as Diretrizes de Interface Web.

## Como Funciona

1. Buscar as diretrizes mais recentes da URL de origem abaixo
2. Ler os arquivos especificados (ou solicitar ao usuário arquivos/padrão)
3. Verificar contra todas as regras nas diretrizes obtidas
4. Exibir os resultados no formato conciso `arquivo:linha`

## Fonte das Diretrizes

Buscar diretrizes atualizadas antes de cada revisão:

```text
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

Use WebFetch para recuperar as regras mais recentes. O conteúdo obtido contém todas as regras e instruções de formato de saída.

## Uso

Quando um usuário fornecer um argumento de arquivo ou padrão:

1. Buscar diretrizes da URL de origem acima
2. Ler os arquivos especificados
3. Aplicar todas as regras das diretrizes obtidas
4. Exibir os resultados usando o formato especificado nas diretrizes

Se nenhum arquivo for especificado, perguntar ao usuário quais arquivos revisar.
