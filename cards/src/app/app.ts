import { Component, output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [Card], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
// This is where my data is created: Arrays equal ngFor!
  posts = [
  {
    title: 'Trees', 
    imageURL: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    username: 'almondP04',
    content: 'Trees are so nice!'
  }, 

    {
    title: 'Snowy Mountains', 
    imageURL: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    username: 'almondP05',
    content: 'Mountains are so nice!'
    }, 

    {
    title: 'Biking', 
    imageURL: 'https://images.unsplash.com/photo-1508789454646-bef72439f197?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    username: 'almondP06',
    content: 'Biking is so nice!'
    }
]; 

}



