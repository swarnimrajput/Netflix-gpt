import Moviecard from "./Moviecard";

const Movielist = ({ title, movies }) => {
  

  // Conditional rendering to handle cases where movies might be null or empty
  const renderMovieCard = () => {
    if (!movies || movies.length === 0) {
      return <p>Loading movies...</p>;
    }

    return movies?.map(movie=> <Moviecard key={movie.id} posterPath={movie.poster_path}/>);
  };

  return (
    <div className="px-6">
        <h1 className="text-lg md:tetx-3xl py-4 text-white ">{title}</h1>
      <div>
        <div className="flex overflow-x-scroll  ">
          
          <div className="flex">
            {renderMovieCard()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movielist;

