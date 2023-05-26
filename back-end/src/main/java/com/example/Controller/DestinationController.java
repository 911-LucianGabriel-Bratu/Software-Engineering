package com.example.Controller;

import com.example.Model.DTOs.DestinationDTO;
import com.example.Model.Destination;
import com.example.Service.DestinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DestinationController {
    @Autowired
    private DestinationService destinationService;

    @GetMapping("/destinations")
    public List<Destination> fetchAllDestinations(){
        return this.destinationService.fetchAllDestinations();
    }

    @GetMapping("/destinations/{destinationID}")
    public Destination one(@PathVariable("destinationID") Long destinationID){
        return this.destinationService.one(destinationID);
    }

    @GetMapping("/destinations/dto")
    public List<DestinationDTO> fetchAllDestinationsDTO(){
        return this.destinationService.fetchAllDestinationsDTO();
    }

    @GetMapping("/destinations/dto/{destinationID}")
    public DestinationDTO oneDTO(@PathVariable("destinationID") Long destinationID){
        return this.destinationService.oneDTO(destinationID);
    }

    @PostMapping("/destinations")
    public Destination saveUser(@RequestBody Destination destination){
        return this.destinationService.saveDestinationToPublicList(destination);
    }

    @DeleteMapping("/destinations/{destinationID}")
    public void deleteDestination(@PathVariable("destinationID") Long destinationID){
        this.destinationService.deleteDestination(destinationID);
    }
    @GetMapping("/destinations/maxID")
    public Long maxId()
    {
        System.out.println(destinationService.getMaxId());
        return destinationService.getMaxId();
    }
}
