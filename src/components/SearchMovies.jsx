import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { MovieList } from "./MovieList";
import { SearchBox } from "./SearchBox";

export const SearchMovie = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchValue , setSearchValue] = useState("");

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
    console.log("MMm",movies);
  return (
    <>
    <Header />
    <div className="flex flex-col justify-center items-center mt-40 gap-20 ">
    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    {movies.Search ? (
      
      <MovieList movies={movies.Search} />
    ) : (
      <p></p>
    )}
  </div>
  </>
  );
};

