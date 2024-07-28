export const MovieList = (props) => {
    return (
      <div className="grid grid-cols-5 justify-center gap-4">
          {props.movies.length > 0 ? (
        props.movies.map((movie, index) => (
          <div
          className=" flex flex-col items-center  "
          key={index}
        >
            {props.onRemoveFromWatchList && (
            <button className="absolute bg-white" onClick={() => props.onRemoveFromWatchList(movie)}>
            <img
            className="h-10 w-6 object-cover"
            src="https://www.svgrepo.com/show/513757/bookmark-x.svg"
            alt="watchList_ICON"
          />
            </button>
            )}
             {props.onAddToWatchList && (
            <button className="absolute bg-white" onClick={() => props.onAddToWatchList(movie)}>
            <img
            className="h-10 w-6 object-cover"
            src="https://www.svgrepo.com/show/513754/bookmark-1.svg"
            alt="watchList_ICON"
          />
            </button>
            )}
            <div className="bg-white w-32 h-70 border-white shadow-lg shadow-gray-500 bottom-1">
          <img
            className="h-50 w-32 object-cover"
            src={movie.Poster}
            alt={movie.Title}
          />
          <p className="mt-2 text-start p-2 text-gray-500 font-medium text-[10px]">{movie.Title}</p>
          <p className="text-start px-2 pb-2 text-gray-500 font-medium text-[10px]">({movie.Year})</p>
          </div>
          </div>
        ))) : (
            <p className="text-center text-gray-500">No movies to display</p>
          )}
      </div>
    );
  };