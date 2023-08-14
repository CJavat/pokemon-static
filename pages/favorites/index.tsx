import { useState, useEffect } from "react";
import { NextPage } from "next"
import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui/NoFavorites";
import { localFavorites } from "@/utils";
import { FavoritePokemon } from "@/components/pokemon";


const FavoritesPage:NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() );
  }, [])
  

  return (
    <Layout title="Pokémons - Favoritos">
      {
        favoritePokemons.length === 0 
          ? ( <NoFavorites /> )
          : ( <FavoritePokemon pokemons={ favoritePokemons } /> )
      }
    </Layout>
  )
}

export default FavoritesPage;