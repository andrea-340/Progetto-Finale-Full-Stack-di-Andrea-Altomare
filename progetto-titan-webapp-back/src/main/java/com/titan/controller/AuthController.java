package com.titan.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.titan.model.User;
import com.titan.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            User registeredUser = authService.register(user);
            return ResponseEntity.ok(registeredUser);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Errore durante la registrazione: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        if (user.getEmail() == null || user.getPassword() == null) {
            return ResponseEntity.badRequest().body("Email e password sono obbligatorie");
        }

        User loggedUser = authService.login(user.getEmail(), user.getPassword());

        if (loggedUser != null) {
            return ResponseEntity.ok(loggedUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED) 
                                 .body("Credenziali non valide");
        }
    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers() {
        try {
            List<User> users = authService.getAllUsers();
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Errore server");
        }
    }
}