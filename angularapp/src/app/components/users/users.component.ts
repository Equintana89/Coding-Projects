import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    user: User = {
      firstName: '',
      lastName: '',
      email: ''
    }
    users: User[];
    showExtended: boolean = true;
    loaded: boolean = false;
    enableAdd: boolean = true;
    showUserForm: boolean = false;
    errors: any;

  constructor() { }

  ngOnInit() {
    
      this.users = [
        {
          firstName: 'Eduardo',
          lastName: 'Quintana',
          email: '3dd1389@gmail.com',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true

        },

        {
          firstName: 'Abish',
          lastName: 'Quintana',
          email: 'abishdelacruz@gmail.com',
          isActive: false,
          registered: new Date('11/22/2018 05:20:00'),
          hide: true

        },

        {
          firstName: 'Lilian',
          lastName: 'Quintana',
          email: 'lilian@gmail.com',
          isActive: true,
          registered: new Date('07/30/2007 07:36:00'),
          hide: true

        },


        {
          firstName: 'Isai',
          lastName: 'Quintana',
          email: 'isai@gmail.com',
          isActive: false,
          registered: new Date('03/08/2011 09:30:00'),
          hide: true

        },

        {
          firstName: 'Lena',
          lastName: 'Quintana',
          email: 'lena@gmail.com',
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

  //   addUser() {
  //     this.user.isActive = true;
  //     this.user.registered = new Date();

  //     this.users.unshift(this.user);

  //     this.user = {
  //       firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }

    onSubmit(e) {
      console.log(123);

      e.preventDefault();
    }
}
