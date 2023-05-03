import Head from 'next/head'

import { HomePage } from '~/components/HomePage'
import { HeroPage } from '~/components/HeroPast'

export default function Home() {
  return (
    <>
      <Head>
        <title>Project 1</title>
        <meta name='description' content='Project-new' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomePage />
      <HeroPage />
    </>
  )
}
