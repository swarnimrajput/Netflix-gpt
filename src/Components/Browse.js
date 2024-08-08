
import Header from "./Header";
import useNowplayingMovies from "./Hooks/useNowplayingMovies";
import usePopularMovies from "./Hooks/usePopularMovies";

import Maincontainer from "./Maincontainer";
import useTopratedMovies from "./Hooks/useTopratedMovies";
import Secondarycontainer from "./Secondarycontainer";
import useUpcomingMovies from "./Hooks/useUpcomingMovies";
import Gptsearch from "./Gptsearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptsearch=useSelector(store=>store.gpt.showGptsearch);
  useNowplayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();
  return (
    <div>
     <Header/>
     {showGptsearch ?(
      <Gptsearch/>
     ):(
     <>
     <Maincontainer/>
     <Secondarycontainer/>
     </>
     )}
    </div>
  
  )};

export default Browse
