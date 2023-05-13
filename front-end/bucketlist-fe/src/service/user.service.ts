import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from 'src/app/features/Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string = "http://localhost:80/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserDTO[]> {
    return this.http.get(`${this.baseUrl}users`) as Observable<UserDTO[]>;
  }
}
