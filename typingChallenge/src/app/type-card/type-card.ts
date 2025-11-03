import { Component, Input } from '@angular/core';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'type-card',
  imports: [],
  templateUrl: './type-card.html',
  styleUrl: './type-card.css'
})
export class TypeCard {
  
  @Input() randomSentence = "";
  enteredText = "";

  grabValue(value: string){
    console.log(value);
    this.enteredText = value;
  }

  compare(letter: string, enteredLetter: string){
    if(!enteredLetter){
      return "pending";
    }

    if (enteredLetter === letter) {
      return "correct";
    } else {
      return "incorrect";
    }
  }
  
}
