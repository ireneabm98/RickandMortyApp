// src/app/app.ts
import { Component } from '@angular/core';
import { Characters } from './components/characters/characters'; // <--- Importa el componente

@Component({
  selector: 'app-root',
  standalone: true,
  // Aquí se registra el componente Characters para que Angular lo pueda usar:
  imports: [Characters], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  title = 'Rick & Morty - Personajes';
}