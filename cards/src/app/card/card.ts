import { Component , Input} from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgFor],
  templateUrl: './card.html',
  styleUrl: './card.css'
})



export class Card {
// This is where my data is accepted from app.ts: 
  @Input() posts: any[] = [];
}







