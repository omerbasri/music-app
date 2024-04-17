package com.musicplayer.musicplayerappbackend.service;

import com.musicplayer.musicplayerappbackend.model.User;
import com.musicplayer.musicplayerappbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    public User addUser(User user)
    {
        user.setId(UUID.randomUUID().toString().split("-")[0]);
        return repository.save(user);
    }

    public List<User> findAllUsers(){
        return repository.findAll();
    }

    public User getByUserId(String userId)
    {
        return repository.findById(userId).get();
    }

    public User updateUser(User user)
    {
        User existingUser = repository.findById(user.getId()).get();
        existingUser.setUserName(user.getUserName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPassword(user.getPassword());
        return repository.save(existingUser);
    }

    public String deleteUser(String userId)
    {
        repository.deleteById(userId);
        return "User is deleted successfully";
    }

}
