
import { ProductService } from './../common/product.service';
import { Product } from './../common/product';
import { Component, OnInit } from '@angular/core';
import { NutritionalValue } from '../common/nutritional-value';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  image: any;
  url: any = '';
  product: Product;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.product = new Product();
    this.product.nutritional_value = new NutritionalValue();
  }

  // onSelecfile(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);

  //     reader.onload = (event) => {
  //       this.url = event.target.result;

  //     };
  //   }
  // }

  /**
   * ajoute le produit
   */
  add() {
    console.log('a');
    this.service.add(this.product);
    this.product = new Product();

  }


}
