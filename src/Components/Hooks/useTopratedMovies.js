import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import { API_OPTIONS } from "../../Utils/Constants";
import { addTopratedMovies } from "../../Utils/Movieslice";

const useTopratedMovies= () => {
    const dispatch =useDispatch();
    const TopratedMovies= useSelector((store)=>store.movies.TopratedMovies);
    const getTopratedMovies= async()=>{
      const data =await fetch('https://api.themoviedb.org/3/movie/top_rated', 
      API_OPTIONS)
      const json = await data.json();
   
  
      dispatch(addTopratedMovies(json.results));
    };
    useEffect(()=>{ !TopratedMovies &&
        getTopratedMovies();
    },[]);
};

export default useTopratedMovies;
