package com.example.Service;


import com.example.Model.DTOs.DestinationDTO;
import com.example.Model.Destination;

import java.util.List;

public interface IDestinationService {
    Destination saveDestinationToPublicList(Destination destination);

    List<Destination> fetchAllDestinations();

    Destination one(Long destinationID);

    List<DestinationDTO> fetchAllDestinationsDTO();

    DestinationDTO oneDTO(Long destinationID);

    void deleteDestination(Long destinationID);
}
