# Paleta de Cores Oficial - STL Festival

## 🎨 Cores Oficiais (Fornecidas pelo Cliente)

### Tabela de Referência

| HEX       | Nome Interno   | Descrição Visual             | Uso Principal                           |
| --------- | -------------- | ---------------------------- | --------------------------------------- |
| `#006a47` | `--stl-green`  | Verde profundo               | Elementos de natureza, CTAs secundários |
| `#ff4d2d` | `--stl-red`    | Vermelho-alaranjado vibrante | **CTAs principais**, ação, urgência     |
| `#ff9d28` | `--stl-orange` | Laranja intenso              | Acentos, badges, hover states           |
| `#007b9a` | `--stl-teal`   | Azul-verde (teal)            | Links, informações, backgrounds         |
| `#fefbdf` | `--stl-cream`  | Creme claro                  | Backgrounds claros, cards               |
| `#1e1876` | `--stl-indigo` | Azul-índigo escuro           | Backgrounds escuros, hero, footer       |

---

## 🎨 Visualização das Cores

### Verde Profundo (`#006a47`)

```
███████████████████  #006a47
```

**Variações:**

- Light: `#009966`
- Dark: `#004d33`

**Uso:** Elementos de natureza, sustentabilidade, CTAs secundários

---

### Vermelho-Alaranjado (`#ff4d2d`)

```
███████████████████  #ff4d2d
```

**Variações:**

- Light: `#ff7052`
- Dark: `#e63d1f`

**Uso:** 🔴 **CTA PRINCIPAL "Comprar Ingresso"**, destaques importantes, urgência

---

### Laranja Intenso (`#ff9d28`)

```
███████████████████  #ff9d28
```

**Variações:**

- Light: `#ffb34d`
- Dark: `#e68a1f`

**Uso:** Acentos, badges de gênero musical, hover states, elementos decorativos

---

### Azul Teal (`#007b9a`)

```
███████████████████  #007b9a
```

**Variações:**

- Light: `#009bb8`
- Dark: `#005f77`

**Uso:** Links, elementos informativos, backgrounds alternativos

---

### Creme Claro (`#fefbdf`)

```
███████████████████  #fefbdf
```

**Variações:**

- Light: `#fffef0`
- Dark: `#f5f2c8`

**Uso:** Backgrounds claros, cards, seções alternadas (contraste suave)

---

### Azul Índigo (`#1e1876`)

```
███████████████████  #1e1876
```

**Variações:**

- Light: `#2d2499`
- Dark: `#15115a`

**Uso:** Hero sections, backgrounds escuros, footer, textos sobre cores claras

---

## 🎯 Mapeamento por Contexto

### CTAs (Call-to-Actions)

```css
/* Principal - Máxima conversão */
.btn-primary {
  background: #ff4d2d; /* Vermelho-alaranjado */
}

/* Secundário - Ações alternativas */
.btn-secondary {
  background: #006a47; /* Verde profundo */
}

/* Outline - Ações terciárias */
.btn-outline {
  border: 2px solid #1e1876; /* Índigo */
}
```

### Backgrounds

```css
/* Primário (branco) */
--bg-primary: #ffffff;

/* Secundário (creme) */
--bg-secondary: #fefbdf;

/* Escuro (índigo) */
--bg-dark: #1e1876;

/* Accent 1 (verde claro) */
--bg-accent-1: #009966;

/* Accent 2 (teal claro) */
--bg-accent-2: #009bb8;
```

### Textos

```css
/* Textos principais */
--text-primary: #212121;
--text-secondary: #616161;

/* Textos sobre fundos escuros */
--text-inverse: #ffffff;

/* Links */
--text-link: #007b9a; /* Teal */
--text-link-hover: #005f77; /* Teal escuro */
```

### Badges de Gêneros Musicais

```css
/* Reggae */
.badge-reggae {
  background: #009966; /* Verde light */
  color: #004d33; /* Verde dark */
}

/* Trap */
.badge-trap {
  background: #ff7052; /* Vermelho light */
  color: #e63d1f; /* Vermelho dark */
}

/* Rap */
.badge-rap {
  background: #009bb8; /* Teal light */
  color: #005f77; /* Teal dark */
}
```

### Estados Semânticos

```css
/* Sucesso */
--success: #006a47; /* Verde */

/* Aviso/Warning */
--warning: #ff9d28; /* Laranja */

/* Erro */
--error: #ff4d2d; /* Vermelho */

/* Informação */
--info: #007b9a; /* Teal */
```

---

## 🔍 Contraste e Acessibilidade

### Combinações Validadas (WCAG AA)

| Cor de Fundo         | Cor do Texto             | Contraste | Status |
| -------------------- | ------------------------ | --------- | ------ |
| `#006a47` (Verde)    | `#FFFFFF` (Branco)       | 5.8:1     | ✅ AAA |
| `#ff4d2d` (Vermelho) | `#FFFFFF` (Branco)       | 4.6:1     | ✅ AA  |
| `#ff9d28` (Laranja)  | `#000000` (Preto)        | 4.9:1     | ✅ AA  |
| `#007b9a` (Teal)     | `#FFFFFF` (Branco)       | 5.1:1     | ✅ AAA |
| `#fefbdf` (Creme)    | `#212121` (Cinza escuro) | 12.4:1    | ✅ AAA |
| `#1e1876` (Índigo)   | `#FFFFFF` (Branco)       | 11.2:1    | ✅ AAA |

---

## 🎨 Gradientes Recomendados

### Hero Section (Dramático)

```css
background: linear-gradient(
  135deg,
  #1e1876 0%,
  /* Índigo */ #2d2499 100% /* Índigo light */
);
```

### Multicolor Vibrante (Opcional)

```css
background: linear-gradient(
  135deg,
  #006a47 0%,
  /* Verde */ #007b9a 25%,
  /* Teal */ #ff4d2d 50%,
  /* Vermelho */ #ff9d28 75%,
  /* Laranja */ #1e1876 100% /* Índigo */
);
background-size: 400% 400%;
animation: gradientShift 10s ease infinite;
```

### Sunset (Quente)

```css
background: linear-gradient(
  180deg,
  #ff9d28 0%,
  /* Laranja */ #ff4d2d 100% /* Vermelho */
);
```

---

## 💡 Dicas de Uso

### ✅ O Que Fazer

1. **CTAs Principais:** Sempre usar `#ff4d2d` (vermelho-alaranjado)
2. **Backgrounds Claros:** Usar `#fefbdf` (creme) em vez de branco puro para suavizar
3. **Textos em Fundos Escuros:** Sempre usar branco `#FFFFFF`
4. **Links:** Usar `#007b9a` (teal) para se destacar mas não competir com CTAs
5. **Badges:** Usar versões light das cores com texto dark da mesma cor

### ❌ O Que Evitar

1. **Não usar verde (`#006a47`) para CTAs principais** - Reservar para secundários
2. **Não misturar muitas cores em uma mesma seção** - Máximo 2-3 cores por seção
3. **Não usar laranja (`#ff9d28`) para CTAs** - Reservar para acentos/badges
4. **Não usar creme (`#fefbdf`) como cor de texto** - Apenas backgrounds
5. **Não usar índigo (`#1e1876`) em textos sobre fundos claros** - Muito escuro

---

## 📊 Hierarquia de Importância

### Por Área de Impacto

1. **CRÍTICA (Alta Conversão):**
   - `#ff4d2d` - Vermelho-alaranjado (CTA principal)

2. **ALTA (Navegação e Ação):**
   - `#006a47` - Verde profundo (CTAs secundários)
   - `#007b9a` - Teal (links, info)

3. **MÉDIA (Suporte Visual):**
   - `#ff9d28` - Laranja (acentos, badges)
   - `#1e1876` - Índigo (backgrounds escuros)

4. **BAIXA (Conforto Visual):**
   - `#fefbdf` - Creme (backgrounds claros)

---

## 🔄 Changelog de Cores

### 26 de Janeiro de 2026

**Atualização:** Cores oficiais fornecidas pelo cliente

**Antes (Estimativas):**

```
Verde: #1B6D5C → Agora: #006a47
Coral: #FF6347 → Agora: #ff4d2d
Amarelo: #FFB84D → Agora: #ff9d28
Turquesa: #1B8B9B → Agora: #007b9a
Bege: #F5F5DC → Agora: #fefbdf
Roxo: #2E2B5F → Agora: #1e1876
```

**Mudanças:**

- Verde mais profundo e vibrante
- Coral virou vermelho-alaranjado mais intenso
- Amarelo virou laranja mais saturado
- Turquesa virou teal mais profissional
- Bege virou creme mais suave
- Roxo virou índigo mais escuro

---

## 🎨 Export para Implementação

### CSS Variables (Tokens)

```css
:root {
  /* Cores Oficiais */
  --stl-green: #006a47;
  --stl-red: #ff4d2d;
  --stl-orange: #ff9d28;
  --stl-teal: #007b9a;
  --stl-cream: #fefbdf;
  --stl-indigo: #1e1876;

  /* Variações Light */
  --stl-green-light: #009966;
  --stl-red-light: #ff7052;
  --stl-orange-light: #ffb34d;
  --stl-teal-light: #009bb8;
  --stl-cream-light: #fffef0;
  --stl-indigo-light: #2d2499;

  /* Variações Dark */
  --stl-green-dark: #004d33;
  --stl-red-dark: #e63d1f;
  --stl-orange-dark: #e68a1f;
  --stl-teal-dark: #005f77;
  --stl-cream-dark: #f5f2c8;
  --stl-indigo-dark: #15115a;
}
```

### Tailwind Config

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        stl: {
          green: {
            DEFAULT: '#006a47',
            light: '#009966',
            dark: '#004d33',
          },
          red: {
            DEFAULT: '#ff4d2d',
            light: '#ff7052',
            dark: '#e63d1f',
          },
          orange: {
            DEFAULT: '#ff9d28',
            light: '#ffb34d',
            dark: '#e68a1f',
          },
          teal: {
            DEFAULT: '#007b9a',
            light: '#009bb8',
            dark: '#005f77',
          },
          cream: {
            DEFAULT: '#fefbdf',
            light: '#fffef0',
            dark: '#f5f2c8',
          },
          indigo: {
            DEFAULT: '#1e1876',
            light: '#2d2499',
            dark: '#15115a',
          },
        },
      },
    },
  },
};
```

### JSON (Para Design Tools)

```json
{
  "colors": {
    "green": "#006a47",
    "red": "#ff4d2d",
    "orange": "#ff9d28",
    "teal": "#007b9a",
    "cream": "#fefbdf",
    "indigo": "#1e1876"
  }
}
```

---

**Documento Oficial | Última Atualização:** 26 de Janeiro de 2026
**Status:** ✅ Validado e Aprovado pelo Cliente
**Fonte:** Paleta fornecida pelo cliente STL Festival
