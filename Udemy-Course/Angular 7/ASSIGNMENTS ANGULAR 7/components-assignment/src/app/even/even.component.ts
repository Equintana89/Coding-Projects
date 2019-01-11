import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  evenNumber = ['NUMBER - Even']
  hidden = true;
  number = 0;
  @ContentChild('contentParagraph') paragraph: ElementRef;


  constructor() { }

  ngOnInit() {
  }

  displayContent() {
    if(this.number % 2) {
      this.evenNumber[0];
      this.hidden = false;
    }

    }
  }


