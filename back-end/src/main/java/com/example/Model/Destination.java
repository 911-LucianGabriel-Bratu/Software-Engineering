package com.example.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "destinations", schema = "public")
public class Destination {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long destinationID;

    @Column(name = "geolocation")
    private String geolocation;

    @Column(name = "title")
    private String title;

    @Column(name = "image")
    private String image;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "destination")
    private List<BooksDestination> booksDestinations = new ArrayList<>();
}
