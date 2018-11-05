import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/login.service';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
	isCollapsed: boolean;

	constructor(private loginService: LoginService) {
		this.isCollapsed = false;
	}

	ngOnInit() {
	}

	/**
   * ferme la sidebar
   */
	onCollapse($event) {
		this.isCollapsed = $event;
	}

	/**
   * Déconnecte l'utilisateur
   */
 	logout() {
		this.loginService.logout();
	}

}
