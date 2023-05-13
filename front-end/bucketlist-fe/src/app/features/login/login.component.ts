import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { UserDTO } from '../Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
username?:string;
password?:string;
users?:UserDTO[];

constructor(private userSvc: UserService, private router: Router) {}

ngOnInit(): void {
  this.userSvc.getUsers().subscribe(result => {
    this.users = result;
  });
}

checkCredentials(){
  if(this.password && this.username){
    for(const user of this.users!){
      if(user.username === this.username && user.password === this.password && user.admin){
        this.router.navigateByUrl('admin')
      }
      else if(user.username === this.username && user.password === this.password && !user.admin){
        this.router.navigateByUrl('user')
      }
      else{
        const dialogBox = document.getElementById('dialog-box');
        dialogBox?.classList.remove('hidden');
      }
    }
  }
}
}
