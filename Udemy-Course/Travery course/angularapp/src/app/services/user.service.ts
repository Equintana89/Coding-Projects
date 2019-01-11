import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
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
   }

   getData() {
     this.data = new Observable(observer => {
       setTimeout(() => {
         observer.next(1);
       }, 1000);

       setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
     });

     return this.data;
   }

   getUsers(): Observable<User[]> {
     return of(this.users);
   }

   addUser(user: User) {
     this.users.unshift(user);
   }
}
