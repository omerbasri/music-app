package com.musicplayer.musicplayerappbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "loginUserInfo")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class LoginUser {
    private String username;
    private String password;

}
