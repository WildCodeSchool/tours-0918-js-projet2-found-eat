import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../common/login.service';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
	isCollapsed: boolean;

	constructor(private router: Router, private loginService: LoginService) {
		this.isCollapsed = false;
	}

	ngOnInit() {
	}

	onCollapse($event) {
		this.isCollapsed = $event;
	}

	logout() {
		this.loginService.logout();
	}

}
