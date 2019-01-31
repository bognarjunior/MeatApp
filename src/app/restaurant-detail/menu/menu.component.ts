import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item';
import { RestaurantService } from 'app';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantService
      .menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem) {
    console.log('Item -> ', item);
  }

}
