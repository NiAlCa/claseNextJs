'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useState } from "react"

export const FavoritePokemons = () => {


    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons))
    const [Pokemons, setPokemons] = useState(favoritePokemons)

  return (
<PokemonGrid pokemons={Pokemons} />  )
}
