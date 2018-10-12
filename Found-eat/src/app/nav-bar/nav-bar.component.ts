import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
	isCollapsed: boolean;

	constructor(private route: ActivatedRoute, private router: Router) {
		this.isCollapsed = true;
	}

	ngOnInit() {

	}

}
