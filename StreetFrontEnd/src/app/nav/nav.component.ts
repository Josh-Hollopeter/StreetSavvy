import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
   private router:Router
  ) { }

  ngOnInit(): void {
  }
  logout(){

    localStorage.clear();
    this.router.navigateByUrl("login")

  }
}
