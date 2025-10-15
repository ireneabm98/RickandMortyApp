import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../../services/characters';
import { Character } from './character.interface';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.html',
  styleUrl: './characters.scss'
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    console.log('CharactersComponent inicializado');
    this.charactersService.getCharacters().subscribe({
      next: (data) => {
        console.log('Datos recibidos desde la API:', data);
        this.characters = data.results;
      },
      error: (err) => console.error('Error al obtener personajes:', err)
    });
  }
}

