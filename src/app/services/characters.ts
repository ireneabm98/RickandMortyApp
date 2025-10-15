import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../components/characters/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<{ results: Character[] }> {
    return this.http.get<{ results: Character[] }>(this.apiUrl);
  }
}


