import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import '@/styles/styles.scss'
import GlobalProvider from './GlobalProvider'
import ModalCart from '@/components/Modal/ModalCart'
import ModalWishlist from '@/components/Modal/ModalWishlist'
import ModalSearch from '@/components/Modal/ModalSearch'
import ModalQuickview from '@/components/Modal/ModalQuickview'
import ModalCompare from '@/components/Modal/ModalCompare'
import CountdownTimeType from '@/type/CountdownType'
import { countdownTime } from '@/store/countdownTime'
import { Toaster } from 'react-hot-toast'

const serverTimeLeft: CountdownTimeType = countdownTime();

const instrument = Instrument_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pawfect Pet Care - Tudo para o seu melhor amigo',
  description: 'Ecommerce completo para pet shop com produtos de qualidade para seu pet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalProvider>
      <html lang="pt-BR">
        <body className={instrument.className}>
          {children}
          <ModalCart serverTimeLeft={serverTimeLeft} />
          <ModalWishlist />
          <ModalSearch />
          <ModalQuickview />
          <ModalCompare />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#fff',
                color: '#1F1F1F',
                padding: '16px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              },
              success: {
                iconTheme: {
                  primary: '#3DAB25',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#DB4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </body>
      </html>
    </GlobalProvider>
  )
}
