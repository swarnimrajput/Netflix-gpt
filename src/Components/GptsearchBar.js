import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageconstants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_key, API_OPTIONS } from "../Utils/Constants";
import { addGptmovieResult } from "../Utils/gptslice";

const GptsearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchtext = useRef(null);
  const dispatch=useDispatch();

  const searchmovietmdb=async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTsearchclick = async () => {
    const genAI = new GoogleGenerativeAI(API_key);

    async function run() {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const gptQuery =
        "I am looking for movie recommendations based on the following preferences: " +
        searchtext.current.value +
        "Dont put any text in the beginning. Please provide the names of 5 indian movies  separated by commas.";

      try {
        const result = await model.generateContent(gptQuery);
         // Log the entire result object

        if (result && result.response && result.response.candidates && result.response.candidates.length > 0) {
        
          const gptmovies=  result.response.candidates[0]?.content?.parts[0]?.text.split(",");
          const promisearray =gptmovies.map(movie=>searchmovietmdb(movie));
          const tmdbresults = await Promise.all(promisearray);
          
          dispatch(addGptmovieResult({movienames:gptmovies, movieresults:tmdbresults}));
          
          const text = result.response.candidates[0].text;  // Adjust based on actual structure
         
        } else {
          
        }
      } catch (error) {
        
      }
    }

    run();
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchtext} type="text" className="p-4 m-4  col-span-8 md:col-span-9" placeholder={lang[langkey].gptSearchPlaceholder} />
        <button className=" col-span-4 md:col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGPTsearchclick}>
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptsearchBar;
