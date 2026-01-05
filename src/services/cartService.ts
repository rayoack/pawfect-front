import api from '@/lib/api'

interface AddToCartData {
  productId: string
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

export const cartService = {
  async getCart() {
    const response = await api.get('/api/cart')
    return response.data
  },

  async addItem(data: AddToCartData) {
    const response = await api.post('/api/cart/items', data)
    return response.data
  },

  async updateItem(id: string, quantity: number) {
    const response = await api.put(`/api/cart/items/${id}`, { quantity })
    return response.data
  },

  async removeItem(id: string) {
    const response = await api.delete(`/api/cart/items/${id}`)
    return response.data
  },

  async clearCart() {
    const response = await api.delete('/api/cart/clear')
    return response.data
  }
}
