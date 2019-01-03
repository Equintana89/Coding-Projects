import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  number = 0;

  constructor() { }

  ngOnInit() {
  }

  gameStart() {
    
    setInterval(()=> {
      this.number++;
    }, 1000);
  }

  gameStop() {

  }

}
