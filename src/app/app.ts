import { Component } from '@angular/core';
import { CharactersComponent } from './components/characters/characters';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharactersComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  title = 'Rick & Morty';
}



