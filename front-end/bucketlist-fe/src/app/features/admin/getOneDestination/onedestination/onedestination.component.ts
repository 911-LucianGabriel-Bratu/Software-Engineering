import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DestinationDTO } from 'src/app/features/Models/destination';
import { DestinationService } from 'src/service/destination.service';

@Component({
  selector: 'app-onedestination',
  templateUrl: './onedestination.component.html',
  styleUrls: ['./onedestination.component.css']
})
export class OnedestinationComponent implements OnInit{
  destination?: DestinationDTO;
  destinationID?: number;
  imageURL?: string;

  constructor(private destinationSvc: DestinationService, private router:Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        this.destinationID = params['id'];
        this.destinationSvc.getOne(this.destinationID!).subscribe((result: DestinationDTO) => {
          this.destination = result;
          this.imageURL = this.destination.image;
        })
      });
  }

  goBack(){
    this.router.navigateByUrl(`admin`);
  }
}
