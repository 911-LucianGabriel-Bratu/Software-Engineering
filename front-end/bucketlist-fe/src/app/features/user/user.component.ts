import { Component, OnInit } from '@angular/core';
import { DestinationDTO } from '../Models/destination';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { DestinationService } from 'src/service/destination.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  destinations:DestinationDTO[]=[];
  destinationsPrivate:DestinationDTO[]=[];
  constructor(private userSvc: UserService, private router: Router,private destSvc:DestinationService) {}
  ngOnInit(): void {
    this.userSvc.getPrivateList().subscribe((result:DestinationDTO[])=>
    {
      this.destinationsPrivate=result;
    });
    this.destSvc.getDestinations().subscribe((result:DestinationDTO[])=>
    {
      this.destinations=result;
    });
  }
 goToGetOne(destId:number){
  this.router.navigateByUrl(`destination/${destId}`);
  }
  addToPrivate(destid:number){
    this.router.navigateByUrl(`destination/addExisting/${destid}`)

  }
  logout(){
    this.router.navigateByUrl('');
  }
  goToCreate()
  {
      this.router.navigateByUrl('create')
  }
  goToModify()
  {
    this.router.navigateByUrl('user/modify')

  }
  goToDeleteAccount()
  {
    this.router.navigateByUrl('user/delete')

  }
  goToDeleteDestination(dest:number)
  {
    this.router.navigateByUrl(`destination/delete/${dest}`)

  }
}
