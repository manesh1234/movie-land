import React from 'react';
import { useState, useEffect } from 'react';
import styles from './App.module.css';
import MovieCard from './MovieCard';
import { FcSearch } from 'react-icons/fc';
import {AiFillHeart } from "react-icons/ai"
const API_URL = "https://www.omdbapi.com?apikey=3482c7da";

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


    return (
      <div className={styles.app}>
        <h1>MovieLand</h1>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="search for movies"
            onChange={(e) =>
              setSearch({ isSearch: true, name: e.target.value })
            }
          />
          <FcSearch className={styles.searchbtn} />
        </div>

        {movies && movies.length > 1 ? (
          <div className={styles.container}>
            {movies.map((c, index) => (
              <MovieCard key={index} movie={c} />
            ))}
          </div>
        ) : (
          search.isSearch && (
            <h2 style={{ marginTop: "20px", color: "white" }}>
              No results found !
            </h2>
          )
        )}

        <div
          className={styles.footer}
          style={
            !search.isSearch ? { marginTop: "495px" } : { marginTop: "0px" }
          }
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Made with&nbsp;
            <span style={{ display: "flex" }}>
              <AiFillHeart color="red" size="30" />
            </span>
            &nbsp; by &nbsp;
            <a href="https://www.linkedin.com/in/manesh-ram/" target={"_blank"}>
              Manesh Ram
            </a>
          </h1>
        </div>
      </div>
    );
    
}

export default App;
