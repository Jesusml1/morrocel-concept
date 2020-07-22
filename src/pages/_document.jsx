import Document, { Html, Head, Main, NextScript } from 'next/document'


class myDocument extends Document {
  static async getInitialProps(ctx){
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render(){
    return(
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Righteous&family=Roboto:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default myDocument