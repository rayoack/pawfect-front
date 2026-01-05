import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  jit: true,
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        uptown: ['Uptown', 'sans-serif'],
      },
    },
    container: {
      padding: {
        DEFAULT: '16px',
      },
    },
    colors: {
      transparent: 'transparent',
      // Cores Pawfect Pet Care (Primary)
      'primary-blue-deep': '#0037C5',      // Azul Profundo (Pantone 2935 C)
      'primary-blue-vibrant': '#0860F0',   // Azul Vibrante (Pantone 2727 C)

      // Cores de Acento (Accent)
      'accent-orange-intense': '#FF4C01',  // Laranja Intenso (Pantone 1655 C)
      'accent-orange-medium': '#FF7701',   // Laranja Médio (Pantone 151 C)
      'accent-yellow-solar': '#FFB801',    // Amarelo Solar (Pantone 137 C)

      // Cor Neutra
      'neutral-beige': '#F9F2DF',          // Bege Neutro (Pantone 7499 C)

      // Cores do Sistema (mantidas para compatibilidade)
      'black': '#1F1F1F',
      'white': '#ffffff',
      'secondary': '#696C70',
      'secondary2': '#A0A0A0',
      'gray': '#696C70',
      'gray-light': '#A0A0A0',
      'surface': '#F7F7F7',
      'line': '#E9E9E9',
      'outline': 'rgba(0, 0, 0, 0.15)',
      'surface2': 'rgba(255, 255, 255, 0.2)',
      'surface1': 'rgba(255, 255, 255, 0.1)',

      // Cores funcionais
      'red': '#DB4444',
      'success': '#3DAB25',
      'purple': '#8684D4',
      'pink': '#F4407D',

      // Aliases para facilitar migração
      'green': '#D2EF9A',        // Mantido para compatibilidade
      'yellow': '#FFB801',       // Atualizado para Pawfect
    },
  },
  plugins: [],
}
export default config
