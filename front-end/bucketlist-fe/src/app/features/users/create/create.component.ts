import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationService } from 'src/service/destination.service';
import { DestinationDTO, DestinationNoIDDTO } from '../../Models/destination';
import { from } from 'rxjs';
import { BookedDTO } from '../../Models/booked';
import { BookdestinationService } from 'src/service/bookdestination.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  geolocation?: string;
  title?: string;
  description?: string;
  image?: string;
  fromDate!:DatePipe;
  toDate!:DatePipe;
  dest:BookedDTO={};
  did!:number;
  constructor(private destinationSvc: DestinationService, private router: Router,private bdSvc:BookdestinationService){}
  
  addDestination(){
    if(this.geolocation && this.title && this.image && this.description&&this.fromDate&&this.toDate){
      const destination: DestinationNoIDDTO = {
        geolocation: this.geolocation,
        title: this.title,
        description: this.description,
        image: this.image
        
      }
      this.destinationSvc.getMaxId().subscribe((res:number)=>
      {
        this.did=res;
      })
      this.destinationSvc.addDestination(destination).subscribe(result =>{
        this.dest.fromDate=this.fromDate;
        this.dest.toDate=this.toDate;
        
        const uid=sessionStorage.getItem("userId");
        this.bdSvc.addToPrivate(this.dest,Number(uid),this.did).subscribe();
      }
      ,(err) => {alert("Error!")});

    }
  }
  
}
