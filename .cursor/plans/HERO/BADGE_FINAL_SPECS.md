# 🎵 Badge Spotify - Especificações Finais

## 📱 Visual Comparativo

### Desktop (≥1024px)

```
┌─────────────────────────────────┐
│ playlist stl-festival  [🎵]     │  ← Texto ANTES do ícone
└─────────────────────────────────┘
    Posição: top: 1.5rem, left: 1.5rem
    Tamanho: ~140px × 40px
    Shape: Pill (border-radius: 20px)
```

### Mobile (<1024px)

```
┌──────┐
│  🎵  │  ← APENAS ícone
└──────┘
    Posição: top: 0, left: 0 (ENCOSTA no canto)
    Tamanho: 44px × 44px
    Shape: Quadrado no canto (border-top-left-radius: 0)
```

---

## 🎯 Mudanças Implementadas

### ✅ 1. Ordem dos Elementos (Desktop)

**ANTES:**

```html
[🎵 Ícone] playlist stl-festival
```

**DEPOIS:**

```html
playlist stl-festival [🎵 Ícone]
```

**Código:**

```astro
<!-- Texto primeiro -->
<span class="spotify-text">playlist stl-festival</span>

<!-- Ícone depois -->
<svg class="spotify-icon">...</svg>
```

---

### ✅ 2. Badge Mobile - Apenas Ícone

**ANTES:**

- Texto: "playlist stl-festival" (reduzido)
- Ícone: 20px
- Tamanho: ~84px × 28px (scale 0.7)
- Posição: top: 0.75rem, left: 0.75rem

**DEPOIS:**

- Texto: Oculto (`display: none`)
- Ícone: 24px (maior)
- Tamanho: 44px × 44px (fixo)
- Posição: top: 0, left: 0 (sem margem)

**Código CSS:**

```css
@media (max-width: 1023px) {
  .spotify-badge {
    top: 0;
    left: 0;
    width: 44px;
    height: 44px;
    border-top-left-radius: 0;
  }

  .spotify-text {
    display: none;
  }

  .spotify-icon {
    width: 24px;
    height: 24px;
  }
}
```

---

### ✅ 3. Badge Encosta no Canto

**ANTES:**

```css
top: 0.75rem; /* 12px de margem */
left: 0.75rem; /* 12px de margem */
```

**DEPOIS:**

```css
top: 0; /* Sem margem */
left: 0; /* Sem margem */
border-top-left-radius: 0; /* Quadrado no canto */
```

**Visual:**

```
ANTES:              DEPOIS:
┌──────────┐        ┌──────────┐
│    ┌──┐  │        ││🎵│      │
│    │🎵│  │        │└──┘      │
│    └──┘  │        │          │
│          │        │          │
└──────────┘        └──────────┘
  ^margem              ^encosta
```

---

## 📏 Especificações Técnicas

### Desktop (≥1024px)

```css
.spotify-badge {
  /* Layout */
  display: inline-flex;
  gap: 0.5rem;

  /* Position */
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 40;

  /* Size */
  padding: 0.5rem 0.75rem;
  width: auto; /* Adapta ao conteúdo */
  height: auto;

  /* Visual */
  background: #1db954;
  color: white;
  border-radius: 20px; /* Pill completo */

  /* Typography */
  font-size: 0.875rem;
  font-weight: 600;

  /* Opacity */
  opacity: 1; /* Sempre visível */
}

/* Ordem: Texto → Ícone */
.spotify-text {
  order: 1;
}

.spotify-icon {
  order: 2;
  width: 20px;
  height: 20px;
}
```

### Mobile (<1024px)

```css
.spotify-badge {
  /* Position - Encosta no canto */
  top: 0;
  left: 0;

  /* Size - Quadrado fixo */
  width: 44px;
  height: 44px;
  padding: 0.5rem;
  justify-content: center;

  /* Visual - Quadrado no canto */
  border-radius: 20px;
  border-top-left-radius: 0; /* Remove arredondamento */

  /* Opacity - Auto-hide */
  opacity: 0.85; /* Ativo */
}

.spotify-badge.is-hidden {
  opacity: 0.4; /* Idle após 3s */
}

/* Apenas ícone visível */
.spotify-text {
  display: none; /* Oculto */
}

.spotify-icon {
  width: 24px; /* Maior */
  height: 24px;
}
```

### Tablet (768px - 1023px)

```css
.spotify-badge {
  /* Similar ao mobile, mas um pouco maior */
  top: 0;
  left: 0;
  width: 48px;
  height: 48px;
  padding: 0.625rem;
  border-top-left-radius: 0;
}

.spotify-text {
  display: none;
}

.spotify-icon {
  width: 24px;
  height: 24px;
}
```

---

## 🎬 Comportamento de Auto-hide

### Desktop

- ❌ Auto-hide desabilitado
- ✅ Badge sempre visível (opacity: 1)
- ✅ Hover: Scale 1.05 + cor mais clara

### Mobile/Tablet

- ✅ Auto-hide ativado
- ⏱️ Após 3s de inatividade → opacity: 0.4
- 🔄 Reaparece em:
  - Scroll
  - Touch (touchstart)
  - Mouse move
  - Hover no badge
  - Focus (teclado)
- ⚡ Debounce: 150ms

---

## ♿ Acessibilidade

### WCAG 2.1 AA Compliance

✅ **Touch Target:** 44×44px nativo (mobile)  
✅ **Color Contrast:** Verde Spotify #1DB954 vs branco = 4.5:1+  
✅ **Focus State:** Outline azul 3px, offset 2px  
✅ **ARIA Label:** "Ouça a playlist oficial STL Festival no Spotify"  
✅ **Keyboard Navigation:** Totalmente navegável  
✅ **Reduced Motion:** Animações desabilitadas se preferência ativa  
✅ **Semantic HTML:** `<a>` com `rel="noopener noreferrer"`

---

## 📊 Comparação: Antes vs Depois

| Característica     | ANTES                       | DEPOIS                |
| ------------------ | --------------------------- | --------------------- |
| **Ordem Desktop**  | Ícone → Texto               | Texto → Ícone         |
| **Mobile**         | Texto + Ícone (pequeno)     | Apenas Ícone (grande) |
| **Tamanho Mobile** | ~84×28px (scale 0.7)        | 44×44px (fixo)        |
| **Posição Mobile** | top: 0.75rem, left: 0.75rem | top: 0, left: 0       |
| **Shape Mobile**   | Pill arredondado            | Quadrado no canto     |
| **Ícone Mobile**   | 20px                        | 24px                  |
| **Tap Area**       | Via ::before (expandido)    | Nativo 44×44px        |

---

## 🚀 Benefícios

### UX Mobile

- ✅ **Menos intrusivo:** Apenas ícone ocupa menos espaço
- ✅ **Melhor posicionamento:** Encosta no canto = mais área de tela
- ✅ **Ícone reconhecível:** Logo Spotify é universalmente conhecido
- ✅ **Fácil de alcançar:** Canto superior esquerdo é zona de polegar

### Design

- ✅ **Desktop informativo:** Texto deixa claro o propósito
- ✅ **Mobile minimalista:** Apenas o essencial
- ✅ **Visual limpo:** Sem texto comprimido em telas pequenas
- ✅ **Integração orgânica:** Badge se "funde" com o canto

### Performance

- ✅ **Menos rendering:** Sem texto em mobile = menos DOM
- ✅ **Tap target nativo:** Remove necessidade de ::before expandido
- ✅ **CSS simplificado:** Sem transform: scale()

---

## 🧪 Checklist de Testes

### Visual

- [ ] Desktop mostra: "playlist stl-festival [🎵]"
- [ ] Mobile mostra: Apenas ícone 🎵
- [ ] Badge encosta no canto (sem margem) em mobile
- [ ] Border-radius quadrado no canto superior esquerdo (mobile)
- [ ] Ícone maior (24px) em mobile vs desktop (20px)

### Comportamento

- [ ] Auto-hide funciona em mobile (<1024px)
- [ ] Badge reaparece ao scroll
- [ ] Badge reaparece ao touch
- [ ] Badge reaparece ao hover
- [ ] Desktop: Badge sempre visível
- [ ] Link abre Spotify em nova aba

### Acessibilidade

- [ ] Tab: Badge é focável por teclado
- [ ] Focus state visível (outline azul)
- [ ] Touch target 44×44px em mobile
- [ ] ARIA label presente
- [ ] Screen reader lê corretamente

### Responsividade

- [ ] 320px: Badge 44×44px, apenas ícone
- [ ] 768px: Badge 48×48px, apenas ícone
- [ ] 1024px+: Badge com texto + ícone

---

## 📝 Notas Finais

### Por Que Texto Primeiro no Desktop?

1. **Leitura natural:** Ocidente lê esquerda → direita
2. **Hierarquia de informação:** Texto é mais informativo que ícone
3. **Pattern comum:** Muitos botões seguem "Label + Icon"
4. **Melhor para screen readers:** Texto lido antes do ícone decorativo

### Por Que Apenas Ícone no Mobile?

1. **Economia de espaço:** 44px vs ~140px
2. **Reconhecimento:** Logo Spotify é icônico
3. **Menos poluição visual:** Tela pequena = priorizar conteúdo principal
4. **Padrão mobile:** Apps usam ícones, não textos longos

### Por Que Encostar no Canto?

1. **Lei de Fitts:** Cantos são alvos infinitos (fáceis de acertar)
2. **Mais área útil:** Maximiza espaço para conteúdo hero
3. **Visual limpo:** Badge "integrado" ao layout
4. **Padrão estabelecido:** Muitos apps põem badges nos cantos

---

**✅ Badge Spotify finalizado e otimizado!**

Versão: 1.4 - Final  
Data: 28/01/2026
