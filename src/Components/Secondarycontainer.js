import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const Secondarycontainer = () => {
  const movies=useSelector((store)=>store?.movies)
  return (
  movies.nowPlayingMovies && (
  <div className=" bg-black">
    <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20 ">
     <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
     <Movielist title={"TopratedMovies"} movies={movies.TopratedMovies} />
     <Movielist title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
     <Movielist title={"Popular"} movies={movies.popularMovies} />
     
     <Movielist title={"Horror"} movies={movies.nowPlayingMovies} />
     </div>
  </div>
  )
  )
};

export default Secondarycontainer
