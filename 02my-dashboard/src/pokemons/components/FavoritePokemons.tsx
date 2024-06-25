"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  // const [Pokemons, setPokemons] = useState(favoritePokemons);

  // useEffect(() => {
  //   console.log({ favoritePokemons });
  //   setPokemons(favoritePokemons);
  // }, [favoritePokemons]);

  return <PokemonGrid pokemons={favoritePokemons} />;
};
