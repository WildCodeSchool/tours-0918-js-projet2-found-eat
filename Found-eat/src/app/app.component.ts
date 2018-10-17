import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	title = 'Found-eat';
	products: any;

	constructor(public productsService: ProductsService) {}

	ngOnInit() {
		this.products = this.productsService.products;
		localStorage.setItem('products', JSON.stringify(this.products));
	}
}
