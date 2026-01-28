# Internacionalização (i18n) - STL Festival

## 📅 Informações do Documento
- **Data de Criação:** 26 de Janeiro de 2026
- **Versão:** 1.0
- **Status:** Especificação técnica
- **Idiomas:** PT-BR, EN, ES

---

## 🎯 Objetivo

Implementar **site multilíngue completo** para:
1. Refletir o pilar de **diversidade** do STL Festival
2. Atender público **internacional** e turistas
3. Ampliar **alcance** e **conversões**
4. Melhorar **SEO** em diferentes mercados
5. Criar experiência **inclusiva** para todos

---

## 🌍 Idiomas Suportados

### 1. Português (PT-BR) - Padrão
**Público:** Brasil (maioria do público)
**Prioridade:** 🔴 **CRÍTICA**

### 2. Inglês (EN) - Internacional
**Público:** 
- Turistas internacionais
- Público de países de língua inglesa
- Língua franca global
**Prioridade:** 🟡 **ALTA**

### 3. Espanhol (ES) - América Latina
**Público:**
- Turistas da América Latina
- Argentina, Chile, Uruguai (países próximos)
- Segunda língua mais falada nas Américas
**Prioridade:** 🟢 **MÉDIA-ALTA**

---

## 🎨 Design do Seletor de Idioma

### Posicionamento
**Localização:** Header (canto superior direito)

```
Logo STL               🌐 PT-BR | EN | ES     [COMPRAR INGRESSO]
```

### Variações de Design

#### Opção 1: Dropdown Simples
```astro
<div class="language-selector">
  <button class="language-selector__trigger">
    🌐 PT-BR ▾
  </button>
  <ul class="language-selector__dropdown">
    <li><a href="/" hreflang="pt-BR">🇧🇷 Português</a></li>
    <li><a href="/en" hreflang="en">🇺🇸 English</a></li>
    <li><a href="/es" hreflang="es">🇪🇸 Español</a></li>
  </ul>
</div>
```

#### Opção 2: Tabs/Pills (Recomendado)
```astro
<div class="language-tabs">
  <a href="/" class="lang-tab active" hreflang="pt-BR">PT</a>
  <a href="/en" class="lang-tab" hreflang="en">EN</a>
  <a href="/es" class="lang-tab" hreflang="es">ES</a>
</div>
```

#### Opção 3: Bandeiras (Visual)
```astro
<div class="language-flags">
  <a href="/" class="flag-btn active" aria-label="Português">🇧🇷</a>
  <a href="/en" class="flag-btn" aria-label="English">🇺🇸</a>
  <a href="/es" class="flag-btn" aria-label="Español">🇪🇸</a>
</div>
```

---

## 🏗️ Estrutura de URLs

### Opção 1: Subdiretórios (Recomendado para SEO)
```
stlfestival.com.br/          → PT-BR (padrão)
stlfestival.com.br/en/       → EN
stlfestival.com.br/es/       → ES
```

**Vantagens:**
- ✅ Melhor para SEO
- ✅ URLs semânticas
- ✅ Fácil de entender
- ✅ Fácil de implementar em Astro

### Opção 2: Subdomínios
```
stlfestival.com.br           → PT-BR
en.stlfestival.com.br        → EN
es.stlfestival.com.br        → ES
```

**Vantagens:**
- ✅ Separação clara
- ❌ Mais complexo de configurar
- ❌ Requer DNS setup

### Opção 3: Query Parameters
```
stlfestival.com.br/?lang=pt-BR
stlfestival.com.br/?lang=en
stlfestival.com.br/?lang=es
```

**Desvantagens:**
- ❌ Ruim para SEO
- ❌ Não recomendado

### ✅ **Decisão: Opção 1 (Subdiretórios)**

---

## 🛠️ Implementação em Astro

### Estrutura de Arquivos

```
src/
├── pages/
│   ├── index.astro           → PT-BR (padrão)
│   ├── en/
│   │   └── index.astro       → EN
│   └── es/
│       └── index.astro       → ES
├── i18n/
│   ├── locales/
│   │   ├── pt-BR.json
│   │   ├── en.json
│   │   └── es.json
│   ├── utils.ts              → Helper functions
│   └── config.ts             → i18n config
└── components/
    └── LanguageSelector.astro
```

### Configuração i18n

```typescript
// src/i18n/config.ts
export const languages = {
  'pt-BR': 'Português',
  'en': 'English',
  'es': 'Español'
};

export const defaultLang = 'pt-BR';

export const ui = {
  'pt-BR': {
    'nav.home': 'Início',
    'nav.lineup': 'Lineup',
    'nav.tickets': 'Ingressos',
    'hero.title': 'STL Festival 2026',
    'hero.subtitle': '10ª Edição',
    'hero.date': '06 de Junho de 2026',
    'hero.cta': 'Comprar Ingresso',
    // ... mais traduções
  },
  'en': {
    'nav.home': 'Home',
    'nav.lineup': 'Lineup',
    'nav.tickets': 'Tickets',
    'hero.title': 'STL Festival 2026',
    'hero.subtitle': '10th Edition',
    'hero.date': 'June 6th, 2026',
    'hero.cta': 'Buy Tickets',
    // ... mais traduções
  },
  'es': {
    'nav.home': 'Inicio',
    'nav.lineup': 'Lineup',
    'nav.tickets': 'Entradas',
    'hero.title': 'STL Festival 2026',
    'hero.subtitle': '10ª Edición',
    'hero.date': '6 de Junio de 2026',
    'hero.cta': 'Comprar Entradas',
    // ... mais traduções
  }
} as const;
```

### Helper Functions

```typescript
// src/i18n/utils.ts
import { ui, defaultLang } from './config';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedUrl(url: string, lang: string) {
  if (lang === defaultLang) return url;
  return `/${lang}${url}`;
}
```

### Exemplo de Uso em Componente

```astro
---
// src/pages/index.astro
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<section class="hero">
  <h1>{t('hero.title')}</h1>
  <p>{t('hero.subtitle')}</p>
  <p>{t('hero.date')}</p>
  <a href="#tickets" class="btn-primary">
    {t('hero.cta')}
  </a>
</section>
```

### Seletor de Idioma

```astro
---
// src/components/LanguageSelector.astro
import { languages } from '../i18n/config';
import { getLangFromUrl } from '../i18n/utils';

const currentLang = getLangFromUrl(Astro.url);
---

<div class="language-selector">
  {Object.entries(languages).map(([lang, name]) => (
    <a 
      href={lang === 'pt-BR' ? '/' : `/${lang}`}
      class:list={['lang-btn', { active: currentLang === lang }]}
      hreflang={lang}
    >
      {lang.split('-')[0].toUpperCase()}
    </a>
  ))}
</div>

<style>
  .language-selector {
    display: flex;
    gap: var(--spacing-2);
  }

  .lang-btn {
    padding: var(--spacing-2) var(--spacing-4);
    border-radius: var(--radius-lg);
    background: transparent;
    color: var(--text-primary);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    transition: var(--transition-colors);
  }

  .lang-btn:hover {
    background: var(--stl-beige);
  }

  .lang-btn.active {
    background: var(--stl-coral);
    color: var(--stl-white);
  }
</style>
```

---

## 🌐 SEO para Multilíngue

### Meta Tags Hreflang

```astro
---
// src/layouts/BaseLayout.astro
const currentLang = getLangFromUrl(Astro.url);
const currentPath = Astro.url.pathname;
---

<head>
  <!-- Hreflang tags -->
  <link rel="alternate" hreflang="pt-BR" href={`https://stlfestival.com.br${currentPath}`} />
  <link rel="alternate" hreflang="en" href={`https://stlfestival.com.br/en${currentPath}`} />
  <link rel="alternate" hreflang="es" href={`https://stlfestival.com.br/es${currentPath}`} />
  <link rel="alternate" hreflang="x-default" href={`https://stlfestival.com.br${currentPath}`} />
  
  <!-- Language meta -->
  <meta property="og:locale" content={currentLang} />
  <meta property="og:locale:alternate" content="pt_BR" />
  <meta property="og:locale:alternate" content="en_US" />
  <meta property="og:locale:alternate" content="es_ES" />
</head>
```

### Sitemap Multilíngue

```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Página principal PT-BR -->
  <url>
    <loc>https://stlfestival.com.br/</loc>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="https://stlfestival.com.br/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://stlfestival.com.br/en/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://stlfestival.com.br/es/" />
  </url>
  
  <!-- Página principal EN -->
  <url>
    <loc>https://stlfestival.com.br/en/</loc>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="https://stlfestival.com.br/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://stlfestival.com.br/en/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://stlfestival.com.br/es/" />
  </url>
  
  <!-- Página principal ES -->
  <url>
    <loc>https://stlfestival.com.br/es/</loc>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="https://stlfestival.com.br/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://stlfestival.com.br/en/" />
    <xhtml:link rel="alternate" hreflang="es" href="https://stlfestival.com.br/es/" />
  </url>
  
</urlset>
```

---

## 📝 Conteúdo a Ser Traduzido

### Estrutura de Traduções

```json
// src/i18n/locales/pt-BR.json
{
  "meta": {
    "title": "STL Festival 2026 - 10ª Edição | Reggae, Trap, Rap",
    "description": "Festival de Reggae, Trap e Rap. 06 de junho de 2026 na montanha mágica. Lineup com Edson Gomes, Matuê, Marcelo D2 e mais!"
  },
  "nav": {
    "home": "Início",
    "lineup": "Lineup",
    "sectors": "Setores",
    "tickets": "Ingressos",
    "about": "Sobre",
    "valley": "STL Valley"
  },
  "hero": {
    "title": "STL Festival 2026",
    "subtitle": "10ª Edição",
    "date": "06 de Junho de 2026",
    "time": "20:00h",
    "location": "Montanha Mágica",
    "cta": "Comprar Ingresso",
    "countdown": {
      "days": "Dias",
      "hours": "Horas",
      "minutes": "Minutos",
      "seconds": "Segundos"
    }
  },
  "lineup": {
    "title": "Lineup",
    "subtitle": "8 artistas confirmados para arrepiar",
    "genres": {
      "reggae": "Reggae",
      "trap": "Trap",
      "rap": "Rap"
    }
  },
  "sectors": {
    "title": "Setores",
    "subtitle": "Escolha a melhor experiência para você",
    "pista": {
      "name": "Pista",
      "age": "16+ anos",
      "description": "Acesso à frente do palco e praça de alimentação",
      "features": [
        "Entrada pelo Portão A",
        "Acesso parcial à frente do palco",
        "Praça de alimentação",
        "Crianças -10 anos grátis"
      ],
      "cta": "Comprar Pista"
    },
    "camarote": {
      "name": "Camarote",
      "age": "18+ anos",
      "description": "Open bar + acesso exclusivo",
      "features": [
        "Entrada pelo Portão B",
        "Open bar premium",
        "Banheiros exclusivos",
        "Acesso à pista e frente do palco"
      ],
      "cta": "Comprar Camarote"
    },
    "premium": {
      "name": "Camarote Premium",
      "age": "18+ anos",
      "description": "Experiência completa com open bar e open food",
      "features": [
        "Entrada pelo Portão C",
        "Open bar completo",
        "Open food",
        "Varandas panorâmicas",
        "Área de descanso exclusiva"
      ],
      "cta": "Comprar Premium"
    }
  },
  "about": {
    "title": "10 Anos de História",
    "description": "Uma década celebrando música, cultura e comunidade..."
  },
  "accessibility": {
    "title": "Festival para Todos",
    "description": "Compromisso com acessibilidade e inclusão..."
  },
  "sustainability": {
    "title": "Compromisso Ambiental",
    "description": "Ingresso solidário e práticas sustentáveis..."
  },
  "valley": {
    "title": "STL Valley",
    "description": "Hospedagem exclusiva de 03/06 a 07/06 para quem tem ingresso do festival",
    "cta": "Conhecer STL Valley"
  },
  "footer": {
    "followUs": "Siga-nos",
    "contact": "Contato",
    "legal": "Legal",
    "rights": "© 2026 STL Festival. Todos os direitos reservados."
  }
}
```

### Traduções EN e ES
- Criar arquivos `en.json` e `es.json` com mesma estrutura
- Contratar tradutor profissional ou usar IA + revisão humana
- Manter tom e energia do festival nas traduções

---

## ♿ Acessibilidade i18n

### ARIA Labels Traduzidos
```astro
<button 
  aria-label={t('languageSelector.ariaLabel')}
  aria-expanded={isOpen}
>
  {currentLang}
</button>
```

### HTML Lang Attribute
```astro
<html lang={currentLang}>
```

### Screen Reader Support
```astro
<span class="sr-only">
  {t('a11y.currentLanguage')}: {languages[currentLang]}
</span>
```

---

## 🎯 Analytics por Idioma

### Google Analytics 4
```javascript
// Rastrear visualizações por idioma
gtag('event', 'page_view', {
  'language': currentLang,
  'page_location': window.location.href
});

// Rastrear troca de idioma
function trackLanguageChange(newLang) {
  gtag('event', 'language_change', {
    'old_language': currentLang,
    'new_language': newLang
  });
}
```

### Métricas a Monitorar
- % de usuários por idioma
- Taxa de conversão por idioma
- Bounce rate por idioma
- Tempo na página por idioma
- CTAs mais clicados por idioma

---

## 📊 Priorização de Conteúdo

### Fase 1 (MVP): Conteúdo Essencial
- [ ] Meta tags (title, description)
- [ ] Navegação
- [ ] Hero section
- [ ] CTAs principais
- [ ] Setores
- [ ] Informações de contato

### Fase 2: Conteúdo Completo
- [ ] Lineup (nomes de artistas não mudam, mas descrições sim)
- [ ] Sobre o festival
- [ ] FAQ
- [ ] Termos e condições

### Fase 3: Conteúdo Avançado
- [ ] Blog/Notícias (se houver)
- [ ] Testemunhos
- [ ] Galeria de fotos com legendas

---

## 🔄 Manutenção e Atualização

### Processo de Adição de Novos Textos
1. Adicionar chave em `pt-BR.json`
2. Traduzir para `en.json` e `es.json`
3. Atualizar componentes
4. Testar em todos os idiomas
5. Deploy

### Ferramentas Úteis
- **DeepL** - Traduções de alta qualidade
- **Google Translate** - Backup/referência
- **i18n Ally (VS Code)** - Extensão para gerenciar traduções
- **Localazy** - Plataforma de gerenciamento de traduções (opcional)

---

## ✅ Checklist de Implementação

### Setup Inicial
- [ ] Criar estrutura de pastas i18n
- [ ] Configurar idiomas suportados
- [ ] Criar arquivos de tradução (pt-BR, en, es)
- [ ] Implementar helper functions

### Componentes
- [ ] Seletor de idioma no header
- [ ] BaseLayout com suporte a i18n
- [ ] Páginas principais traduzidas

### SEO
- [ ] Hreflang tags configuradas
- [ ] Sitemap multilíngue
- [ ] Meta tags por idioma
- [ ] URLs canônicas

### Conteúdo
- [ ] Todas as strings extraídas para JSON
- [ ] Traduções completas (EN, ES)
- [ ] Revisão por nativos (idealmente)
- [ ] Tom e voz mantidos

### Testes
- [ ] Troca de idioma funciona
- [ ] URLs corretas por idioma
- [ ] SEO validado (Google Search Console)
- [ ] Analytics rastreando idiomas
- [ ] Acessibilidade em todos os idiomas

---

## 🚀 Lançamento Faseado

### Fase 1: PT-BR Only (Lançamento Inicial)
- Lançar site em português primeiro
- Coletar feedback e métricas
- Ajustar conteúdo

### Fase 2: + English (1-2 semanas depois)
- Adicionar versão em inglês
- Monitorar acesso de IPs internacionais
- Ajustar traduções conforme feedback

### Fase 3: + Español (2-4 semanas depois)
- Adicionar versão em espanhol
- Marketing direcionado para América Latina
- Análise de conversão por idioma

---

## 💡 Recomendações Finais

### Prioridades
1. **PT-BR perfeito primeiro** - Maioria do público
2. **EN funcional** - Turistas internacionais
3. **ES bom** - América Latina

### Qualidade vs Velocidade
- Melhor ter PT-BR excelente + EN/ES básicos
- Do que ter 3 idiomas medianos
- Tradução profissional pelo menos para EN

### Manutenção
- Nomear responsável por cada idioma
- Processo claro para atualizar traduções
- Monitorar feedback de usuários internacionais

---

**Pronto para multilíngue!** 🌍🎉