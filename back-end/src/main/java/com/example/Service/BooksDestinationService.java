package com.example.Service;

import com.example.Model.BooksDestination;
import com.example.Model.Destination;
import com.example.Model.User;
import com.example.Repository.BooksDestinationRepo;
import com.example.Repository.DestinationRepo;
import com.example.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BooksDestinationService implements IBooksDestinationService{
    @Autowired
    private BooksDestinationRepo booksDestinationRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private DestinationRepo destinationRepo;

    @Override
    public BooksDestination one(Long booksDestinationID) {
        return this.booksDestinationRepo.findById(booksDestinationID).get();
    }

    @Override
    public List<BooksDestination> fetchAllBookedDestinations() {
        return this.booksDestinationRepo.findAll();
    }

    @Override
    public BooksDestination saveBookedDestination(BooksDestination booksDestination, Long userID, Long destinationID) {
        User user = this.userRepo.findById(userID).get();
        List<BooksDestination> userBooksDestinationList = user.getBooksDestinations();
        userBooksDestinationList.add(booksDestination);
        user.setBooksDestinations(userBooksDestinationList);
        this.userRepo.save(user);

        Destination destination = this.destinationRepo.findById(destinationID).get();
        List<BooksDestination> destinationBooksDestinationList = destination.getBooksDestinations();
        destinationBooksDestinationList.add(booksDestination);
        destination.setBooksDestinations(destinationBooksDestinationList);
        this.destinationRepo.save(destination);

        booksDestination.setDestination(destination);
        booksDestination.setUser(user);

        return this.booksDestinationRepo.save(booksDestination);
    }

    @Override
    public void deleteBooksDestination(Long booksDestinationID) {
        this.booksDestinationRepo.deleteById(booksDestinationID);
    }
}
