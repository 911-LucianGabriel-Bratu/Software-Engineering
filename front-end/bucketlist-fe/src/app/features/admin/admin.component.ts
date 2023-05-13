import { Component, OnInit } from '@angular/core';
import { DestinationDTO } from '../Models/destination';
import { DestinationService } from 'src/service/destination.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  destinations?: DestinationDTO[]

  constructor(private destinationSvc: DestinationService, private router: Router) {}

  ngOnInit(): void {
    this.destinationSvc.getDestinations().subscribe(result =>{
      this.destinations = result;
    });
  }

  goToAdd(){
    this.router.navigateByUrl(`destination/add`);
  }

  goToGetOne(destinationID: number){
    this.router.navigateByUrl(`destination/${destinationID}`);
  }

  logout(){
    this.router.navigateByUrl('');
  }
}
