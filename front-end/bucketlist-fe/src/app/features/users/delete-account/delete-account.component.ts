import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit{
  ngOnInit(): void {
    this.userSvc.deleteAccount().subscribe();
    setTimeout(() => {
      this.router.navigateByUrl('');
    }, 2000); 
  }
  constructor(private userSvc:UserService,private router:Router){}
}
