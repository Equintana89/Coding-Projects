import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '123 Main St',
            city: 'Salt Lake City',
            state: 'UT'
          }
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '2020 Main St',
            city: 'Salt Lake City',
            state: 'UT'
          }
        },
        {
          firstName: 'Jeff',
          lastName: 'Smith',
          age: 29,
          address: {
            street: '1989 Main St',
            city: 'Miami',
            state: 'FL'
          }
        }
      ];

      this.loaded = true;
 

    this.addUser({
      firstName: 'Harry',
        lastName: 'Smith',
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }

}