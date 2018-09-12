import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
      selector: 'app-user',
      templateUrl: './user.component.html',
      styleUrls: ['./user.component.css'],
})



export class UserComponent implements OnInit {
      //Properties
      user: User;

      //Methods
      constructor() {  
           
      }

      ngOnInit() {
            this.user = {
                  firstName: 'Eduardo',
                  lastName: 'Quintana',
                  age: 29,
                  address: {
                        street: '3008 Lake Meadow Dr.',
                        city: 'West Valley City',
                        state: "UT"
                   }
            }
      }

}



