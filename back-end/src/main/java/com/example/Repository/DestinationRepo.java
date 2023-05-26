package com.example.Repository;

import com.example.Model.Destination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DestinationRepo extends JpaRepository<Destination, Long> {
    @Query("SELECT MAX(d.destinationID) FROM Destination d")
    Long getMaxId();
}
