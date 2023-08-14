import { FC } from 'react'
import { FavoriteCardPokemon } from '.';

interface Prop {
  pokemons: number[];
}

export const FavoritePokemon:FC<Prop> = ({ pokemons }) => {
  return (
    <div className="grid grid-flow-col justify-start gap-3 mt-5"> 
      {
        pokemons.map(id => (
          <div key={id} className="col-span-6 sm:col-span-3 md:col-span-2 xl:col-span-1">
            <FavoriteCardPokemon key={id} id={ id } />
          </div>
        ))
      } 
    </div> 
  )
}
