import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar/Navbar'
import { Layout } from '../components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
