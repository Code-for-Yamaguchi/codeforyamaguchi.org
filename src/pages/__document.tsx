import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

const description = '「山口県の挑戦者を応援する」をミッションに掲げ、ITをはじめとした地域課題を解決することをはじめとしたさまざまな活動を行っていくコミュニティです。'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="ja">
                <Head>
                    <meta name="description" content={description}></meta>
                    <meta property="og:url" content="https://www.codeforyamaguchi.org/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Code for Yamaguchi" />
                    <meta property="og:description" content={description}></meta>
                    <meta property="og:site_name" content="Code for Yamaguchi" />
                    <meta property="og:image" content="https://www.codeforyamaguchi.org/ogp.png" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@YamaguchiFor" />
                    <link data-n-head="1" rel="icon" type="image/x-icon" href="/favicon.ico"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument