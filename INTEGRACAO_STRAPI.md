# Integração com Strapi CMS - Pawfect Pet Care

## 📋 Resumo

Este documento explica como os componentes da homepage estão conectados ao Strapi CMS e como popular o Strapi com dados reais para substituir os dados mockados.

## ✅ Componentes Conectados ao Strapi

### 1. **Homepage ([src/app/page.tsx](src/app/page.tsx))**

A homepage agora é um **Server Component** que faz fetch de dados do Strapi no servidor usando `fetch()` com cache.

**Dados buscados:**
- ✅ Banners promocionais
- ✅ Categorias de produtos
- ✅ Produtos
- ✅ Vitrines (showcases)

**Fallback:**
Se o Strapi não estiver disponível ou não tiver dados, a aplicação usa dados mockados locais automaticamente.

```typescript
// Exemplo de fetch com cache (60 segundos)
const bannersRes = await fetch(`${STRAPI_URL}/api/banners?populate=*`, {
  next: { revalidate: 60 }
})
```

### 2. **Banner Component ([src/components/Pet/Banner.tsx](src/components/Pet/Banner.tsx))**

**Antes:** Exibia 3 banners hardcoded
**Depois:** Recebe banners do Strapi via props

**Estrutura esperada do Strapi:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "titulo": "Comida para Cães",
        "subtitulo": "Nutrição Completa",
        "textoDestaque": "15 Produtos",
        "link": "/shop/breadcrumb1",
        "imagemDesktop": {
          "data": {
            "attributes": {
              "url": "/uploads/banner_dog_food.jpg"
            }
          }
        },
        "posicao": "promotional",
        "ordem": 1,
        "ativo": true
      }
    }
  ]
}
```

**Filtros aplicados:**
- `posicao === 'promotional'` (apenas banners promocionais da home)
- `ativo === true` (apenas ativos)
- Ordenados por `ordem`
- Máximo de 3 banners exibidos

### 3. **Collection Component ([src/components/Pet/Collection.tsx](src/components/Pet/Collection.tsx))**

**Antes:** Exibia 7 categorias hardcoded
**Depois:** Recebe categorias do Strapi via props

**Estrutura esperada do Strapi:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "nome": "Alimentação",
        "slug": "alimentacao",
        "descricao": "Rações e petiscos para cães e gatos",
        "imagem": {
          "data": {
            "attributes": {
              "url": "/uploads/category_food.png"
            }
          }
        },
        "ordem": 1,
        "ativa": true
      }
    }
  ]
}
```

**Filtros aplicados:**
- `ativa === true` (apenas categorias ativas)
- Ordenadas por `ordem`

### 4. **TabFeatures Component**

Recebe produtos do Strapi e filtra por categoria "pet" e por sale/new.

### 5. **FeatureProduct Component**

Recebe produtos do Strapi e filtra por tipo (food, bed, outfit, ring).

---

## 🎨 Como Popular o Strapi

### Passo 1: Iniciar o Strapi

```bash
cd strapi-new
npm run develop
```

Acesse o admin em: http://localhost:1337/admin

### Passo 2: Criar Content Types

Se ainda não existirem, crie os seguintes Content Types no Strapi:

#### **Banners**
- `titulo` - Text (required)
- `subtitulo` - Text
- `textoDestaque` - Text
- `link` - Text
- `imagemDesktop` - Media (single image, required)
- `imagemMobile` - Media (single image)
- `posicao` - Enumeration (hero, promotional, secondary) - required
- `ordem` - Number (integer) - required
- `ativo` - Boolean - required

#### **Categories (Categorias)**
- `nome` - Text (required)
- `slug` - UID (target field: nome) - required
- `descricao` - Text
- `imagem` - Media (single image, required)
- `ordem` - Number (integer) - required
- `ativa` - Boolean - required
- `produtos` - Relation (many-to-many with Products)

#### **Products (Produtos)**
- `titulo` - Text (required)
- `slug` - UID (target field: titulo) - required
- `descricaoCurta` - Text (required)
- `descricaoLonga` - Rich Text (required)
- `sku` - Text (required)
- `preco` - Decimal (required)
- `precoPromocional` - Decimal
- `emPromocao` - Boolean
- `novoLancamento` - Boolean
- `estoque` - Number (integer, required)
- `vendidos` - Number (integer)
- `categorias` - Relation (many-to-many with Categories)
- `imagens` - Media (multiple images, required)

### Passo 3: Popular Banners Promocionais

No admin do Strapi, vá em **Banners** → **Create new entry**

**Banner 1 - Comida para Cães:**
```
Título: Comida para Cães
Subtítulo: Nutrição Completa
Texto Destaque: 15 Produtos
Link: /shop/breadcrumb1
Imagem Desktop: [Upload uma imagem de ração para cães]
Posição: promotional
Ordem: 1
Ativo: ✅
```

**Banner 2 - Comida para Gatos:**
```
Título: Comida para Gatos
Subtítulo: Alimentação Especial
Texto Destaque: 15 Produtos
Link: /shop/breadcrumb1
Imagem Desktop: [Upload uma imagem de ração para gatos]
Posição: promotional
Ordem: 2
Ativo: ✅
```

**Banner 3 - Promoção:**
```
Título: 20% de Desconto
Subtítulo: Promoção Especial
Texto Destaque: Oferta Limitada
Link: /shop/breadcrumb1
Imagem Desktop: [Upload uma imagem promocional]
Posição: promotional
Ordem: 3
Ativo: ✅
```

### Passo 4: Popular Categorias

No admin do Strapi, vá em **Categories** → **Create new entry**

**Categorias sugeridas:**

1. **Alimentação**
   - Nome: Alimentação
   - Slug: alimentacao (auto-gerado)
   - Descrição: Rações, petiscos e alimentos para pets
   - Imagem: [Upload imagem de categoria]
   - Ordem: 1
   - Ativa: ✅

2. **Roupas**
   - Nome: Roupas
   - Slug: roupas
   - Descrição: Vestuário e acessórios de moda para pets
   - Imagem: [Upload imagem]
   - Ordem: 2
   - Ativa: ✅

3. **Camas**
   - Nome: Camas
   - Slug: camas
   - Descrição: Camas confortáveis para o descanso do seu pet
   - Imagem: [Upload imagem]
   - Ordem: 3
   - Ativa: ✅

4. **Brinquedos**
   - Nome: Brinquedos
   - Slug: brinquedos
   - Descrição: Brinquedos divertidos para entreter seu pet
   - Imagem: [Upload imagem]
   - Ordem: 4
   - Ativa: ✅

5. **Suplementos**
   - Nome: Suplementos
   - Slug: suplementos
   - Descrição: Vitaminas e suplementos para a saúde
   - Imagem: [Upload imagem]
   - Ordem: 5
   - Ativa: ✅

6. **Farmácia**
   - Nome: Farmácia
   - Slug: farmacia
   - Descrição: Medicamentos e produtos de saúde
   - Imagem: [Upload imagem]
   - Ordem: 6
   - Ativa: ✅

7. **Coleiras**
   - Nome: Coleiras
   - Slug: coleiras
   - Descrição: Coleiras, guias e acessórios de passeio
   - Imagem: [Upload imagem]
   - Ordem: 7
   - Ativa: ✅

### Passo 5: Popular Produtos (Exemplos)

No admin do Strapi, vá em **Products** → **Create new entry**

**Exemplo de Produto:**
```
Título: Ração Golden Fórmula para Cães Adultos
Slug: racao-golden-formula-caes-adultos
Descrição Curta: Ração completa com nutrientes essenciais
Descrição Longa: [Rich text com detalhes do produto]
SKU: RAC-GOLD-CAE-15KG
Preço: 189.90
Preço Promocional: 169.90 (opcional)
Em Promoção: ✅
Novo Lançamento: ❌
Estoque: 50
Vendidos: 120
Categorias: [Selecionar "Alimentação"]
Imagens: [Upload imagens do produto]
```

Crie pelo menos 8-10 produtos variados para popular as vitrines.

### Passo 6: Configurar Permissões do Strapi

**IMPORTANTE:** Para que o frontend possa acessar os dados, configure as permissões:

1. Vá em **Settings** → **Users & Permissions Plugin** → **Roles**
2. Clique em **Public**
3. Marque as seguintes permissões:
   - **Banner:** `find`, `findOne`
   - **Category:** `find`, `findOne`
   - **Product:** `find`, `findOne`
   - **Showcase:** `find`, `findOne`
4. Clique em **Save**

---

## 🔄 Testando a Integração

### 1. Verificar se o Strapi está rodando

```bash
curl http://localhost:1337/api/banners
```

Deve retornar JSON com banners.

### 2. Verificar o frontend

```bash
cd anvogue
npm run dev
```

Acesse: http://localhost:3000

**O que você deve ver:**
- ✅ Banners do Strapi (se populado) ou banners mockados (fallback)
- ✅ Categorias do Strapi (se populado) ou categorias mockadas (fallback)
- ✅ Produtos do Strapi (se populado) ou produtos mockados (fallback)

### 3. Verificar console do frontend

Abra o DevTools e procure por logs:
```
Error fetching Strapi data: [erro se houver]
```

Se não houver erros, os dados estão sendo buscados corretamente.

---

## 🎯 Próximos Passos

### 1. Popular mais dados no Strapi
- Adicionar mais produtos (mínimo 20 para vitrines)
- Adicionar mais banners (hero, secondary)
- Criar showcases (vitrines customizadas)

### 2. Conectar outros componentes
- **SliderPet** - Buscar slides do Strapi
- **Banner2** - Buscar banner secundário do Strapi
- **Instagram** - Buscar posts de redes sociais do Strapi

### 3. Imagens reais
- Substituir placeholders por imagens reais de produtos pet
- Otimizar imagens (WebP, tamanhos corretos)
- Upload para Strapi Media Library

### 4. SEO e Performance
- Adicionar meta tags dinâmicas baseadas no Strapi
- Implementar sitemap dinâmico
- Otimizar cache do Next.js (revalidate strategy)

---

## 📝 Estrutura de URLs da API Strapi

### Endpoints disponíveis:

```
GET /api/banners?populate=*
GET /api/banners/:id?populate=*
GET /api/categories?populate=*
GET /api/categories/:id?populate=*
GET /api/products?populate=*
GET /api/products/:id?populate=*
GET /api/showcases?populate=*
GET /api/showcases/:id?populate=*
```

### Filtros úteis:

```
# Banners ativos, ordenados por ordem
GET /api/banners?filters[ativo][$eq]=true&sort=ordem:asc&populate=*

# Categorias ativas, ordenadas
GET /api/categories?filters[ativa][$eq]=true&sort=ordem:asc&populate=*

# Produtos em promoção
GET /api/products?filters[emPromocao][$eq]=true&populate=*

# Produtos novos
GET /api/products?filters[novoLancamento][$eq]=true&populate=*

# Produtos por categoria
GET /api/products?filters[categorias][slug][$eq]=alimentacao&populate=*
```

---

## 🐛 Troubleshooting

### Problema: Imagens não carregam

**Causa:** Next.js não permite imagens de domínios externos por padrão.

**Solução:** Adicionar no `next.config.js`:
```javascript
module.exports = {
  images: {
    domains: ['localhost', 'seu-dominio-strapi.com'],
  },
}
```

### Problema: CORS error

**Causa:** Strapi não está configurado para aceitar requisições do frontend.

**Solução:** Configurar CORS no Strapi (`config/middlewares.js`):
```javascript
module.exports = [
  // ...
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000'],
    },
  },
]
```

### Problema: Dados não aparecem

1. Verificar se Strapi está rodando: `curl http://localhost:1337/api/banners`
2. Verificar se as permissões estão corretas no Strapi (Settings → Roles → Public)
3. Verificar console do browser por erros
4. Verificar se `.env.local` tem `NEXT_PUBLIC_STRAPI_URL=http://localhost:1337`

---

## 📚 Documentação Relacionada

- [CLAUDE.md](../CLAUDE.md) - Arquitetura completa do projeto
- [MUDANCAS_VISUAIS.md](MUDANCAS_VISUAIS.md) - Mudanças visuais implementadas
- [README_FASE4.md](README_FASE4.md) - Fase 4: Integração Frontend/Backend
- [README_FASE5.md](README_FASE5.md) - Fase 5: Autenticação e Features

---

**Data:** 2025-11-23
**Versão:** 1.0
**Status:** ✅ Integração implementada, aguardando população do Strapi
