import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GptMoviesuggestion = () => {
  const {movieresults,movienames}=useSelector((store)=>store.gpt);
  if(!movienames)return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
     <div>
      {movienames.map(
        (movienames,index)=>(<Movielist key={movienames} title={movienames} movies ={movieresults[index]}/>
        ))}
      </div> 
     
      
      </div>
  )
};

export default GptMoviesuggestion
