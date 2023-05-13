package com.example.Service;

import com.example.Model.BooksDestination;

import java.util.List;

public interface IBooksDestinationService {
    BooksDestination one(Long booksDestinationID);

    List<BooksDestination> fetchAllBookedDestinations();

    BooksDestination saveBookedDestination(BooksDestination booksDestination, Long userID, Long destinationID);

    void deleteBooksDestination(Long booksDestinationID);
}
