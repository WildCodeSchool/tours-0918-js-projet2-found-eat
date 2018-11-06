import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/login.service';
import { ProductService } from '../common/product.service';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
	
	isCollapsed: boolean;
	constructor(private loginService: LoginService, public productService: ProductService) {
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

remove(product, index){
// 	if (localStorage['product1']){
// 		localStorage.removeItem('product1');
// 	}
// else if(localStorage['product2']){
// 		localStorage.removeItem('product2');
// 	}

const productOne = JSON.parse(localStorage['product1']);

if (product.id == productOne.id) {
		localStorage.removeItem('product1');
} else {
	localStorage.removeItem('product2');
}
this.productService.basketProducts.splice(index, 1);

}	
}
