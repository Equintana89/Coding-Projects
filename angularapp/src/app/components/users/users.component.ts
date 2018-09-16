import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: User[];
    showExtended: boolean = true;
    loaded: boolean = false;
    enableAdd: boolean = true;
    

  constructor() { }

  ngOnInit() {
    
      this.users = [
        {
          firstName: 'Eduardo',
          lastName: 'Quintana',
          age: 29,
          address: {
                street: '3008 Lake Meadow Dr.',
                city: 'West Valley City',
                state: "UT"
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true

        },

        {
          firstName: 'Abish',
          lastName: 'Quintana',
          age: 30,
          address: {
                street: '3008 Lake Meadow Dr.',
                city: 'West Valley City',
                state: "UT"
          },
          isActive: false,
          registered: new Date('11/22/2018 05:20:00'),
          hide: true

        },

        {
          firstName: 'Lilian',
          lastName: 'Quintana',
          age: 5,
          address: {
                street: '3008 Lake Meadow Dr.',
                city: 'West Valley City',
                state: "UT"
          },
          isActive: true,
          registered: new Date('07/30/2007 07:36:00'),
          hide: true

        },


        {
          firstName: 'Isai',
          lastName: 'Quintana',
          age: 3,
          address: {
                street: '3008 Lake Meadow Dr.',
                city: 'West Valley City',
                state: "UT"
          },
          isActive: false,
          registered: new Date('03/08/2011 09:30:00'),
          hide: true

        },

        {
          firstName: 'Lena',
          lastName: 'Quintana',
          age: 1,
          address: {
                street: '3008 Lake Meadow Dr.',
                city: 'West Valley City',
                state: "UT"
          },
          isActive: true,
          registered: new Date('02/09/2018 08:54:00'),
          hide: true

        }

      ];

      this.loaded = true;
      

      // this.addUser({
      //     firstName: 'Jacob',
      //     lastName: 'Johnson',
         
      // });

      
    }

    addUser(user: User) {
      this.users.push(user);
    }

  
  //  toggleHide(user) {
  //    user.hide = !user.hide; //this line can be added to the html file instead.
  //  }


}
