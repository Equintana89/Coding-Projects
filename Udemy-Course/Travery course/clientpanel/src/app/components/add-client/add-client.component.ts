import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';


import { Client } from '../../models/Clients';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnAdd: boolean = this.settingsService.getSettings().disableBalanceOnAdd;

  @ViewChild('clientForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private ClientService: ClientService,
    private router: Router,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
  }
  

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    if(this.disableBalanceOnAdd) {
      value.balance = 0;
    }

    if(!valid){
      //show error
      this.flashMessage.show('Please fill out form correctly', {cssClass: 'alert-danger', timeout: 4000});
    } else {
      //Add new client
      this.ClientService.newClient(value);
      //Show message
      this.flashMessage.show('Client added', {cssClass: 'alert-success', timeout: 4000});
      // Redirect to dash
      this.router.navigate(['/']);
    }
  }
  
}
