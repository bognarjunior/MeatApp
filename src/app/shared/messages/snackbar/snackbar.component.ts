import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

import { tap, switchMap} from 'rxjs/operators';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { NotificationService } from '../notification';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message = '';

  snackVisibility = 'hidden';

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.notificationService.notifier
      .pipe(
        tap((message: string) => {
          this.message = message;
          this.snackVisibility = 'visible'; }),
        switchMap( (message: string) => timer(3000))
      )
      .subscribe(() => this.snackVisibility = 'hidden');
  }

}
