import { create } from 'zustand'
import { favoritesService } from '@/services/favoritesService'

interface Favorite {
  id: string
  userId: string
  productId: string
  product: any
  createdAt: string
}

interface FavoritesStore {
  favorites: Favorite[]
  loading: boolean
  error: string | null

  fetchFavorites: () => Promise<void>
  addFavorite: (productId: string) => Promise<void>
  removeFavorite: (productId: string) => Promise<void>
  isFavorite: (productId: string) => boolean
  toggleFavorite: (productId: string) => Promise<void>
  clearError: () => void
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],
  loading: false,
  error: null,

  fetchFavorites: async () => {
    try {
      set({ loading: true, error: null })
      const favorites = await favoritesService.getFavorites()
      set({ favorites, loading: false })
    } catch (error: any) {
      // Se não autenticado, apenas limpar favoritos
      if (error.response?.status === 401) {
        set({ favorites: [], loading: false })
      } else {
        set({
          error: error.response?.data?.error || 'Erro ao carregar favoritos',
          loading: false
        })
      }
    }
  },

  addFavorite: async (productId) => {
    try {
      set({ loading: true, error: null })
      await favoritesService.addFavorite(productId)
      await get().fetchFavorites()
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao adicionar favorito',
        loading: false
      })
      throw error
    }
  },

  removeFavorite: async (productId) => {
    try {
      set({ loading: true, error: null })
      await favoritesService.removeFavorite(productId)
      await get().fetchFavorites()
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao remover favorito',
        loading: false
      })
      throw error
    }
  },

  isFavorite: (productId) => {
    const { favorites } = get()
    return favorites.some(fav => fav.productId === productId)
  },

  toggleFavorite: async (productId) => {
    const { isFavorite, addFavorite, removeFavorite } = get()

    if (isFavorite(productId)) {
      await removeFavorite(productId)
    } else {
      await addFavorite(productId)
    }
  },

  clearError: () => set({ error: null })
}))
