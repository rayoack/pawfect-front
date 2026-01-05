import { create } from 'zustand'
import { authService } from '@/services/authService'

interface User {
  id: string
  email: string
  nome: string
  telefone?: string
}

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null

  login: (email: string, password: string) => Promise<void>
  register: (data: any) => Promise<void>
  logout: () => void
  checkAuth: () => Promise<void>
  updateProfile: (data: { nome?: string; telefone?: string }) => Promise<void>
  clearError: () => void
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null,

  login: async (email, password) => {
    try {
      set({ loading: true, error: null })
      const data = await authService.login(email, password)
      set({ user: data.user, isAuthenticated: true, loading: false })
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao fazer login',
        loading: false
      })
      throw error
    }
  },

  register: async (data) => {
    try {
      set({ loading: true, error: null })
      const response = await authService.register(data)
      set({ user: response.user, isAuthenticated: true, loading: false })
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao criar conta',
        loading: false
      })
      throw error
    }
  },

  logout: () => {
    authService.logout()
    set({ user: null, isAuthenticated: false })
  },

  checkAuth: async () => {
    try {
      const token = authService.getToken()
      if (!token) {
        set({ loading: false, isAuthenticated: false })
        return
      }

      const user = await authService.getMe()
      set({ user, isAuthenticated: true, loading: false })
    } catch (error) {
      set({ user: null, isAuthenticated: false, loading: false })
      authService.logout()
    }
  },

  updateProfile: async (data) => {
    try {
      set({ loading: true, error: null })
      const response = await authService.updateProfile(data)
      set({ user: response.user, loading: false })
    } catch (error: any) {
      set({
        error: error.response?.data?.error || 'Erro ao atualizar perfil',
        loading: false
      })
      throw error
    }
  },

  clearError: () => set({ error: null })
}))
