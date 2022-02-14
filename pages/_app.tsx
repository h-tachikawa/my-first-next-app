import "../styles/globals.css";
import { Avatar, Box, Button, ChakraProvider, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import type { AppProps } from "next/app";

const GlobalNavigation = () => (
    <Flex h="3.5rem" backgroundColor="gray.700" align="center">
      <Box p="2">
        <Heading size="md" color="white">Realtime YouTube Live Analyzer</Heading>
      </Box>
      <Spacer />
      <Box p="2">
        <NextLink href="/" passHref>
          <Link onClick={() => (document.activeElement as HTMLElement).blur()}>
            <Avatar size="sm" bg="teal.400" />
          </Link>
        </NextLink>
      </Box>
    </Flex>
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider>
        <GlobalNavigation />
        <Component {...pageProps} />
      </ChakraProvider>
  );
}

export default MyApp;
