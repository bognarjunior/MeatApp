import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartService, RestaurantService, OrderService, LoginService, LoggedInGuard } from 'app';

import { InputComponent } from './input';
import { RadioComponent } from './radio';
import { RatingComponent } from './rating';
import { SnackbarComponent, NotificationService } from './messages';
import { LeaveOrderGuard } from 'app/order';

@NgModule({
	declarations: [
		InputComponent,
		RadioComponent,
		RatingComponent,
		SnackbarComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		InputComponent,
		RadioComponent,
		RatingComponent,
		SnackbarComponent,
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [
				ShoppingCartService,
				RestaurantService,
				OrderService,
				NotificationService,
				LoginService,
				LoggedInGuard,
				LeaveOrderGuard
			]
		}
	}
}
