import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MoviesPage from './components/MoviesPage';
import AddMoviePage from './components/AddMoviePage';

// unlock storage on Firebase

// install bootstrap
// install react-router-dom
// install firebase
// install bootstrap-icons
// install react-bootstrap

// create components folder
// create firebase folder
// create models folder
// create services folder

// scaffold AddMoviesPage component
// scaffold MoviesPage component
// create our MoviesPage CSS

// create firebase file
// copy previous config file & add Storage

// scaffold Movie Modal

// scaffold file service
// scaffold our movie service
// update Movie model

// setup our Routing between pages
// update our AddMoviesPage
// update file service
// update our movie service
// complete our AddMoviesPage

// add deleteMovie to MovieService
// add deleteFile to FileService

// update MoviePage
// add Movie Grid (view)
// update css for Movie Grid
// add movie & movieToRemove state variables
// add fetchMovies
// call fetchMovies inside useEffect
// add removeMovie function
// add react-bootstrap Modal element
// finish off MoviesPage

// Add ImageSelector custom component
// Add ImageSelector to our AddMoviesPage

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />}></Route>
        <Route path="/add-movie" element={<AddMoviePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
