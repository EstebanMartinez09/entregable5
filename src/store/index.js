import { configureStore } from "@reduxjs/toolkit";
import trainerNameSlice from "./slices/trainerName.slice";
import pokemonNumber from "./slices/pokemonNumber";


export default configureStore({
    reducer: {
        trainerName : trainerNameSlice,
        pokemonNumber : pokemonNumber

    }
})