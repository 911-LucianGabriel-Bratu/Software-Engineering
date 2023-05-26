import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinationDTO, DestinationNoIDDTO } from 'src/app/features/Models/destination';
import { UserDTO } from 'src/app/features/Models/user';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  baseUrl:string = "http://localhost:80/";

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<DestinationDTO[]> {
    return this.http.get(`${this.baseUrl}destinations`) as Observable<DestinationDTO[]>;
  }

  getOne(destinationID: number): Observable<DestinationDTO> {
    return this.http.get(`${this.baseUrl}destinations/${destinationID}`) as Observable<DestinationDTO>;
  }

  addDestination(destination: DestinationNoIDDTO): Observable<DestinationDTO> {
    return this.http.post(`${this.baseUrl}destinations`, destination) as Observable<DestinationDTO>;
  }
  getMaxId(): Observable<number> {
    return this.http.get(`${this.baseUrl}destinations/maxID`) as Observable<number>;
  }
}
