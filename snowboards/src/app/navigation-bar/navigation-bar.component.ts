import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goToAbout() {
    this.router.navigate(['pages/about']);
  }

  goHome() {
    this.router.navigate(["pages/home"]);
  }
}
