package com.musicplayer.musicplayerappbackend.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "registerUserInfo")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class RegisterUser {
    private String email;
    private String username;
    private String password;

}
