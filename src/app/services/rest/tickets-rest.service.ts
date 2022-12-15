import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";
import {INearestTour, ITour, ITourLocation} from "../../models/tours";


@Injectable({
  providedIn: 'root'
})
export class TicketsRestService {

  constructor( private  http: HttpClient) { }

  getTickets(): Observable<ITour[]> {
    return this.http.get<ITour[]>('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/',
      {headers:
      { 'sd': 'sssssssss'}});
        }

  getRestError(): Observable<any> {
    return this.http.get<any>('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/notFound');
  }

  getNearestTours(): Observable<INearestTour[]> {
    return this.http.get<INearestTour[]>('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/nearestTours/')
  }

  getLocationList(): Observable<ITourLocation[]> {
    return this.http.get<ITourLocation[]>('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/location/')
  }

  getRandomNearestEvent(type:number): Observable<INearestTour> {
    switch (type) {
      case 0:
        return this.http.get<INearestTour>('../assets/mocks/nearestTours1.json');
      case 1:
        return this.http.get<INearestTour>('assets/mocks/nearestTours2.json');
      case 2:
        return this.http.get<INearestTour>('/assets/mocks/nearestTours3.json');
      default:
        return this.http.get<INearestTour>('/assets/mocks/nearestTours2.json');
//тк используем return то не используется break
    }
  }
  sendTourData(data:any):Observable<any>{
    return this.http.post<INearestTour>('/assets/mocks/nearestTours0.json', data);
  }


}



