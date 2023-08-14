import { useState } from "react";

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { Layout } from '@/components/layouts'
import { Pokemon } from '@/interfaces';
import { getPokemonInfo, localFavorites } from '@/utils';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage:NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(  localFavorites.existInFavorites( pokemon.id ) );
  
  const onToggleFavorite = () => {
    localFavorites.toggleFavorites( pokemon.id );
    setIsInFavorites(!isInFavorites);

    if( isInFavorites ) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
  };

  return (
    <Layout title={ pokemon.name }>
      <div className='mt-5 grid grid-cols-12 gap-5'>
        <div className='col-span-12 sm:col-span-4'>
          <Card isHoverable className='w-full p-8'>
            <CardBody className="h-48 my-5">
              <Image  
                src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' } 
                alt={pokemon.name} 
                layout="fill" 
                objectFit="contain" 
              />
            </CardBody>
          </Card>
        </div>

        <div className='col-span-12 sm:col-span-8'>
          <Card /* isHoverable isPressable className='w-full p-8' */>
            <CardHeader className='flex justify-between capitalize'>
              <h2 className='text-4xl font-bold'>{pokemon.name}</h2>

              <Button className="uppercase font-bold" variant={`${isInFavorites ? "solid" : "ghost"}`} onClick={ onToggleFavorite }>
                {
                  isInFavorites ? "Eliminar de Favoritos" : "Guardar en Favoritos"
                }
              </Button>
            </CardHeader>
            
            <CardBody className="h-48 my-5">
              <h3 className='text-xl'>Sprites:</h3>

              <div className='flex flex-row'>
                <Image 
                  src={pokemon.sprites.front_default} 
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.back_default} 
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.front_shiny} 
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.back_shiny} 
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map( (value, index ) => `${index + 1 }` )

  return {
    paths: pokemons151.map(id => ({
      params: {
        id
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getPokemonInfo(id)
    },
  }
};

export default PokemonPage;