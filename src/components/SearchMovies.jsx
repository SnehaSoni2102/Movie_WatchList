import React, { useEffect, useState } from "react";
import { Header } from "./Header";

export const SearchMovie = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.omdbapi.com/?t=kabhi&apikey=2779dc29");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Fetched data:", json);
      setMovies(json);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    }
  };

  return (
    <div>
      <Header/>
      <h1>Search Movie</h1>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {movies ? (
        <div>
          <h2>{movies.Title}</h2>
          <p>{movies.Plot}</p>
          <img src={movies.Poster} alt={movies.Title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

