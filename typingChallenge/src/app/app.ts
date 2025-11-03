import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypeCard } from './type-card/type-card';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'app-root',
  imports: [TypeCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('typingChallenge');
  randomSentence = faker.lorem.sentence(3);
  
}
