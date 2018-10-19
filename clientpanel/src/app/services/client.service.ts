import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Client } from '../models/Clients';
import { Observable } from '../../../node_modules/rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(private afs: AngularFirestore) { 
    this.clientsCollection = this.afs.collection('clients', ref => ref.orderBy('lastName', 'asc'));
  }

  getClients(): Observable<Client[]> {
    // Get clients with the id
    this.clients = this.clientsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Client;
        data.id = action.payload.doc.id;
        return data;
      });
    }));

    return this.clients;
  }
}