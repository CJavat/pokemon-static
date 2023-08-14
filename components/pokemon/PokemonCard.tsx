import { FC } from 'react'
import Image from "next/image";
import { useRouter } from 'next/router';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { SmallPokemon } from '@/interfaces'

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard:FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  const {id, name, img } = pokemon;

  const onClickPokemon = () => {
    router.push(`/name/${name}`);
  }


  return (
    <Card isPressable onClick={() => onClickPokemon()} className='w-full'>
      <CardBody className="h-28 my-5">
        <Image src={ img } alt={`Pokemon: ${id}-${name}`} layout="fill" objectFit="contain" />
      </CardBody>
      <CardFooter className="flex justify-between capitalize font-bold">
        <p>{name}</p>
        <p>#{id}</p> 
      </CardFooter>
    </Card>
  )
}
