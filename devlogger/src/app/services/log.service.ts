import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  
  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:53')},
      {id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 2:54:53')},
      {id: '1', text: 'Added logs component', date: new Date('12/26/2017 4:23:53')}
    ]
   }

   getLogs() {
     return this.logs;
   }
}
