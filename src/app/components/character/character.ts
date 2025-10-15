import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../characters/character.interface';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.html',
  styleUrl: './character.scss'
})
export class CharacterComponent {
  @Input() character!: Character;
  @Output() cerrar = new EventEmitter<void>();

  cerrarDetalle() {
    this.cerrar.emit();
  }
}

