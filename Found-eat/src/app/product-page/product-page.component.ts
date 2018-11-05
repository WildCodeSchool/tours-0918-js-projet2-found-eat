import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../common/product.service';

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

	product: any;

	constructor(private route: ActivatedRoute, private productService : ProductService) { }

	ngOnInit() {
		this.route.params.subscribe(data => {
			const productName = this.route.snapshot.params['name'];
			for (const product of this.productService.products) {
				if (productName === product.productName) {
					this.product = product;
					window.scrollTo(0, 0);
					console.log(this.product);
				}
			}
		});
	}



}
