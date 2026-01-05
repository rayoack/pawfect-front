import api from '@/lib/api'

export const productService = {
  async getAll(filters?: any) {
    const response = await api.get('/api/products', { params: filters })
    return response.data
  },

  async getBySlug(slug: string) {
    const response = await api.get(`/api/products/${slug}`)
    return response.data
  },

  async getByCategory(categorySlug: string) {
    const response = await api.get('/api/products', {
      params: {
        'filters[categorias][slug][$eq]': categorySlug
      }
    })
    return response.data
  }
}

export const categoryService = {
  async getAll() {
    const response = await api.get('/api/categories')
    return response.data
  }
}

export const bannerService = {
  async getAll(position?: string) {
    const response = await api.get('/api/banners', {
      params: position ? { position } : {}
    })
    return response.data
  }
}

export const showcaseService = {
  async getByIdentifier(identifier: string) {
    const response = await api.get(`/api/showcases/${identifier}`)
    return response.data
  }
}
