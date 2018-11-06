import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../common/product.service';
import { Product } from './../common/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NutritionalValue } from '../common/nutritional-value';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit, OnDestroy {

  id: any;
  image: any;
  url: any = '';
  product: Product;

  private sub: any;

  constructor(private route: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];


      if (this.id) {
        this.product = this.service.productToModify;

      } else {
        this.product = new Product();
        this.product.nutritional_value = new NutritionalValue();
      }
    });

    }


  ngOnDestroy() {
    this.sub.unsubscribe();
    if (this.service.productToModify) {
      this.service.productToModify = '';
    }
  }



  // pour récupérer une image
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
  add () {

    if (this.service.productToModify) {
       const productIndex = this.service.products.indexOf(this.service.productToModify);
       console.log(productIndex);

      this.service.products.splice(productIndex, 1);
      this.service.products.splice(productIndex, 0, this.product);

      localStorage.setItem('products', JSON.stringify(this.service.products));




    } else {
    this.service.add(this.product);
    this.product = new Product();
   }





  }

}
