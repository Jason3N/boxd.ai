import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, Grid, Typography, CardMedia } from '@mui/material';
import axios from 'axios';

function MovieDisplay() {
    const [movieTitles, setMovieTitles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:8083/movie/data/');
                const movies = response.data;

                const titles = movies.map(movie => movie.title);
                // Remove null values and keep distinct values
                const filteredTitles = titles.filter((title, index, self) => title !== null && self.indexOf(title) === index);
                setMovieTitles(filteredTitles);
            } catch (error) {
                console.log('Error:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <Grid container spacing={12} className="product-grid" style={{ paddingTop: '75px' }}>
            {movieTitles.map((title, index) => (
                <Grid item lg={4} key={index}>
                        <CardMedia
                                component="img"
                                height="280"
                                width="100"
                                sx={{ borderRadius: '22px' }}
                                />
                        <Card style={{ borderRadius: '22px' }}>
                            <Typography variant="h6" component="div" sx={{ fontFamily: 'Georgia, serif', textDecoration: 'none', textAlign: 'center' }}>
                                {title}
                            </Typography>
                        </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default MovieDisplay;
