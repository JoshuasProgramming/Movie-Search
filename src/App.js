//importing react and a few hooks
import React, { useState, useEffect } from "react";

//importing the 'MovieCard' component to be used later
import MovieCard from "./MovieCard";

//importing the 'SearchIcon' svg image to be used on the search bar
import SearchIcon from "./search.svg";

//importing the 'App.css' to style to app
import "./App.css";


//creating a variable to store the api url of the movies. We'll use this later when fetching specific data
const API_URL = "http://www.omdbapi.com?apikey=326df146";


//App components
const App = () => {

  //using 'useState' to create a 'searchTerm' variable and an 'setSearchTerm' function. The initial value of the 
  //'searchTerm' is set to an empty string/ nothing.
  const [searchTerm, setSearchTerm] = useState("");

  //using 'useState' to create a 'movies' variable (string array) and an 'setMovies' function. The initial value of the 
  //'movies' is set to an empty string array/ nothing.
  const [movies, setMovies] = useState([]);

  //'useEffect' allows will render whatever is within the 'searchMovies' parameter every second
  //e.g: 'searchMovies' is initially set to "", but if we add a movie in the search bar it will render that input
  useEffect(() => {
    searchMovies("");
  }, []);

  //click event 
  //We're waiting for the user of the site to trigger an event 
  //When the user presses the 'searchIcon' we'll...
  //1. Fetch the api url and title, which the user entered
  //2. Turn the fetched data from the url and title into json
  //3. Insert the data into the 'movies' string array
  const searchMovies = async (title) => {

    //url of movie
    const response = await fetch(`${API_URL}&s=${title}`);

    //javaScript Object with movie data
    const data = await response.json();

    //'data' is an object, and we need to look at the 'Search' attribute area
    setMovies(data.Search);
  };

  return (
    <div className="app">

      {/* header of web application */}
      <h1>MovieSearch</h1>

      {/* search div has two parts
      1. A input area which allows the user to type in a movie (value) and updates the searchTerms every time the value
         changes
      2. A search icon which, when clicked triggers the 'searchMovies' function.It then inserts the 'searchTerm'
         data with movies.
       */}
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

       {/* Whenever the movie the user searched for exists...
           we'll map over all the movies and insert them into a movie card via props
        */}
      {movies?.length > 0 ? (

        <div className="container">

          {/* loop/map through the 'movies' and insert a movie into the 'MovieCard' component as a prop */}
          {/* Whenever the movie the user searched for doesn't exist...
          we'll just say that the movie doesn't exist
          */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}

        </div>
      ) :
       (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
