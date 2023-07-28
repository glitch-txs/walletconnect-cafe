import '@/styles/globals.css'
import { initProvider } from '@/walletconnect'
import type { AppProps } from 'next/app'

initProvider()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
