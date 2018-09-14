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
    currentClasses = {};
    currentStyles = {};

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
          image: 'https://picsum.photos/600/600/?image=67',
          isActive: true

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
          image: 'https://picsum.photos/600/600/?image=19',
          isActive: false

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
          image: 'https://picsum.photos/600/600/?image=21',
          isActive: true

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
          image: 'https://picsum.photos/600/600/?image=11',
          isActive: false

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
          image: 'https://picsum.photos/600/600/?image=30',
          isActive: true

        }

      ];

      this.loaded = true;
      

      // this.addUser({
      //     firstName: 'Jacob',
      //     lastName: 'Johnson',
         
      // });

      this.setCurrentClasses(); 
      this.setCurrentStyles();
    }

    addUser(user: User) {
      this.users.push(user);
    }

    setCurrentClasses() {
      this.currentClasses = {
        'btn-success' : this.enableAdd,
        'big-text' : this.showExtended
      }
    }

    setCurrentStyles() {
      this.currentStyles = {
        'padding-top' : this.showExtended ? '0' : '40px',
        'font-size': this.showExtended ? '' : '30px'
      }
    }

}
