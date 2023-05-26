import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookedDTO } from 'src/app/features/Models/booked';

@Injectable({
  providedIn: 'root'
})
export class BookdestinationService {

  baseUrl:string = "http://localhost:80/";

  constructor(private http: HttpClient) { }
  addToPrivate(destination:BookedDTO,uid:number,did:number){
    return this.http.post(`${this.baseUrl}booked/users/${uid}/destinations/${did}`,destination);
  }
  deleteFromPrivate(did:number){
    return this.http.delete(`${this.baseUrl}booked/${did}`);
  }
  getBookedIdFromUserAndDestinationID(did:number):Observable<number>
  {
    const uid=Number(sessionStorage.getItem("userId"));
    return this.http.get(`${this.baseUrl}booked/findByUser/${did}/${uid}`) as Observable<number>;
  }
}
