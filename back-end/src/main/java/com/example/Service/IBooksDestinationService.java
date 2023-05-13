package com.example.Service;

import com.example.Model.BooksDestination;
import com.example.Model.DTOs.BookedDTO;

import java.util.List;

public interface IBooksDestinationService {
    BooksDestination one(Long booksDestinationID);

    List<BooksDestination> fetchAllBookedDestinations();

    BookedDTO oneDTO(Long booksDestinationID);

    List<BookedDTO> fetchAllBookedDestinationsDTO();

    BooksDestination saveBookedDestination(BooksDestination booksDestination, Long userID, Long destinationID);

    void deleteBooksDestination(Long booksDestinationID);
}
