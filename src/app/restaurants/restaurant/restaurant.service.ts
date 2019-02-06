import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Restaurant } from './restaurant.model';
import { MenuItem } from 'app/restaurant-detail';
import { MEAT_API } from 'app/app.api';

@Injectable()
export class RestaurantService {
  constructor(private http: HttpClient) {}

  restaurants(search?: string): Observable<Array<Restaurant>> {
    let params: HttpParams = undefined;

    if (search) {
      params = new HttpParams().set('q', search);
    }
    return this.http.get<Array<Restaurant>>(`${MEAT_API}/restaurants`, {params});
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  reviewOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
  }
}
