package com.example.Controller;

import com.example.Model.BooksDestination;
import com.example.Service.BooksDestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class BooksDestinationController {
    @Autowired
    private BooksDestinationService booksDestinationService;

    @GetMapping("/booked/{bookedID}")
    public BooksDestination one(@PathVariable("bookedID") Long bookedID){
        return this.booksDestinationService.one(bookedID);
    }

    @GetMapping("/booked")
    public List<BooksDestination> fetchAllBookedDestinations(){
        return this.booksDestinationService.fetchAllBookedDestinations();
    }

    @PostMapping("/booked/users/{userID}/destinations/{destinationID}")
    public BooksDestination saveBookedDestination(@PathVariable("userID") Long userID,
                                                  @PathVariable("destinationID") Long destinationID,
                                                  @RequestBody BooksDestination booksDestination){
        return this.booksDestinationService.saveBookedDestination(booksDestination, userID, destinationID);
    }

    @DeleteMapping("/booked/{bookedID}")
    public void deleteBookedDestination(@PathVariable("bookedID") Long bookedID){
        this.booksDestinationService.deleteBooksDestination(bookedID);
    }
}
