import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
const pokemonNumberSlice = createSlice({
		name: 'pokemonNumber',
    initialState: 20,
    reducers: {
        setPokemonNumber: (state, action) => {
            const newPokemonNumber = action.payload
            return newPokemonNumber
        }
        
    }
})

export const { setPokemonNumber } = pokemonNumberSlice.actions;

export default pokemonNumberSlice.reducer;