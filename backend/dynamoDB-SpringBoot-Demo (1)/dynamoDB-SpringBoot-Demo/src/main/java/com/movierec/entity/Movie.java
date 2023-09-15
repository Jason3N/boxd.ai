package com.movierec.entity;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamoDBTable(tableName = "test")
@DynamoDBDocument
public class Movie {

    @DynamoDBHashKey
    @DynamoDBAutoGeneratedKey
    private String movieID;

    @DynamoDBAttribute
    private String firstName;

    @DynamoDBAttribute
    private String lastName;

    @DynamoDBAttribute
    private String emailId;

    @DynamoDBAttribute
    private Department department;

    public void setName(String name) {
        this.firstName = name;
    }

}
