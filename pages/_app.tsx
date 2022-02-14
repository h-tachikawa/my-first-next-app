import "../styles/globals.css";
import { Avatar, Box, Button, ChakraProvider, Flex, Heading, Spacer } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const GlobalNavigation = () => (
    <Flex h="50px" backgroundColor="gray.700" align="center">
      <Box p="2">
        <Heading size="md" color="white">Realtime YouTube Live Analyzer</Heading>
      </Box>
      <Spacer />
      <Box p="2">
        <Avatar size="sm" bg="teal.400" />
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
