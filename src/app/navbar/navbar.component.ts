import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isIn = false;

  toggleState() {
      this.isIn = !this.isIn;
  }

  constructor() { }

  ngOnInit() {
  }

}
