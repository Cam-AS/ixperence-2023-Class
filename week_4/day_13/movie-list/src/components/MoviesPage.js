import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Modal } from 'react-bootstrap';

import './MoviesPage.css';

import MoviesService from '../services/movies.service';
import FileService from '../services/file.service';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [movieToRemove, setMovieToRemove] = useState(null);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const movies = await MoviesService.fetchMovies();
      setMovies(movies);
      // console.log(movies);
    } catch (err) {
      console.log(err);
    }
  }

  function hideModal() {
    setMovieToRemove(null);
    setShowModal(false);
  }

  async function removeMovie() {
    try {
      // delete Movie from firebase firestore
      await MoviesService.deleteMovie(movieToRemove.id);
      // delete Movie from firebase storage
      await FileService.deleteFile(movieToRemove.downloadUrl);

      // update the movies array
      setMovies(movies.filter((movie) => movie.id !== movieToRemove.id));
      // hide Modal
      hideModal();
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/add-movie">Add Movie</Link>
      </div>

      <div className="d-flex flex-wrap">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="card">
              <img
                src={movie.downloadUrl}
                className="card-img-top movie-img"
                alt="movie cover"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
              </div>

              <div
                className="remove-button btn btn-secondary"
                onClick={() => {
                  setMovieToRemove(movie);
                  setShowModal(true);
                }}
              >
                <i className="bi bi-trash"></i>
              </div>
            </div>
          );
        })}
      </div>

      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete: {movieToRemove?.name}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={hideModal}>
            Close
          </button>
          <button className="btn btn-danger" onClick={removeMovie}>
            Yes, Delete
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
