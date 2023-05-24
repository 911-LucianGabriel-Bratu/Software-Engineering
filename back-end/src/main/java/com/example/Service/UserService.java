package com.example.Service;

import com.example.Model.BooksDestination;
import com.example.Model.DTOs.BooksDestinationDTO;
import com.example.Model.DTOs.UserDTO;
import com.example.Model.Destination;
import com.example.Model.User;
import com.example.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    public List<UserDTO> fetchAllUsersDTO() {
        List<User> userList = this.userRepo.findAll();
        List<UserDTO> userDTOList = new ArrayList<>();

        for(User u: userList){
            UserDTO userDTO = new UserDTO();
            userDTO.setUserID(u.getUserID());
            userDTO.setUsername(u.getUsername());
            userDTO.setPassword(u.getPassword());
            userDTO.setAdmin(u.isAdmin());
            userDTOList.add(userDTO);
        }
        return userDTOList;
    }

    @Override
    public UserDTO oneDTO(Long userID) {
        User u = this.userRepo.findById(userID).get();

        UserDTO userDTO = new UserDTO();
        userDTO.setUserID(u.getUserID());
        userDTO.setUsername(u.getUsername());
        userDTO.setPassword(u.getPassword());
        userDTO.setAdmin(u.isAdmin());

        return userDTO;
    }

    @Override
    public void deleteUser(Long userID) {
        this.userRepo.deleteById(userID);
    }

    @Override
    public List<BooksDestinationDTO> getPrivateList(Long UserID) {
        User u = this.userRepo.findById(UserID).get();

        List<BooksDestinationDTO> privateListDTO = new ArrayList<>();
        List<BooksDestination> privateList = u.getBooksDestinations();

        for(BooksDestination b: privateList){
            Destination d = b.getDestination();
            BooksDestinationDTO dto = new BooksDestinationDTO();

            dto.setDescription(d.getDescription());
            dto.setTitle(d.getTitle());
            dto.setImage(d.getImage());
            dto.setGeolocation(d.getGeolocation());
            dto.setDestinationID(d.getDestinationID());

            dto.setFromDate(b.getFromDate());
            dto.setToDate(b.getToDate());

            privateListDTO.add(dto);
        }

        return privateListDTO;
    }
}
