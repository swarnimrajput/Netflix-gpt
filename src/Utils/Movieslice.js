import { createSlice } from "@reduxjs/toolkit";
const Movieslice =createSlice({
    name :"Movies",
    initialState:{
        nowPlayingMovies:null,
        TrailerVideo:null,
        popularMovies:null,
        TopratedMovies:null,
        UpcomingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,  action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,  action)=>{
            state.popularMovies=action.payload;
        },
        addTopratedMovies:(state,  action)=>{
            state.TopratedMovies=action.payload;
        },
        addUpcomingMovies:(state,  action)=>{
            state.UpcomingMovies=action.payload;
        },

        addTrailerVideo:(state,action)=>{
            state.TrailerVideo=action.payload;
        },

    }
})
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopratedMovies,addUpcomingMovies}=Movieslice.actions; 
export default Movieslice.reducer;
