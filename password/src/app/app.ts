import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  host: {
    ngSkipHydration: 'true'
  },
  styleUrl: './app.css'
})
export class App {
  password = ''; 
  length = 0; 
  includeLetters = false; 
  includeNumbers = false;
  includeSymbols = false; 

   onChangeUseLetters(){
    this.includeLetters = !this.includeLetters; 
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string){
      const parseValue = parseInt(value); 
      console.log(parseValue)

      if (!isNaN(parseValue)) {
        this.length = parseValue
      }

  }
  onButton(){
    this.password = 'Now, we are writing some angular!'; 
    console.log(
      "Letters: ", this.includeLetters, 
      "Numbers: ", this.includeNumbers, 
      "Symbols: ", this.includeSymbols, 
      "Length: ", this.length
    )
  }



  getName(){
    return this.length
  }


}
