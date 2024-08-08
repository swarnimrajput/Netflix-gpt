import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../../Utils/Constants";
import { addTrailerVideo } from "../../Utils/Movieslice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const TrailerVideo= useSelector((store)=>store.movies.TrailerVideo);
    const getMovieVideos = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
      const json = await data.json();
      
  
        const filterData = json.results.filter((video) => video.type === "Trailer");
      const Trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(Trailer));
    };
    useEffect(() => {!TrailerVideo&&
      getMovieVideos();
    }, []);
  };
  
  export default useMovieTrailer;