package com.example.Service;

import com.example.Model.DTOs.DestinationDTO;
import com.example.Model.Destination;
import com.example.Repository.DestinationRepo;
import com.example.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    public List<DestinationDTO> fetchAllDestinationsDTO() {
        List<Destination> destinationList = this.destinationRepo.findAll();
        List<DestinationDTO> destinationDTOList = new ArrayList<>();

        for(Destination d: destinationList){
            DestinationDTO destinationDTO = new DestinationDTO();
            destinationDTO.setDestinationID(d.getDestinationID());
            destinationDTO.setGeolocation(d.getGeolocation());
            destinationDTO.setDescription(d.getDescription());
            destinationDTO.setTitle(d.getTitle());
            destinationDTO.setImage(d.getImage());
            destinationDTOList.add(destinationDTO);
        }
        return destinationDTOList;
    }

    @Override
    public DestinationDTO oneDTO(Long destinationID) {
        Destination d = this.destinationRepo.findById(destinationID).get();

        DestinationDTO destinationDTO = new DestinationDTO();
        destinationDTO.setDestinationID(d.getDestinationID());
        destinationDTO.setGeolocation(d.getGeolocation());
        destinationDTO.setDescription(d.getDescription());
        destinationDTO.setTitle(d.getTitle());
        destinationDTO.setImage(d.getImage());

        return destinationDTO;
    }

    @Override
    public void deleteDestination(Long destinationID) {
        this.destinationRepo.deleteById(destinationID);
    }
}
