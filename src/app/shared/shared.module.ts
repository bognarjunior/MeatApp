import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input';
import { RadioComponent } from './radio';
import { RatingComponent } from './rating';

@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent
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
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {}