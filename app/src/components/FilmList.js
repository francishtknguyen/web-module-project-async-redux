import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFilmData } from "../store";

const FilmList = (props) => {
  useEffect(() => {
    props.getFilmData();
  }, []);

  return (
    <div className="list-wrapper">
      {props.isLoading ? (
        <div className="loader"> Loading..</div>
      ) : (
        <h1>Official Studio Ghibli Film List</h1>
      )}
      {props.error ? <p>{props.error}</p> : null}
      {props.data.map((film) => (
        <div key={film.id} className="film-wrapper">
          <h3>{film.title}</h3>
          <h4>{film.original_title}</h4>
          <p>Director:{film.director}</p>
          <p>release date: {film.release_date}</p>
          <p>Description: {film.description}</p>
        </div>
      ))}
    </div>
  );
};

const mapToStateProps = (state) => {
  return {
    data: state.data,
    error: state.error,
    isLoading: state.isLoading,
  };
};
export default connect(mapToStateProps, { getFilmData })(FilmList);
