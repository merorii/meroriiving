//base
import type { AppProps } from "next/app";
import Head from "next/head";

//libraries
import { QueryClientProvider, QueryClient } from "react-query";

//style
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MERORIIVING</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
