import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Head from 'next/head'
import Router from "next/router";
import { Auth0Provider } from '@auth0/auth0-react'

const onRedirectCallback = (appState) => {
  Router.replace(appState?.returnTo || "/");
};

function MyApp({ Component, pageProps }) {
  return <>
  <Auth0Provider
    domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
    onRedirectCallback={onRedirectCallback}
    redirectUri={typeof window !== "undefined" ? window.location.origin : ''}
  >
    <Head>
      <title>The Brown Project</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    </Auth0Provider>
  </>
}

export default MyApp
