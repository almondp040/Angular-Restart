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
  length = ''; 

  onButton(){
    this.password = 'Now, we are writing some angular!'; 
  }

  getName(){
    return 'Almond Paschal'
  }
}
