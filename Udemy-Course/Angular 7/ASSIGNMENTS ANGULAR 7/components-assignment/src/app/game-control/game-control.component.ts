import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  number = 0;
  counter;

  constructor() { }

  ngOnInit() {
  }

  gameStart() {
     this.counter = setInterval(()=> {
      this.number++;
    }, 1000);
        
  }

  gameStop() {
    clearInterval(this.counter);
    this.number = 0;
    
    
  }

}
