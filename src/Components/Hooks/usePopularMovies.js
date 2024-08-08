import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../../Utils/Movieslice";
import { API_OPTIONS } from "../../Utils/Constants";

const usePopularMovies = () => {
    const dispatch =useDispatch();
    const popularmovies = useSelector((store)=>store.movies.popularMovies);
    const getPopularMovies= async()=>{
      const data =await fetch('https://api.themoviedb.org/3/movie/popular', 
      API_OPTIONS)
      const json = await data.json();
     
  
      dispatch(addPopularMovies(json.results));
    };
    useEffect(()=>{!popularmovies &&
     getPopularMovies();
    },[]);
};

export default usePopularMovies;
