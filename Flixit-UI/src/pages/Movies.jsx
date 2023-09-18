import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
import styled from 'styled-components';
import NotAvailable from '../components/NotAvailable';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import SelectGenre from '../components/SelectGenre';


const Movies = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    // const navigate = useNavigate();
  
    const genresLoaded = useSelector((state) => state.flixit.genresLoaded);
  
    const  movies = useSelector((state)=> state.flixit.movies);
    const genres = useSelector((state) => state.flixit.genres);

  
    const dispatch = useDispatch();
  
    useEffect(()=> {
      dispatch(getGenres())
    }, []);
  
    useEffect(() => {
        // console.log(genresLoaded);
      if (genresLoaded) dispatch(fetchMovies({type: "movies"}));
      }, [genresLoaded]);
  
    window.onscroll = () => {
     setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        // if (currentUser) navigate("/");
    });

  return (
    <Container>
        <div className="navbar">
            <Navbar isScrolled={isScrolled}/>
        </div>
        <div className="data">
        <SelectGenre genres={genres} type="movie" />
            {
                movies.length ? <Slider movies={movies} /> :
                <NotAvailable />
            }
        </div>
    </Container>
  )
}

export default Movies

const Container = styled.div`
    .data {
        margin-top: 8rem;
        .not-available {
            text-align: center;
            color: white;
            margin-top: 4rem;
        }
    }
`;
