package com.musicplayer.musicplayerappbackend.controller;

import com.musicplayer.musicplayerappbackend.model.LoginUser;
import com.musicplayer.musicplayerappbackend.model.TokenResponse;
import com.musicplayer.musicplayerappbackend.service.AuthenticationService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;


@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
public class LoginController {
    @Autowired
    private AuthenticationService service;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginUser loginUser)
    {
        String username = loginUser.getUsername();
        String password = loginUser.getPassword();
        System.out.println(username);
        System.out.println(password);

        if(service.authenticateUser(username,password))
        {

            String token = generateToken(username);
            TokenResponse tr = new TokenResponse();
            tr.setToken(token);
            return ResponseEntity.ok(tr);
        }
        else
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Username or password incorrect");
        }
    }

    public String generateToken(String username)
    {

        long validityInMilliseconds=3600000;
        long now = System.currentTimeMillis();
        Date validity = new Date(now+validityInMilliseconds);

        return Jwts.builder()
                .setSubject(username)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS256,"KcX1VEbGFZs3LMolPFJRRHywfHC3pwoRFhNdNpI2RLs")
                .compact();
    }
}
