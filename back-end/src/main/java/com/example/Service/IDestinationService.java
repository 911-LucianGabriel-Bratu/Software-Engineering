package com.example.Service;


import com.example.Model.Destination;

import java.util.List;

public interface IDestinationService {
    Destination saveDestinationToPublicList(Destination destination);

    List<Destination> fetchAllDestinations();

    Destination one(Long destinationID);

    void deleteDestination(Long destinationID);
}
