import '../styles/global.scss'
import type { AppProps } from 'next/app'
import Layout from "./layout";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import React from 'react';
import ContextProvider from "../context/MyContext";


function MyApp({Component, pageProps}: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }))

  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </ContextProvider>
    </QueryClientProvider>
  )
}

export default MyApp
