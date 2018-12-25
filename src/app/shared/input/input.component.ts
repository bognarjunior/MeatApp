import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  inputValue: any;

  @Input()
  label: string;

  @Input()
  errorMessage: string;

  @ContentChild(NgModel)
  model: NgModel;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.inputValue = this.model;
    if (this.inputValue === undefined) {
      throw new Error('Este componente precisa ser utilizado com uma diretiva ngModel');
    }
  }

  hasSuccess(): boolean{
    return this.inputValue.valid && (this.inputValue.dirty || this.inputValue.touched);
  }

  hasError(): boolean{
    return !this.inputValue.valid && (this.inputValue.dirty || this.inputValue.touched);
  }

}
