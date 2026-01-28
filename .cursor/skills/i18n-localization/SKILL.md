---
name: i18n-localization
description: Internationalization and localization patterns. Detecting hardcoded strings, managing translations, locale files, RTL support.
allowed-tools: Read, Glob, Grep
---

# i18n & Localização

> Melhores práticas de Internacionalização (i18n) e Localização (L10n).

---

## 1. Conceitos Fundamentais

| Termo      | Significado                                          |
| ---------- | ---------------------------------------------------- |
| **i18n**   | Internacionalização - tornando a app traduzível      |
| **L10n**   | Localização - as traduções reais                     |
| **Locale** | Idioma + Região (en-US, pt-BR)                       |
| **RTL**    | Idiomas da direita para esquerda (Arábico, Hebraico) |

---

## 2. Quando Usar i18n

| Tipo de Projeto     | i18n Necessário?      |
| ------------------- | --------------------- |
| App web pública     | ✅ Sim                |
| Produto SaaS        | ✅ Sim                |
| Ferramenta interna  | ⚠️ Talvez             |
| App de região única | ⚠️ Considere o futuro |
| Projeto pessoal     | ❌ Opcional           |

---

## 3. Padrões de Implementação

### React (react-i18next)

```tsx
import { useTranslation } from 'react-i18next';

function Welcome() {
  const { t } = useTranslation();
  return <h1>{t('welcome.title')}</h1>;
}
```

### Next.js (next-intl)

```tsx
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('Home');
  return <h1>{t('title')}</h1>;
}
```

### Python (gettext)

```python
from gettext import gettext as _

print(_("Welcome to our app"))
```

---

## 4. Estrutura de Arquivos

```
locales/
├── en/
│   ├── common.json
│   ├── auth.json
│   └── errors.json
├── pt/
│   ├── common.json
│   ├── auth.json
│   └── errors.json
└── ar/          # RTL
    └── ...
```

---

## 5. Melhores Práticas

### FAÇA ✅

- Use chaves de tradução, não texto bruto
- Separe traduções por namespace de feature
- Suporte a pluralização
- Trate formatos de data/número por locale
- Planeje para RTL desde o início
- Use formato de mensagem ICU para strings complexas

### NÃO FAÇA ❌

- Hardcode strings nos componentes
- Concatene strings traduzidas
- Assuma tamanho do texto (alemão é 30% mais longo)
- Esqueça o layout RTL
- Misture idiomas no mesmo arquivo

---

## 6. Problemas Comuns

| Problema          | Solução                          |
| ----------------- | -------------------------------- |
| Tradução ausente  | Fallback para o idioma padrão    |
| Strings hardcoded | Use linter/script de verificação |
| Formato de data   | Use Intl.DateTimeFormat          |
| Formato de número | Use Intl.NumberFormat            |
| Pluralização      | Use formato de mensagem ICU      |

---

## 7. Suporte a RTL

```css
/* Propriedades Lógicas CSS */
.container {
  margin-inline-start: 1rem; /* Não margin-left */
  padding-inline-end: 1rem; /* Não padding-right */
}

[dir='rtl'] .icon {
  transform: scaleX(-1);
}
```

---

## 8. Checklist

Antes de lançar:

- [ ] Todas as strings do usuário usam chaves de tradução
- [ ] Arquivos de locale existem para todos os idiomas suportados
- [ ] Formatação de data/número usa a API Intl
- [ ] Layout RTL testado (se aplicável)
- [ ] Idioma de fallback configurado
- [ ] Sem strings hardcoded nos componentes

---

## Como Verificar

Para garantir qualidade de i18n no projeto, revise periodicamente:

- Busque por texto literal em componentes usando `grep` ou a ferramenta de busca do editor
- Confirme que todos os locales (pt-BR, EN, ES) possuem as mesmas chaves
- Verifique que não há strings hardcoded em JSX ou templates
