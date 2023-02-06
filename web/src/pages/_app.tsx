import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import { Footer } from 'src/lib/Footer'
import { Layout } from 'src/lib/Layout'
import { Navbar } from 'src/lib/Navbar'
import 'src/lib/ui/styles.css'



export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}
