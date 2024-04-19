package com.musicplayer.musicplayerappbackend.controller;

import com.musicplayer.musicplayerappbackend.model.User;
import com.musicplayer.musicplayerappbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
public class RegisterController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public ResponseEntity<?> login(@RequestBody User user)
    {
        String username = user.getUserName();
        String email = user.getEmail();
        String password = user.getPassword();

        if(service.addUser(user) != null && username!=null)
        {
            return ResponseEntity.ok("User successfully registered");
        }
        else
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to register user");
    }
}
