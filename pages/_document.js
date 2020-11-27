import Document, { Html, Head, Main, NextScript } from 'next/document'
import PrismicScript from '../components/PrismicScript'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.png" type="image/png" />
        </Head>
        <body className='font-public overflow-x-hidden'>
          <Main />
          <NextScript />
          <PrismicScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
