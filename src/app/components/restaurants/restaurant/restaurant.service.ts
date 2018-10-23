import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Restaurant } from "./restaurant.model";
import { MEAT_API } from "app/app.api";

@Injectable()
export class RestaurantService {  
  constructor(private http: Http) {}

  restaurants(): Observable<Array<Restaurant>> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json());
  }
}