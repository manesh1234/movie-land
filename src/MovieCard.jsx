import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
    return (
        <div className={styles.card}>
            <div className={styles.year}>
                <p>Year: {movie.Year}</p>
            </div>
            <img className={styles.img} src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt="moviePoster" />
            <div className={styles.footer}>
                <h2 className={styles.title}>{movie.Title}</h2>
                <h5 className={styles.typeAndId}>Film Type: {movie.Type} <span>IMDB id: {movie.imdbID}</span> </h5>
            </div>
        </div>
    )
}

export default MovieCard;
