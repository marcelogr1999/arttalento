import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=optional"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Somos uma empresa de comunicação visual com mais de 15 anos de experiência"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
