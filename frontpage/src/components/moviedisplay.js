import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';




function MovieDisplay() {

const [movieTitles, setMovieTitle] = useState([]);

async function fetchData() {
    try {
        const response = await axios.get('http://localhost:8083/movie/data/');
        const movies = response.data;

        movies.forEach(movie => {
            console.log(movie.title);
        });
    } catch (error) {
        console.log('Error:', error);
    }
}
fetchData();
    return (
        <div>
            <div className = "movie_container">
                hey
            </div>
        </div>
    );
}

export default MovieDisplay;