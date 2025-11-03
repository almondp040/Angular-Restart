import { CurrencyPipe, DatePipe,  DecimalPipe,  JsonPipe,  TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert-pipe';

@Component({
  selector: 'app-root',
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, ConvertPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Payment Form';
  name: string = ''; 
  date: string = '';
  amount: number = 0;
  height: number = 0;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
  };

  miles:number = 0;

  onNameChange(value: string) {
    console.log(value);
    this.name = value;
  }

  onDateChange(value: string) {
    console.log(value);
    this.date = value;
  }

  onAmountChange(value: string) {
    console.log(value);
    this.amount = parseFloat(value);
  }

  onHeightChange(value: string) {
    console.log(value);
    this.height = parseFloat(value);
  }

  milesToKm(value: string) {
    this.miles = parseFloat(value);
  }

}
