import { BG_uRL } from "../Utils/Constants";
import GptMoviesuggestion from "./GptMoviesuggestion";
import GptsearchBar from "./GptsearchBar";

const Gptsearch = () => {
  return (
  <>
   
  <div className="fixed -z-10">
        <img className="h-screen object-cover"
          src={BG_uRL}
          alt="logo"
        />
      </div > 
      <div className="">
    <GptsearchBar/>
    <GptMoviesuggestion/>
    </div>
  
  </>
  )
};

export default Gptsearch
