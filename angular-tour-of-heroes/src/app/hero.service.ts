import { Injectable } from '@angular/core';
import { Hero } from "./hero/hero.component";
import { HEROES } from './mock-heroes/mock-heroes.component';


@Injectable({
  providedIn: 'root'
})

export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }
}


