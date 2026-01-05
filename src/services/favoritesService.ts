import api from '@/lib/api'

export const favoritesService = {
  async getFavorites() {
    const response = await api.get('/api/favorites')
    return response.data.favorites
  },

  async addFavorite(productId: string) {
    const response = await api.post('/api/favorites', { productId })
    return response.data
  },

  async removeFavorite(productId: string) {
    const response = await api.delete(`/api/favorites/${productId}`)
    return response.data
  },

  async isFavorite(productId: string) {
    try {
      const favorites = await this.getFavorites()
      return favorites.some((fav: any) => fav.productId === productId)
    } catch (error) {
      return false
    }
  }
}
