import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FullVenueService {

  apiKey = "IoIBA2ojOQ10ZR93AwnJm4glsR5wAU1s"
  urlBase = "https://app.ticketmaster.com/discovery/v2/venues?apikey="
  constructor(private _http: HttpClient) { }

  getAllVenues(){
    return this._http.get(`${this.urlBase}${this.apiKey}`)
  }

}
