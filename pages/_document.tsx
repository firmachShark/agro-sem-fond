import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const CRM_SCRIPT = process.env.NEXT_PUBLIC_SCRIPT || ''

export default function Document() {
    return (
        <Html lang="ru">
            <Head />
            <body>
                <Main />
                <NextScript />
                <Script src={CRM_SCRIPT} strategy="beforeInteractive" />
            </body>
        </Html>
    )
}
