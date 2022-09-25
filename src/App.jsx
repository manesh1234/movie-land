import React from 'react';
import { useState, useEffect } from 'react';
import styles from './App.module.css';
import MovieCard from './MovieCard';
import { FcSearch } from 'react-icons/fc';

const API_URL = "http://www.omdbapi.com?apikey=3482c7da";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState({ name: "", isSearch: false });

    useEffect(() => {
        if (search.name != "") {
            const searchMovies = async () => {
                const response = await fetch(`${API_URL}&s=${search.name}`);
                const data = await response.json();
                setMovies(data.Search);
            }
            searchMovies()
        }
    }, [search]);


    return <div className={styles.app}>
        <h1>MovieLand</h1>
        <div className={styles.search}>
            <input type="text" placeholder='search for movies' onChange={(e) => setSearch({ isSearch: true, name: e.target.value })} />
            <FcSearch className={styles.searchbtn} />
        </div>

        {
            movies && movies.length > 1 ? (
                <div className={styles.container}>
                    {movies.map((c, index) => <MovieCard key={index} movie={c} />)}
                </div>
            ) : search.isSearch && <h2 style={{ marginTop: "20px", color: "white" }}>No results found !</h2>
        }

        <div className={styles.footer} style={!search.isSearch?{marginTop:"495px"}:{marginTop:"0px"}}>
            <h1>Made with <img src="https://img.icons8.com/color/35/000000/filled-like.png" /> by <a href="https://www.linkedin.com/in/manesh-ram/" target={'_blank'}>Manesh Ram</a></h1>
        </div>    
    </div>
    
}

export default App;
