package com.example.Service;

import com.example.Model.User;
import com.example.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService implements IUserService{
    @Autowired
    private UserRepo userRepo;
    @Override
    public User saveUser(User user) {
        return this.userRepo.save(user);
    }

    @Override
    public List<User> fetchAllUsers() {
        return this.userRepo.findAll();
    }

    @Override
    public User one(Long userID) {
        return this.userRepo.findById(userID).get();
    }

    @Override
    public void deleteUser(Long userID) {
        this.userRepo.deleteById(userID);
    }
}
