import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationNoIDDTO } from 'src/app/features/Models/destination';
import { DestinationService } from 'src/service/destination.service';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.component.html',
  styleUrls: ['./add-destination.component.css']
})
export class AddDestinationComponent {

geolocation?: string;
title?: string;
description?: string;
image?: string;

constructor(private destinationSvc: DestinationService, private router: Router){}

addDestination(){
  if(this.geolocation && this.title && this.image && this.description){
    const destination: DestinationNoIDDTO = {
      geolocation: this.geolocation,
      title: this.title,
      description: this.description,
      image: this.image
    }
    this.destinationSvc.addDestination(destination).subscribe(result =>{
      this.router.navigateByUrl('admin');
    }
    ,(err) => {alert("Error!")});
  }
}

}
