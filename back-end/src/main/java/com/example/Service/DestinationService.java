package com.example.Service;

import com.example.Model.Destination;
import com.example.Repository.DestinationRepo;
import com.example.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DestinationService implements IDestinationService{
    @Autowired
    private DestinationRepo destinationRepo;

    @Override
    public Destination saveDestinationToPublicList(Destination destination) {
        return this.destinationRepo.save(destination);
    }

    @Override
    public List<Destination> fetchAllDestinations() {
        return this.destinationRepo.findAll();
    }

    @Override
    public Destination one(Long destinationID) {
        return this.destinationRepo.findById(destinationID).get();
    }

    @Override
    public void deleteDestination(Long destinationID) {
        this.destinationRepo.deleteById(destinationID);
    }
}
