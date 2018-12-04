import { Component, OnInit } from '@angular/core';
import { MinLengthValidator } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  // array = ['1'];
  // arrCreated = false;
  // num = 0;
  logs: any = [1,2,3,4,5,6,7,8,9,10];
  

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if(this.onClick) {
      return this.getRandomNum();
    }
  }
  
  getRandomNum() {

    
    
      Math.floor(Math.random() * 20);

    
  }
    
  }


