import { Component, Injector, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
name: string | undefined = '';


 //Data: 
  images = [

    {
      title: "At the beach", 
      url: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
    }, 

    {
      title: "Palm Trees", 
      url: "https://images.unsplash.com/photo-1544536871-6e891baa163f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
    }, 

    {
      title: "Open Beach with Dock", 
      url: "https://images.unsplash.com/photo-1553578827-0df58e305953?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
    }, 

    {
      title: "Beach Sunset", 
      url: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
    }, 

    {
      title: "Beach Water", 
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
    }

  ]

  giveMeTitle(){
    if (this.images.length > 0) {
      return this.images[0].title;
    } else {
      return "No Images Found";
    }
  }

}

