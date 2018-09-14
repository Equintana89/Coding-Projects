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
          image: 'https://picsum.photos/200/300/?image=67'

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
          image: 'https://picsum.photos/600/600/?image=19'

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
          image: 'https://picsum.photos/600/600/?image=21'

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
          image: 'https://picsum.photos/600/600/?image=11'

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
          image: 'https://picsum.photos/600/600/?image=30'

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

}
