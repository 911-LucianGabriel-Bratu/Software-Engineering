import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-modify-account',
  templateUrl: './modify-account.component.html',
  styleUrls: ['./modify-account.component.css']
})
export class ModifyAccountComponent {
  pass!:string;
  constructor(private userSvc:UserService,private router:Router){}
  changePass(){

    this.userSvc.updatePassword(this.pass).subscribe();
    this.router.navigateByUrl('');
  }
}
