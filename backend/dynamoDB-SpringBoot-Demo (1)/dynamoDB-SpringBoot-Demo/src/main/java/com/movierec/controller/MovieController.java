package com.movierec.controller;


import com.movierec.entity.Movie;
import com.movierec.repositry.employeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MovieController {

    @Autowired
    private employeeRepo employeeRepo;

    @PostMapping("/movie")
    public Movie saveMovie(@RequestBody Movie movie){

        return employeeRepo.save(movie);
    }

    @GetMapping("/movie/{id}")
    public Movie getMovie(@PathVariable("id") String movieID){
        return employeeRepo.getMovieByID(movieID);
    }

    @GetMapping("/movie/name/{name}")
    public List<Movie> getMoviesByName(@PathVariable("name") String movieName){
        return employeeRepo.getMovieByName(movieName);
    }

    @DeleteMapping("/movie/{id}")
    public String deleteMovie(@PathVariable("id") String movieID){
        return employeeRepo.delete(movieID);
    }

    @PutMapping("/movie/{id}")
    public String updateMovie(@PathVariable("id") String movieID, @RequestBody Movie movie){
        return employeeRepo.update(movieID, movie);
    }
}
