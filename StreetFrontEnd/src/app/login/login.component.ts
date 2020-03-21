import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser:User = new User();

  constructor(private authService: AuthService, private router:Router) { }

  login(){
    this.authService.login(this.newUser.username, this.newUser.password).subscribe(
      success => {
          this.router.navigateByUrl('/allstock');
      },
      fail => {
        console.error('Error logging in');

      }
    )

  }


  ngOnInit(): void {
  }

}
