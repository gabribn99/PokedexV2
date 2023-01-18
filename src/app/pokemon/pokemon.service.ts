import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../entity/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private endPoint: string = 'http://localhost:8080/api/v2/pokedex/pokemon/'
  constructor(private http: HttpClient) { }

  getPokemon(): Observable<Pokemon[]> {
    return this.http.get(this.endPoint).pipe(
      map(response => response as Pokemon[])
    );
  }
}
