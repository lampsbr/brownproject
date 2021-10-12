import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Head from 'next/head'
import Router from "next/router";
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MainLayout from '../layouts/mainLayout';

const onRedirectCallback = (appState) => {
  Router.replace(appState?.returnTo || "/");
};

const apiQueryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return <>
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      audience="api.brownproject"
      onRedirectCallback={onRedirectCallback}
      redirectUri={typeof window !== "undefined" ? window.location.origin : ''}
    >
      <QueryClientProvider client={apiQueryClient}>
        <Head>
          <title>The Brown Project</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Auth0Provider>
  </>
}

export default MyApp
