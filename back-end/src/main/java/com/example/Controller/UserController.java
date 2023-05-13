package com.example.Controller;

import com.example.Model.User;
import com.example.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> fetchAllUsers(){
        return this.userService.fetchAllUsers();
    }

    @GetMapping("/users/{userID}")
    public User one(@PathVariable("userID") Long userID){
        return this.userService.one(userID);
    }

    @PostMapping("/users")
    public User saveUser(@RequestBody User user){
        return this.userService.saveUser(user);
    }

    @DeleteMapping("/users/{userID}")
    public void deleteUser(@PathVariable("userID") Long userID){
        this.userService.deleteUser(userID);
    }

}
