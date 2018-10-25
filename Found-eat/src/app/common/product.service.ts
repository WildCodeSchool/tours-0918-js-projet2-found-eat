import { NutritionalValue } from './nutritional-value';
import { Product } from './product';
import productsStub from '../services/products.list';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];

  constructor() {

    if (!localStorage.products) {

      this.products = productsStub;
      this.saveToLocalStorage(this.products);

    } else {

      const data = JSON.parse(localStorage.products);
      // this.products = data;

      this.products = data.map(x => {

        const product = new Product();


        // product.Nutritionalvalue = x.Nutritionalvalue;
        product.id = x.id;
        product.productName = x.product_name;
        product.brand = x.brand;
        product.quantity = x.quantity;
        product.packaging = x.packaging;
        product.categorie = x.catégorie;
        product.labels = x.labels;
        product.country = x.country;
        product.ingredient = x.ingredient;
        product.allergenes = x.allergenes;
        product.nova = x.nova;
        product.nutriscore = x.nutriscore;
        product.keywords = x.keywords;

        const nutr = new NutritionalValue();


        nutr.energy = x.energy;
        nutr.lipides = x.lipides;
        nutr.saturatedFat = x.saturated_fat;
        nutr.glucides = x.glucides;
        nutr.sugar = x.sugar;
        nutr.fibresAlimentaires = x.fibres_alimentaires;
        nutr.proteines = x.proteines;
        nutr.salt = x.salt;
        nutr.sodium = x.sodium;

        product.nutritional_value = nutr;
        product.image = x.image;
        return product;
      });

    }
  }

  /**
   * Retourne une liste de produit
   */
  get(): Product[] {
    return this.products;
  }

  /**
   * Ajoute un nouveau produit
   * @param product
   */
  add(product: Product) {
    console.log('b');
    product.id = this.products.length.toString();
    this.products.push(product);
    this.saveToLocalStorage(this.products);

  }

  // delete(product) {
  //   const index = this.products.findIndex(x => x.id === Product.id);
  //   this.products.splice(index, 1);
  //   this.saveToLocalStorage(this.products);
  // }

  /**
   * parse un objet en string et le sauvegarde dans le local storage
   * @param products
   */
  saveToLocalStorage(products) {
    const data = JSON.stringify(products);
    localStorage.setItem('products', data);
  }
}
