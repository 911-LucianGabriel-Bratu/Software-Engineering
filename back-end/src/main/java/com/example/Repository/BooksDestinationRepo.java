package com.example.Repository;

import com.example.Model.BooksDestination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksDestinationRepo extends JpaRepository<BooksDestination, Long> {
}
