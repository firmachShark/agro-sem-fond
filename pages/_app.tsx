import { AppProps } from 'next/app'
import { start, done, configure } from 'nprogress'
import { useRouter } from 'next/router'
import { Header } from 'src/components/layout/header'
import Icon from 'public/icon.png'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'nprogress/nprogress.css'
import '../styles/index.scss'
import Head from 'next/head'
import { useEffect } from 'react'
import { Footer } from 'src/components/layout/footer'
import { Provider } from 'react-redux'
import { store } from 'src/store'
import { ModalOrder } from 'src/components/modalOrder'
import { SSRProvider } from 'react-bootstrap'

configure({ showSpinner: false })

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()

    useEffect(() => {
        const handleStart = (path: string) => {
            if (path !== router.asPath) {
                start()
            }
        }

        const handleComplete = () => done(false)

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
        }
    }, [router])

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, [])

    return (
        <SSRProvider>
            <Provider store={store}>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="shortcut icon" href={Icon.src} />
                </Head>
                <Header />
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer />
                <ModalOrder />
                {/* <CRMScript /> */}
            </Provider>
        </SSRProvider>
    )
}
