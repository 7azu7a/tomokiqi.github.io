import { AppProps } from 'next/app';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Flex bgColor="heavyBlue" color="white" width="100vw" minHeight="100vh">
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
