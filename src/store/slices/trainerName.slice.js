import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
    name: "trainerName",
    initialState: {
        name: "" 
    },
    reducers: {
        setTrainerName: (state, action) => {
            state.name =  action.payload
        }
    }
})

export const { setTrainerName } = trainerNameSlice.actions  

export default trainerNameSlice.reducer

