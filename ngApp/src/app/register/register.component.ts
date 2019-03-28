import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor( private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }


  //call the auth service to send data through it to DB
  register() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      //save the token in the browser using localStorage
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['profile'])
      },
      err => console.log(err)
    )
  }

}
