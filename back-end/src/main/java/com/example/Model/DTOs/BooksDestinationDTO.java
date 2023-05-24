package com.example.Model.DTOs;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BooksDestinationDTO {
    private Long destinationID;

    private String geolocation;

    private String title;

    private String image;

    private String description;

    private LocalDate fromDate;

    private LocalDate toDate;
}
