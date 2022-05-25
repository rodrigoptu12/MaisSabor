import React from 'react'

import { GetStaticProps } from 'next'
import Head from 'next/head'

import Teste from "../assets/Quer.svg"

export default function Home ({ name, date }: {name: string, date: string})  {
  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <main>
        <Teste/>
        <h1>{date}</h1>
        <h1>Hello Word</h1>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      name: 'MaisSabor',
      date: new Date().toISOString()
    },
    revalidate: 5 // Armazena a pagina em cache por 5 segundos, todos que acessarem o site irá receber o msm site no intervalo de 5 segundos
    // cahe-control
    // so em build
  }
}

//export default Home
