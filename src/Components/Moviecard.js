import { IMG_URL } from "../Utils/Constants";

const Moviecard = ({posterPath}) => {
  if(!posterPath)return null;
  return (
    <div className="w-36 md:w-48 pr-4 cursor-pointer">
        <img alt="Movie Card" src={IMG_URL+ posterPath}/>
    </div>
  )
};

export default Moviecard;
