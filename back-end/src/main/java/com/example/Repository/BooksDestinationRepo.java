package com.example.Repository;

import com.example.Model.BooksDestination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksDestinationRepo extends JpaRepository<BooksDestination, Long> {
    @Query("SELECT d.bookID FROM BooksDestination d WHERE d.destination.destinationID = :destId AND d.user.userID = :uid")
    Long getBookedIdFromUserAndDestination(@Param("destId") Long destId, @Param("uid") Long uid);
}
