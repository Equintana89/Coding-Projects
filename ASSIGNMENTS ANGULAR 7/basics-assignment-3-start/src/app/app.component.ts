import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails: string = '';
  btnTextShow: string = 'Display Details';
  btnTextHide: string = "Hide Details";
  btnText: string = this.btnTextShow;
  


  toggleDetails(): void {
    if(!this.showDetails && this.btnTextShow) {
      this.showDetails = 'The details are currently unavailable';
      this.btnText = this.btnTextHide;
    } else{
      this.showDetails = '';
      this.btnText = this.btnTextShow;
      
    }
  }

}

