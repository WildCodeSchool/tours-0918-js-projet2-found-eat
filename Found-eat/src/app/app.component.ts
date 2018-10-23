import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.list';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	title = 'Found-eat';

	constructor(public productliste: ProductsService) {}

	ngOnInit() {
		this.productliste.setLocalStorage();
	}
}
