package com.movierec.repositry;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import com.movierec.entity.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class employeeRepo {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public Movie save (Movie movie){
        dynamoDBMapper.save(movie);
        return movie;
    }

    public Movie getMovieByID(String movieID){
        return dynamoDBMapper.load(Movie.class, movieID);
    }

    public String  delete(String movieID){
        Movie mov = dynamoDBMapper.load(Movie.class, movieID);
        dynamoDBMapper.delete(mov);
        return "Movie Deleted";
    }

    public String update(String movieID, Movie movie){
        dynamoDBMapper.save(movie,
                new DynamoDBSaveExpression()
                        .withExpectedEntry("movieID",
                                new ExpectedAttributeValue(
                                        new AttributeValue().withS(movieID)
                                )));
        return movieID;
    }

}
