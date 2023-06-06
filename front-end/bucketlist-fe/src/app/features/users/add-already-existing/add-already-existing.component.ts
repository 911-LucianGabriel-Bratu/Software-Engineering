import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BookdestinationService } from 'src/service/bookdestination.service';
import { BookedDTO } from '../../Models/booked';

@Component({
  selector: 'app-add-already-existing',
  templateUrl: './add-already-existing.component.html',
  styleUrls: ['./add-already-existing.component.css']
})
export class AddAlreadyExistingComponent implements OnInit{
  fromDate!:DatePipe;
  toDate!:DatePipe;
  did!:number
  dest:BookedDTO={};

  constructor(private activatedRoute: ActivatedRoute,private bdSvc:BookdestinationService,private router:Router){
    
  }
  ngOnInit(): void {this.activatedRoute.params.subscribe(params => {
    this.did = params['id'];
  })
  }
  addDestination()
  {
    this.dest.fromDate=this.fromDate;
    this.dest.toDate=this.toDate;
    const uid=sessionStorage.getItem("userId");
    this.bdSvc.addToPrivate(this.dest,Number(uid),this.did).subscribe();
    setTimeout(() => {
      this.router.navigateByUrl("/user");
    }, 100); 
  }
    
  }

