//importing react
import React from 'react';

//creating components which collect the 'year' 'Title' etc.
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (

    // container for the movie card
    <div className="movie" key={imdbID}>

        {/* We'll show the year of the movie on the top-left-hand-side of the movie card */}
      <div>
        <p>{Year}</p>
      </div>

        {/* We'll show the poster of the movie in the middle of the movie card */}
        {/* We'll check for if there is a poster via the fetch url data.
            When there is...
            1. We'll show the poster
            When there isn't
            1. We'll show a error placeholder 
        */}
      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

        {/* We'll show the type and title of the movie on the bottom of the movie card */}
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;