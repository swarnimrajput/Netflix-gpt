import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../../Utils/Movieslice";
import { API_OPTIONS } from "../../Utils/Constants";

const useNowplayingMovies = () => {
    const dispatch =useDispatch();
    const nowplayingmovies =useSelector(store=>store.movies.nowplayingmovies);
    const GetNowPLayingMovies= async()=>{
      const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', 
      API_OPTIONS)
      const json = await data.json();
     
  
      dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(()=>{
      !nowplayingmovies &&
      GetNowPLayingMovies();
    },[]);
};

export default useNowplayingMovies;
