import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinationDTO } from 'src/app/features/Models/destination';
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
  getPrivateList():Observable<DestinationDTO[]>{
    const usid=sessionStorage.getItem("userId");
    return this.http.get(`${ this.baseUrl }users/${usid}/privateList`) as Observable<DestinationDTO[]>;
  }
  updatePassword(newPass:string):Observable<string>{
    const usid=sessionStorage.getItem("userId");
    return this.http.put(`${this.baseUrl}users/updatePass/${usid}`,newPass) as Observable<string>;
  }
  deleteAccount():Observable<string>
  {
    const usid=sessionStorage.getItem("userId");
    return this.http.delete(`${this.baseUrl}users/${usid}`)as Observable<string>;
  }

}
