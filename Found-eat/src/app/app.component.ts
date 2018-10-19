import { Component, OnInit } from '@angular/core';
import { Productlist } from './services/products.list';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	title = 'Found-eat';
	products: any;

	constructor(public productliste: Productlist) {}

	ngOnInit() {
		this.products = this.productliste.products;
		localStorage.setItem('products', JSON.stringify(this.products));
	}
}
