import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

/* 

'1': {id:1, name: 'bulbasaur'},

*/

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const getInitialState = (): PokemonsState => {

  const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}')

  return favorites
}

const initialState: PokemonsState = {
  ...getInitialState()
 /* 1: { id: "1", name: "bulbasaur" },
  3: { id: "3", name: "venusaur" },
  5: { id: "5", name: "charmeleon" },*/
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
      }else{
        state[id] = pokemon;
      }

      localStorage.setItem('favorite-pokemons', JSON.stringify(state))

      state[id] = pokemon;
    },
  },
});

export const {toggleFavorite} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
