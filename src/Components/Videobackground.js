
import {  useSelector } from "react-redux";

import useMovieTrailer from "./Hooks/useMovieTrailer";

const Videobackground = ({movieId}) => {
    const TrailerVideo=useSelector(store=>store.movies?.TrailerVideo);
   useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
       src={"https://www.youtube.com/embed/Idh8n5XuYIA?si="+TrailerVideo?.key+"&autoplay=1"}
       title="YouTube video player" 
       
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin"
       ></iframe>
    </div>
  )
};

export default Videobackground;
