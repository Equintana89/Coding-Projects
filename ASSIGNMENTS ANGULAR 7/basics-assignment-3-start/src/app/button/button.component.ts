import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  showSecret = false;
  log = [];


  // showDetails: string = '';
  // btnTextShow: string = 'Display Details';
  // btnTextHide: string = "Hide Details";
  // btnText: string = this.btnTextShow;
  // array = true;
  
  // arrCreated = false;
  // log: any;
  // logs: Array<any>;
  // btnclicked = false;
  
  

  constructor() { }

  ngOnInit() {
    // this.logs = new Array<any>();
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());

  }

  // toggleDetails() {
  //   if(!this.showDetails && this.btnTextShow) {
  //     this.showDetails = 'The details are currently unavailable';
  //     this.btnText = this.btnTextHide;
  //   } else{
  //     this.showDetails = '';
  //     this.btnText = this.btnTextShow;
      
  //   }

  // }

  // onClick() {
  //   if(!this.btnclicked) {
  //     let click = this.logs.length;
  //     this.log = 'button clicked ' + `${click}`;
  //     this.logs.push(this.log);
      
  //   }
    
  } 

  // getColor() {
  //   if(this.log.length >= 5) {
  //     return this.log = 'blue';
  //   } else {
  //     return this.log = 'green';
  //   }
  // }

