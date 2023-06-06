import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookdestinationService } from 'src/service/bookdestination.service';

@Component({
  selector: 'app-delete-destination-private',
  templateUrl: './delete-destination-private.component.html',
  styleUrls: ['./delete-destination-private.component.css']
})
export class DeleteDestinationPrivateComponent implements OnInit{
  did!:number;
  bid!:number;
  constructor(private activatedRoute: ActivatedRoute,private bdSvc:BookdestinationService,private router:Router){}

  ngOnInit(): void {this.activatedRoute.params.subscribe(params => {
    this.did = params['id'];
    this.bdSvc.getBookedIdFromUserAndDestinationID(this.did).subscribe(result=>
      {
        this.bid=result;
      }
      )
  })
  }
  deleteOne()
  {
    this.bdSvc.deleteFromPrivate(this.bid).subscribe();setTimeout(() => {
      this.router.navigateByUrl("/user");
    },100);
  }

  }

