import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [
    {
      id: "bread-bakery",
      name: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/img/restaurants/breadbakery.png"
    },
    {
      id: "burger-house",
      name: "Burger House",
      category: "Hamburgers",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png"
    },
    {
      id: "coffee-corner",
      name: "Coffee Corner",
      category: "Coffee Shop",
      deliveryEstimate: "30-40m",
      rating: 4.8,
      imagePath: "assets/img/restaurants/coffeecorner.png"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
