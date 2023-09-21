import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Avatar from '../images/Avatar.jpg'
import H from '../images/Harry Potter and the Half-Blood Prince.jpg'
import SM3 from '../images/Spider-Man 3.jpg'
import SR from '../images/Superman Returns.jpg'
import TCON from '../images/The Chronicles of Narnia Prince Caspian.jpg'
import TDKR from '../images/The Dark Knight Rises.jpg'
import AVE from '../images/The Avengers.jpg'


function MovieDisplay() {
    const [movieTitles, setMovieTitles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:8083/movie/data/');
                const movies = response.data;

                // Filter out movies with undefined or missing titles and remove colons
                const validMovies = movies.filter(movie => movie.title);
                const titles = validMovies.map(movie => movie.title.replace(':', ''));

                // Remove duplicate titles
                const uniqueTitles = Array.from(new Set(titles));

                setMovieTitles(uniqueTitles);
            } catch (error) {
                console.log('Error:', error);
            }
        }

        fetchData();
    }, []);

    const imageMapping = {
        'Avatar': Avatar,
        'Harry Potter and the Half-Blood Prince': H,
        'Spider-Man 3': SM3,
        'Superman Returns': SR,
        'The Chronicles of Narnia Prince Caspian': TCON,
        'The Dark Knight Rises': TDKR,
        'The Avengers': AVE,

    };
          
    function getImageByName(name) {
        return imageMapping[name] || '';  // or return a default image if one exists
    }
    

    return (
        <Grid container spacing={12} className="product-grid" style={{ paddingTop: '75px' }}>
            {movieTitles.map((movieTitle, index) => (
                <Grid item lg={3} key={index}>
                    <Card style={{ borderRadius: '22px' }}>
                    <CardMedia
                            component="img"
                            height="600px"
                            width="50px"
                            src={getImageByName(movieTitle)}
                            alt={movieTitle}
                            sx={{ borderRadius: '22px' }}
                        />
                        <Typography variant="h6" component="div" sx={{ fontFamily: 'Georgia, serif', textDecoration: 'none', textAlign: 'center' }}>
                            {movieTitle}
                        </Typography>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default MovieDisplay;
