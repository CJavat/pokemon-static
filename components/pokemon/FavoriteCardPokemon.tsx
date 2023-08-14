import { FC } from 'react'
import Image from 'next/image'
import { Card } from '@nextui-org/react'
import { useRouter } from 'next/router';

interface Prop {
  id: number;
}

export const FavoriteCardPokemon:FC<Prop> = ({ id }) => {
  const router = useRouter();

  const onFavoriteClick = () => {
    router.push(`/pokemon/${ id }`);
  };

  return (
    <Card isHoverable isPressable className="p-10 h-44" onClick={ onFavoriteClick }>
      <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`} 
        alt={`logo del pokemon: ${id}`}
        width={100}
        height={100}
      />
    </Card>
  )
}
