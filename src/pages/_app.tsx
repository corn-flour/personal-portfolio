import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'

import Layout from '@/components/layout/Layout'
import Seo from '@/components/Seo'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute='class'>
            <Layout>
                <Seo />
                <main>
                    <Component {...pageProps} />
                </main>
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
