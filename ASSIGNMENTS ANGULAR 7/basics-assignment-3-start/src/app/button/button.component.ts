import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  showDetails: string = '';
  btnTextShow: string = 'Display Details';
  btnTextHide: string = "Hide Details";
  btnText: string = this.btnTextShow;
  // array = true;
  
  arrCreated = false;
  log = '';
  logs: Array<string>;
  btnclicked = false;
  
  

  constructor() { }

  ngOnInit() {
    this.logs = new Array<string>();
  }

  toggleDetails() {
    if(!this.showDetails && this.btnTextShow) {
      this.showDetails = 'The details are currently unavailable';
      this.btnText = this.btnTextHide;
    } else{
      this.showDetails = '';
      this.btnText = this.btnTextShow;
      
    }

  }

  onClick() {
    if(!this.btnclicked) {
      let click = this.logs.length;
      this.log = 'button clicked ' + `${click}`;
      this.logs.push(this.log);
      
    }
    
  } 

}