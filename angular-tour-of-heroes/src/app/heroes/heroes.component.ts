import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { Hero } from '../hero/hero.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero:  Hero = {
    id: 1,
    name: 'Windtorm'
  }
  constructor() { }

  ngOnInit() {
  }

}
