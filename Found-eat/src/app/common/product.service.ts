
import { Product } from './product';
import { Productlist } from '../services/products.list';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];

  constructor() {
    if (!localStorage.Productlist) {
      console.log('if');

      this.products = Product.map(x => {

        const product = new Product();
        product.id = x.id;
        product.valeur = x.valeur;
        product.energie = x.energie;
        product.acide = x.acide;
        product.sucre = x.sucre;
        product.fibre = x.fibre;
        product.proteine = x.proteine;
        product.sel = x.sel;
        product.sodium = x.sodium;
        product.quantite = x.quantite;
        product.ingredient = x.ingredient;
        product.nom = x.nom;
        product.catégorie = x.catégorie;
        product.keywords = x.keywords;

        return product;
      });
      this.saveToLocalStorage(this.products);
      // this.products = [];
    } else {
      console.log('else');

      const data = JSON.parse(localStorage.product);
      this.products = data;



    }
  }


  get(): Product[] {
    return this.products;
  }

  add (product: Product) {
    console.log('b');
    product.id = this.products.length.toString();
    this.products.push(product);
    localStorage.products.push(product);
    // this.saveToLocalStorage(this.products);

  }




  // delete(product) {
  //   const index = this.products.findIndex(x => x.id === Product.id);
  //   this.products.splice(index, 1);
  //   this.saveToLocalStorage(this.products);
  // }




  saveToLocalStorage(products) {
    const data = JSON.stringify(products);
    localStorage.setItem('products', data);
  }
}

