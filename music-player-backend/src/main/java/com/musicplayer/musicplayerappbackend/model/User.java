package com.musicplayer.musicplayerappbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "userInfo")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class User {
    @Id
    private String id;
    private String userName;
    private String email;
    private String password;
}
