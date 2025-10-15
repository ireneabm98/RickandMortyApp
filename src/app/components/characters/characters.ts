import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../../services/characters';
import { Character } from './character.interface';
import { CharacterComponent } from '../character/character';
import { UppercaseDirective } from '../../directives/uppercase.directive';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, CharacterComponent, UppercaseDirective],
  templateUrl: './characters.html',
  styleUrl: './characters.scss'
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  selectedCharacter?: Character;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.results;
      },
      error: (err) => console.error('Error al obtener personajes:', err)
    });
  }

  verDetalle(character: Character) {
    this.selectedCharacter = character;
  }
}

