import { FC } from 'react';
import Image from 'next/image'

export const NoFavorites:FC = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-100px)] items-center justify-center self-center">
    <h1 className="text-3xl">No hay favoritos</h1>
    <Image
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg" 
      alt="No hay pokemon favorito"
      width={250}
      height={250}
      className="opacity-10"
    />
  </div>
  )
}
