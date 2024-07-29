import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { MovieList } from "./MovieList";
import { SearchBox } from "./SearchBox";


export const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchValue , setSearchValue] = useState("");
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

  const fetchData = async (searchValue) => {
    console.log("serch", searchValue);
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchValue)}&apikey=2779dc29`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Fetched data:", json);
      if(json.Search){
        setMovies(json);
      }
    console.log("j",json)
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    }
  };
  const handleAddToWatchList = (movie) => {
    setWatchList((prevWatchList) => [...prevWatchList, movie]);
    console.log("Added to Watch List:", movie);
    console.log("watchList" , watchList);
  };
  const handleRemoveFromWatchList = (movieToRemove) => {
    setWatchList((prevWatchList) =>
      prevWatchList.filter((movie) => movie.imdbID !== movieToRemove.imdbID)
    );
    console.log("Removed from Watch List:", movieToRemove);
  };
  return (
    <>
    <Header />
    <div className="flex flex-col justify-center items-center mt-40 gap-20 ">
    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    {movies.Search ? (
      <MovieList movies={movies.Search} onAddToWatchList={handleAddToWatchList} />
    ) : (
      <p></p>
    )}
    <div className="flex flex-wrap justify-center bg-red-500 md:w-1/2 w-3/4 rounded-sm text-white font-bold h-10 items-center">
    <h1 className="">Watach List</h1>
    </div>
    {watchList.length > 0 ? (
           <MovieList
           movies={watchList}
           onRemoveFromWatchList={handleRemoveFromWatchList} />
        ) : (
          <p className="text-center text-gray-500">Your watch list is empty</p>
        )}
  </div>
  </>
  );
};

