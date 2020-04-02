import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

user: User;

  //constructor: An object or method that runs automatically when your component is initialized.
  constructor() { 
    
  }


  //ngOnInit" used for Ajax/service calls
  // common standard to use ngOnInit to initialize instead of constructor
  ngOnInit() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'Salt Lake City',
        state: 'UT'
      }
    }
  }

}

