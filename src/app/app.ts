import { Component, signal } from '@angular/core';

@Component({
  selector: 'Gaming_world-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  app = {
  "title":'Gaming_world',
  "logo": "/assets/logo.png"
  }
  
}
