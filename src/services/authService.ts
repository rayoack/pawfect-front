import api from '@/lib/api'

interface RegisterData {
  email: string
  password: string
  nome: string
  telefone?: string
}

interface LoginResponse {
  message: string
  token: string
  user: {
    id: string
    email: string
    nome: string
  }
}

export const authService = {
  async register(data: RegisterData): Promise<LoginResponse> {
    const response = await api.post('/api/auth/register', data)
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return response.data
  },

  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await api.post('/api/auth/login', { email, password })
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
    }
    return response.data
  },

  async getMe() {
    const response = await api.get('/api/auth/me')
    return response.data.user
  },

  async updateProfile(data: { nome?: string; telefone?: string }) {
    const response = await api.put('/api/auth/profile', data)
    return response.data
  },

  logout() {
    localStorage.removeItem('token')
  },

  getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token')
    }
    return null
  },

  isAuthenticated() {
    return !!this.getToken()
  }
}
