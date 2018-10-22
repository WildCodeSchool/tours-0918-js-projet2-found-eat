import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

	product: any;

	constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

	ngOnInit() {
		this.route.params.subscribe(data => {
			const productName = this.route.snapshot.params['name'];
			for (const product of this.productsService.products) {
				if (productName === product.product_name) {
					this.product = product;
					window.scrollTo(0, 0);
				}
			}
		});
	}



}
