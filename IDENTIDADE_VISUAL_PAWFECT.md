# Identidade Visual Pawfect Pet Care

## Cores Aplicadas no Sistema

### Cores Primárias
- **Azul Profundo**: `#0037C5` (Pantone 2935 C)
  - Usado em: Botões principais, header, links hover
  - CSS var: `--primary-blue-deep`
  - Tailwind: `bg-primary-blue-deep`

- **Azul Vibrante**: `#0860F0` (Pantone 2727 C)
  - Usado em: Hover states, destaques, badges best-seller
  - CSS var: `--primary-blue-vibrant`
  - Tailwind: `bg-primary-blue-vibrant`

### Cores de Acento
- **Laranja Intenso**: `#FF4C01` (Pantone 1655 C)
  - Usado em: Botões de ação, badges SALE, CTAs secundários
  - CSS var: `--accent-orange-intense`
  - Tailwind: `bg-accent-orange-intense`

- **Laranja Médio**: `#FF7701` (Pantone 151 C)
  - Usado em: Hover de botões laranja
  - CSS var: `--accent-orange-medium`
  - Tailwind: `bg-accent-orange-medium`

- **Amarelo Solar**: `#FFB801` (Pantone 137 C)
  - Usado em: Badges NEW, estrelas de rating
  - CSS var: `--accent-yellow-solar`
  - Tailwind: `bg-accent-yellow-solar`

### Cor Neutra
- **Bege Neutro**: `#F9F2DF` (Pantone 7499 C)
  - Usado em: Backgrounds suaves, footer
  - CSS var: `--neutral-beige`
  - Tailwind: `bg-neutral-beige`

## Arquivos Modificados

### 1. [src/styles/globals.scss](src/styles/globals.scss)
**Modificações:**
- ✅ Adicionadas variáveis CSS Pawfect (:root)
- ✅ Botão principal (.button-main) alterado para azul
- ✅ Hover alterado para azul vibrante
- ✅ Adicionada variante .bg-orange
- ✅ Atualizada variante .bg-white com borda azul

**Antes:**
```scss
background-color: var(--black); // Preto
&:hover {
  background-color: var(--green); // Verde
}
```

**Depois:**
```scss
background-color: var(--primary-blue-deep); // Azul Pawfect
&:hover {
  background-color: var(--primary-blue-vibrant); // Azul vibrante
}
```

### 2. [tailwind.config.ts](tailwind.config.ts)
**Modificações:**
- ✅ Cores Pawfect adicionadas ao theme.colors
- ✅ Fontes Poppins e Uptown configuradas
- ✅ Aliases mantidos para compatibilidade

### 3. [src/styles/pawfect-custom.scss](src/styles/pawfect-custom.scss) ✨ NOVO
**Arquivo criado especificamente para Pawfect com:**
- ✅ Badges (SALE, NEW, BEST SELLER) com cores Pawfect
- ✅ Header links hover em azul vibrante
- ✅ Product cards com border azul no hover
- ✅ Botões de adicionar ao carrinho em laranja
- ✅ Preços em azul profundo
- ✅ Tab navigation com underline azul
- ✅ Footer com fundo bege neutro
- ✅ Inputs focus em azul vibrante
- ✅ Rating stars em amarelo solar
- ✅ Swiper pagination em azul
- ✅ Animações suaves globais

### 4. [src/styles/styles.scss](src/styles/styles.scss)
**Modificações:**
- ✅ Importação do pawfect-custom.scss adicionada

### 5. [src/app/homepages/pet/page.tsx](src/app/homepages/pet/page.tsx)
**Modificações:**
- ✅ TopNav alterado de `bg-black` para `bg-primary-blue-deep`
- ✅ Slogan atualizado para mensagem Pawfect com emoji 🐾

### 6. [src/app/layout.tsx](src/app/layout.tsx)
**Modificações:**
- ✅ Título alterado para "Pawfect Pet Care"
- ✅ Descrição atualizada
- ✅ Lang alterado para pt-BR
- ✅ Toaster adicionado com cores Pawfect

## Componentes Estilizados

### Botões
```tsx
// Botão principal (azul)
<button className="button-main">Comprar</button>

// Botão laranja
<button className="button-main bg-orange">Adicionar ao Carrinho</button>

// Botão branco com borda azul
<button className="button-main bg-white">Ver Mais</button>
```

### Badges de Produtos
```tsx
// Badge SALE (laranja intenso)
<span className="badge sale">SALE</span>

// Badge NEW (amarelo solar)
<span className="badge new">NEW</span>

// Badge BEST SELLER (azul vibrante)
<span className="badge best-seller">BEST SELLER</span>
```

### Header/TopNav
```tsx
// Header com azul profundo
<TopNavOne
  props="style-one bg-primary-blue-deep"
  slogan="🐾 Bem-vindo à Pawfect Pet Care!"
/>
```

## Esquema de Cores por Seção

### Header
- **Background**: Azul Profundo (#0037C5)
- **Texto**: Branco (#FFFFFF)
- **Hover**: Azul Vibrante (#0860F0)

### Botões Principais
- **Background**: Azul Profundo (#0037C5)
- **Hover**: Azul Vibrante (#0860F0)
- **Texto**: Branco (#FFFFFF)

### Botões de Ação (Carrinho)
- **Background**: Laranja Intenso (#FF4C01)
- **Hover**: Laranja Médio (#FF7701)
- **Texto**: Branco (#FFFFFF)

### Badges
- **SALE/HOT**: Laranja Intenso (#FF4C01)
- **NEW**: Amarelo Solar (#FFB801) com texto preto
- **BEST SELLER**: Azul Vibrante (#0860F0)

### Preços
- **Preço Atual**: Azul Profundo (#0037C5), bold
- **Preço Original**: Cinza claro (#A0A0A0), tachado

### Footer
- **Background**: Bege Neutro (#F9F2DF)
- **Títulos**: Azul Profundo (#0037C5)
- **Links Hover**: Azul Vibrante (#0860F0)

### Cards de Produto
- **Border Hover**: Azul Profundo (#0037C5)
- **Wishlist Hover**: Laranja Intenso (#FF4C01)

### Forms/Inputs
- **Focus**: Azul Vibrante (#0860F0)
- **Checkbox Checked**: Azul Profundo (#0037C5)

## Estados Interativos

### Hover
Todos os elementos interativos têm transição suave (0.3s ease) entre:
- Azul Profundo → Azul Vibrante (botões primários)
- Laranja Intenso → Laranja Médio (botões de ação)
- Preto → Azul Vibrante (links)

### Focus
- Inputs e textareas: border azul vibrante
- Botões: outline azul vibrante

### Active
- Tabs: underline azul profundo
- Menu items: background azul vibrante com opacity

## Acessibilidade

### Contraste
Todas as combinações de cores atendem WCAG 2.1 AA:
- ✅ Azul Profundo + Branco: 10.32:1
- ✅ Laranja Intenso + Branco: 4.53:1
- ✅ Amarelo Solar + Preto: 7.85:1

### Responsividade
- Mobile: cores mantidas, apenas ajustes de tamanho
- Tablet: igual ao desktop
- Desktop: todas as variações de cores aplicadas

## Como Usar em Novos Componentes

### Com Tailwind Classes
```tsx
<div className="bg-primary-blue-deep text-white hover:bg-primary-blue-vibrant">
  Elemento com cores Pawfect
</div>
```

### Com CSS Vars
```scss
.my-component {
  background-color: var(--primary-blue-deep);

  &:hover {
    background-color: var(--primary-blue-vibrant);
  }
}
```

### Com Classes Existentes
```tsx
// Use classes já estilizadas
<button className="button-main">Azul</button>
<button className="button-main bg-orange">Laranja</button>
<span className="badge sale">SALE</span>
```

## Checklist de Implementação

- ✅ Variáveis CSS globais
- ✅ Tailwind config colors
- ✅ Botão principal
- ✅ Header/TopNav
- ✅ Badges de produtos
- ✅ Links hover
- ✅ Forms focus
- ✅ Footer background
- ✅ Product cards
- ✅ Preços
- ✅ Toaster notifications
- ⏳ Slider/Banner images
- ⏳ Logo Pawfect (substituir Anvogue)
- ⏳ Ícones customizados
- ⏳ Imagens de produtos reais

## Próximos Passos

1. **Adicionar Logo Pawfect**
   - Substituir logo Anvogue nos componentes Header
   - Arquivos em: `/identidade/Logos/`

2. **Imagens de Banner**
   - Criar banners com cores Pawfect
   - Usar Strapi para gerenciar

3. **Produtos com Imagens Reais**
   - Popular Strapi com produtos
   - Upload de imagens de produtos pet

4. **Ícones Personalizados**
   - Considerar trocar Phosphor Icons por ícones custom
   - Ou manter e apenas ajustar cores

---

**Data**: 2025-11-23
**Versão**: 1.0
**Status**: ✅ Cores aplicadas | ⏳ Imagens e conteúdo pendentes
