package com.example.Controller;

import com.example.Model.BooksDestination;
import com.example.Model.DTOs.BooksDestinationDTO;
import com.example.Model.DTOs.UserDTO;
import com.example.Model.Destination;
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

    @GetMapping("/users/dto")
    public List<UserDTO> fetchAllUsersDTO(){
        return this.userService.fetchAllUsersDTO();
    }

    @GetMapping("/users/dto/{userID}")
    public UserDTO oneDTO(@PathVariable("userID") Long userID){
        return this.userService.oneDTO(userID);
    }

    @PostMapping("/users")
    public User saveUser(@RequestBody User user){
        return this.userService.saveUser(user);
    }

    @DeleteMapping("/users/{userID}")
    public void deleteUser(@PathVariable("userID") Long userID){
        System.out.println(userID);
        this.userService.deleteUser(userID);
    }

    @GetMapping("/users/{userID}/privateList")
    public List<BooksDestinationDTO> getPrivateList(@PathVariable("userID") Long userID) {return this.userService.getPrivateList(userID);}
    @PutMapping("/users/updatePass/{userID}")
    public User changePass(@PathVariable Long userID,@RequestBody String newPass)
    {
        return userService.changePass(userID,newPass);
    }
}
