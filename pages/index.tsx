import { NextPage, GetStaticProps } from "next"
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "@/components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}


const HomePage:NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémons">
      <div className="grid grid-cols-12 gap-2">
        {
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className="sm:col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2 mt-5">
              <PokemonCard pokemon={pokemon} />
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }))

  return {
    props: {
      pokemons,
    },
  }
};

export default HomePage;