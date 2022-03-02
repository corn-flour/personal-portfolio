import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css'
import '@/styles/graphics.css'

import Layout from '@/components/layout/Layout'
import Seo from '@/components/Seo'

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

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
