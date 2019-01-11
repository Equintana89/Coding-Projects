import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  number = 0;
  hidden = true;
  counter;
  evenNumber = 'NUMBER - Even';

  constructor() { }

  ngOnInit() {
  }

  gameStart() {
     this.counter = setInterval(()=> {
      this.number++;
    }, 1000);

    if(this.number !% 2) {
      this.evenNumber;
    }
          
  }

  gameStop() {
    clearInterval(this.counter);
    this.number = 0; 
  }



}
