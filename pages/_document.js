// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import bodyTheme from "../theme/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head />
        <body>
        <ColorModeScript initialColorMode={bodyTheme.config.initialColorMode} />
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}
