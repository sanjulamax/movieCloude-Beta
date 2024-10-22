import React, { useState, useEffect, useContext } from 'react';
import { Context } from './context';
import noRes from '../assets/search_no_result.png'

const Cart = () => {
  const { getSavedMovies, savedMoviesArray , noMovie , saved , setNoMovie } = useContext(Context);
  const [movies, setMovies] = useState([]); // State to hold fetched movie details

  // Function to fetch movie details by ID
  const getMovieById = async (movieId) => {
    const apis = import.meta.env.VITE_API_KEY; // Fetch API key from environment variables
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apis}`);
   
    const resData = await res.json();
    return resData; // Return movie data
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await Promise.all(savedMoviesArray.map(movieId => getMovieById(movieId)));
      setMovies(fetchedMovies); // Store all fetched movies in state
    
    };

    // Call getSavedMovies to ensure savedMoviesArray is populated
    getSavedMovies();
    
    fetchMovies(); // Fetch movie details
  }, [savedMoviesArray]); // Fetch movies whenever savedMoviesArray changes

  return (
    <div className='bg-landBack h-screen'>
      <div id='emptryCart' className='hidden text-white'> Loading.......</div>
      <div className='flex align-middle justify-center items-center h-[10%] bg-black rounded-b-2xl'>
        <button className='text-white text-lg p-2 bg-blue-500 rounded absolute left-5 max-[431px]:hidden ' onClick={() => window.location.href = '/'}>
          Home
        </button>
        <h1 className='text-white text-4xl max-[431px]:text-2xl ml-4'>✅ SAVED MOVIE BUCKET ✅</h1>
      </div>
      <div className='grid grid-cols-6 max-[431px]:grid max-[431px]:grid-cols-3 p-3'>
        <div id='emptryCart' className='border-2 mt-20 border-white backdrop-blur-lg bg-white bg-opacity-10 rounded-lg hidden'>
          <img src={noRes} className='h-96' alt="no result found" />
        </div>
        {movies.map((item) => {
          return (
            <a href={`/FilmPage/${item.title}`} key={item.id}>
              <div className='hover:bg-white overflow-hidden hover:text-black max-[431px]:h-[180px] h-[280px] pb-10 hover:border-2 hover:border-amber-300 items-center border-2 border-white p-2 m-2 text-white bg-transparent backdrop-blur-xl rounded-md'>
                <img className='w-full rounded-md max-[431px]:h-3/3 h-5/6' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                <h1 className='w-full h-fit mt-2 overflow-hidden font-semibold text-xs text-center'>{item.title}</h1>
                <h2 className='text-center'>{item.release_date.slice(0, 4)}</h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;


/* <div>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className='movie-item'>
            <h1>{movie.title}</h1> {/* Displaying movie title */
            //{movie.poster_path && ( // Check if poster_path exists before rendering
              //<img 
               // src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
              //  alt={movie.title} 
             //   className='movie-poster' 
           //   />
          //  )}
        //    <p>{movie.overview}</p> {/* Displaying movie overview */}
       //   </div>
     //   ))
    //  ) : (
    //    <h1>No movies found.</h1> // Display message if no movies
   //   )}
  //  </div> */
