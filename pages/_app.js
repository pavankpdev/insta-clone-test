// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

// Theme
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp