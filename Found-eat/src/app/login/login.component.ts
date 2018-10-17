import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	email: string;
	password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }

  login() {
  	if (this.email === 'admin@mail.com' && this.password === 'admin') {
  		this.loginService.login();
      this.router.navigate(['acceuil']);
  	}
  }

}
