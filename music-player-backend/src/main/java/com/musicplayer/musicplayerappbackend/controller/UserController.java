package com.musicplayer.musicplayerappbackend.controller;

import com.musicplayer.musicplayerappbackend.model.User;
import com.musicplayer.musicplayerappbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user){
        return service.addUser(user);
    }

    @GetMapping
    public List<User> getUsers()
    {
        return service.findAllUsers();
    }
    @GetMapping("/{userId}")
    public User getUser(@PathVariable String userId)
    {
        return service.getByUserId(userId);
    }
}
