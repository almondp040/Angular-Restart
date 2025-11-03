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
    //This.password equals our password: 
    const numbers = '123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz'; 
    const symbols = '!@#$%^&*()'; 

//Puts it together: 
    let validCharacters = ''; 

    if (this.includeLetters) {
      validCharacters += letters; 
       
    } 

    if (this.includeNumbers) {
      validCharacters += numbers; 
      
    }

    if(this.includeSymbols){
      validCharacters += symbols; 
    }




    let generatePassword = ''; 
    
  //Randomizes it: 
    for (let index = 0; index < this.length; index++) {
      const index = Math.floor(Math.random()* validCharacters.length); 
      generatePassword += validCharacters[index]; 
    }

    console.log(validCharacters)
    this.password = generatePassword; 

   
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
