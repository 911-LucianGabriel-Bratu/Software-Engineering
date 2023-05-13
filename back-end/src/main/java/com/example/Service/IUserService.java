package com.example.Service;

import com.example.Model.User;

import java.util.List;

public interface IUserService {
    User saveUser(User user);

    List<User> fetchAllUsers();

    User one(Long userID);

    void deleteUser(Long userID);
}
