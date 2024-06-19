import {
  FavoritePokemons,
  PokemonGrid,
  PokemonsResponse,
  SimplePokemon,
} from "@/pokemons";
import { PokemonCard } from "@/pokemons/components/PokemonCard";

export const metadata = {
  title: "Favoritos",
  description: "Un listado de pokemons favoritos",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons favoritos <small className="text-blue-500">Global State</small>
      </span>

      <FavoritePokemons />
    </div>
  );
}
