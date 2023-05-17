import React from 'react';

export default function Movie({ movie, handleDelete }) {
  const rating = Number(movie.rating) || 0;
  let stars = [];
  for(let i = 0; i < rating; i++) {
    stars.push(<img key={i} src="/images/star.png" alt="Star" style={{width:"25px"}}/>);
  }

  return (
    <li>
      {movie.title}
      {stars}
      <img src="/images/delete.png" alt="Delete movie" className="delete-movie-icon" onClick={() => handleDelete(movie.title)} style={{width:"25px"}}
      />
    </li>
  );
}
