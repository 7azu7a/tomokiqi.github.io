import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <title>Tomokiqi's Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
