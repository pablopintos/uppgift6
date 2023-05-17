import React, { useState, useRef } from 'react';
import Movie from './Movie';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const titleRef = useRef();
  const ratingRef = useRef();

  const handleAddMovie = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const rating = ratingRef.current.value;
  
    if (!validateForm(title, rating)) {
      return;
    }
  
    const newMovie = {
      title,
      rating: parseInt(rating, 10),
    };
  
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  
    titleRef.current.value = '';
    ratingRef.current.value = '0';
  };
  
  const validateForm = (title, rating) => {
    if (!title && rating === '0') {
      alert('Du glömde skriva in titel och betyg till filmen!');
      return false;
    } else if (title === '') {
      alert('Du glömde skriva in titel till filmen!');
      return false;
    } else if (rating === '0') {
      alert('Du glömde fylla i betyg');
      return false;
    }
    return true;
  };
  

  const handleDeleteMovie = (title) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.title !== title));
  };

  const sortAlphabetically = () => {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
  }

  const sortGrade = () => {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sortedMovies);
  }

  return (
    <div>
      <form onSubmit={handleAddMovie}>
        <input ref={titleRef} type="text" placeholder="Movie title" />
        <select ref={ratingRef}>
          <option value="0">Välj ett betyg</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Lägg till film</button>
      </form>
      <ul>
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} handleDelete={handleDeleteMovie} />
        ))}
      </ul>
      <button onClick={sortAlphabetically}>Sort Alphabetically</button>
      <button onClick={sortGrade}>Sort by Rating</button>
    </div>
  );
}

export default MovieList;
