package com.musicplayer.musicplayerappbackend.service;


import com.musicplayer.musicplayerappbackend.model.User;
import com.musicplayer.musicplayerappbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;

    public boolean authenticateUser(String username, String password)
    {
        User user = repository.findByUserName(username);
        if(user == null || !user.getPassword().equals(password))
        {
            return false;
        }
            return true;

    }
}
