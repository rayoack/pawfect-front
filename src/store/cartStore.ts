import { create } from 'zustand'
import { cartService } from '@/services/cartService'

interface CartItem {
  id: string
  productId: string
  quantity: number
  selectedColor?: string
  selectedSize?: string
  product: any
}

interface CartStore {
  items: CartItem[]
  totalItems: number
  loading: boolean
  error: string | null

  fetchCart: () => Promise<void>
  addItem: (productId: string, quantity: number, options?: any) => Promise<void>
  updateItem: (id: string, quantity: number) => Promise<void>
  removeItem: (id: string) => Promise<void>
  clearCart: () => Promise<void>
  getCartTotal: () => number
  clearError: () => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  totalItems: 0,
  loading: false,
  error: null,

  fetchCart: async () => {
    try {
      set({ loading: true, error: null })
      const data = await cartService.getCart()
      set({ items: data.items, totalItems: data.totalItems, loading: false })
    } catch (error: any) {
      // Se não autenticado, apenas limpar o carrinho
      if (error.response?.status === 401) {
        set({ items: [], totalItems: 0, loading: false })
      } else {
        set({
          error: error.response?.data?.error || 'Erro ao carregar carrinho',
          loading: false
        })
      }
    }
  },

  addItem: async (productId, quantity, options) => {
    try {
      set({ loading: true, error: null })
      await cartService.addItem({ productId, quantity, ...options })
      await get().fetchCart()
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao adicionar item',
        loading: false
      })
      throw error
    }
  },

  updateItem: async (id, quantity) => {
    try {
      set({ loading: true, error: null })
      await cartService.updateItem(id, quantity)
      await get().fetchCart()
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao atualizar item',
        loading: false
      })
      throw error
    }
  },

  removeItem: async (id) => {
    try {
      set({ loading: true, error: null })
      await cartService.removeItem(id)
      await get().fetchCart()
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao remover item',
        loading: false
      })
      throw error
    }
  },

  clearCart: async () => {
    try {
      set({ loading: true, error: null })
      await cartService.clearCart()
      set({ items: [], totalItems: 0, loading: false })
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao limpar carrinho',
        loading: false
      })
      throw error
    }
  },

  getCartTotal: () => {
    const { items } = get()
    return items.reduce((total, item) => {
      const price = item.product?.attributes?.precoPromocional || item.product?.attributes?.preco || 0
      return total + (price * item.quantity)
    }, 0)
  },

  clearError: () => set({ error: null })
}))
