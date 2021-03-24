import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/global.styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#06092B" />
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <NextSeo
        title="Cefalia - Evolua na medicina com a tecnologia."
        description="Estude medicina online. Desde o Ciclo Básico Comum ao Ciclo Biomédico."
        canonical="https://cefalia.com/"
        openGraph={{
          url: 'https://cefalia.com/',
          title: 'Cefalia - Evolua na medicina com a tecnologia.',
          description:
            'Estude medicina online. Desde o Ciclo Básico Comum ao Ciclo Biomédico.',
          images: [
            { url: 'https://apicefalia.s3.amazonaws.com/hero3_dddedaf284.svg' }
          ],
          site_name: 'Cefalia +',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@davidfreey',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
