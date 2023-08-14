import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui/Navbar';

interface Props {
  title?: string;
  children: ReactNode;
}

const origin = ( typeof window === 'undefined') ? '' : window.location.origin;

export const Layout:FC<Props> = ({ children, title }) => {  
  return (
    <>
      <Head>
        <title>{ title ? title : "Pokemon App" }</title>
        <meta name='author' content='Daniel Plascencia' />
        <meta name='description' content={`Información sobre el pokémon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${ title }`} />
        <meta property="og:description" content={`Ésta es la página sobre ${ title }`} />
        <meta property="og:image" content={ `${ origin }/img/banner.png` } />
      </Head>

      <Navbar /> 

      <main style={{ padding: "0 20px" }}>
        { children }
      </main>
    </>
  )
}
