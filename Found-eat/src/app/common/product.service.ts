import { NutritionalValue } from './nutritional-value';
import { Product } from './product';
import productsStub from '../common/products.list';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];

  constructor() {

    if (!localStorage.products) {

      this.products = productsStub;

      this.products = productsStub.map(x => {

        const product = new Product();


        product.id = x.id;
        product.productName = x.product_name;
        product.brand = x.brand;
        product.quantity = x.quantity;
        product.packaging = x.packaging;
        product.categorie = x.categories;
        product.labels = x.labels;
        product.country = x.country;
        product.ingredients = x.ingredients;
        product.allergenes = x.allergenes;
        product.nova = x.nova;
        product.nutriscore = x.nutriscore;
        product.keywords = x.keywords;

        const nutr = new NutritionalValue();


        nutr.energy = x.nutritional_value.energy;
        nutr.lipides = x.nutritional_value.lipides;
        nutr.saturatedFat = x.nutritional_value.saturated_fat;
        nutr.glucides = x.nutritional_value.glucides;
        nutr.sugar = x.nutritional_value.sugar;
        nutr.fibresAlimentaires = x.nutritional_value.fibres_alimentaires;
        nutr.proteines = x.nutritional_value.proteines;
        nutr.salt = x.nutritional_value.salt;
        nutr.sodium = x.nutritional_value.sodium;

        product.nutritional_value = nutr;
        product.image = x.image;
        return product;
      });

      this.saveToLocalStorage(this.products);

    } else {

      this.products = JSON.parse(localStorage.products);

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

  getProductsNames() {
    let list = [];
    for (let i = 0; i < this.products.length; i++) {
      list.push(this.products[i].productName);
    }
    return list;
  }

  getCategories() {
    let list = [];
    for (let i = 0; i < this.products.length; i++) {
      list = list.concat(list, this.products[i].categorie);
      list = Array.from(new Set(list));
    }

    return list;
  }

  getItem(value) {

    if (localStorage['product1'] === JSON.stringify(value) || localStorage['product2'] === JSON.stringify(value)) {
      alert('Same product selected');
    } else if (!localStorage['product1']) {
      localStorage.setItem('product1', JSON.stringify(value));
    } else if (localStorage['product1'] && localStorage['product2']) {
      alert('Comparator already set');
    } else if (!localStorage['product2']) {
      localStorage.setItem('product2', JSON.stringify(value));
    }
  }

  isSet(value) {
    if (localStorage['product1'] === JSON.stringify(value) || localStorage['product2'] === JSON.stringify(value)) {
      return true;
    } else {
      return false;
    }
  }

  isComparatorSet() {
    if (localStorage['product1'] && localStorage['product2']) {
      return true;
    } else {
      return false;
    }
  }

  fourLasts() {
    return this.products.slice(this.products.length - 4, this.products.length).reverse();
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
