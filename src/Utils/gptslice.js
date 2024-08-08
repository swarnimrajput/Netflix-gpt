import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
    name:"gpt",
    initialState:{
        showGptsearch: false,
        movienames:null,
        movieresults:null,
        
    },
    reducers:{
        toggleGptsearch:(state)=>{
            state.showGptsearch=!state.showGptsearch
        },
        addGptmovieResult:(state,action)=>{
            const {movienames,movieresults}=action.payload;
            state.movienames=movienames;
            state.movieresults=movieresults;
        }
    },
});
export const {toggleGptsearch,addGptmovieResult} = gptslice.actions;
export default gptslice.reducer;