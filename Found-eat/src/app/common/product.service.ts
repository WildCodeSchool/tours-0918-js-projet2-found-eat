import { NutritionalValue } from './nutritional-value';
import { Product } from './product';
import productsStub from '../common/products.list';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  productToModify: any;
  basketProducts: Product[] = [];

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

    } else if (localStorage['product1'] && localStorage['product2']) {

      this.basketProducts.push(JSON.parse(localStorage['product1']),JSON.parse(localStorage['product2']));
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
     * apelle d'un id
     */
  getbyId(product) {
    this.productToModify = product;

  }

  /**
   * Ajoute un nouveau produit
   * @param product
   */
  add(product: Product) {
    if (!product.id) {
      product.id = this.products.length.toString();
      this.products.push(product);
      this.saveToLocalStorage(this.products);
    } else {
      // const index = this.products.find[productName];
      // this.products[index] = product;

      this.saveToLocalStorage(this.products);
   }
  }




  /**
   * liste les produits
   */
  getProductsNames() {
    let list = [];
    for (let i = 0; i < this.products.length; i++) {
      list.push(this.products[i].productName);
    }
    return list;
  }

  /**
 * liste les catégories
 */
  getCategories() {
    let list = [];
    for (let i = 0; i < this.products.length; i++) {
      list = list.concat(list, this.products[i].categorie);
      list = Array.from(new Set(list));
    }

    return list;
  }

  /**
   * mettre un produit dans le comparateur
   */
  getItem(value) {

    if (localStorage['product1'] === JSON.stringify(value) || localStorage['product2'] === JSON.stringify(value)) {
      alert('Same product selected');
    } else if (!localStorage['product1']) {
      localStorage.setItem('product1', JSON.stringify(value));
      this.basketProducts.push(JSON.parse(localStorage.getItem('product1')));
    } else if (localStorage['product1'] && localStorage['product2']) {
      alert('Comparator already set');
    } else if (!localStorage['product2']) {
      localStorage.setItem('product2', JSON.stringify(value));
      this.basketProducts.push(JSON.parse(localStorage.getItem('product2')));
    }
  }

  /**
   * Pour savoir si le produit n'est pas dans le comparateur
   */
  isSet(value) {
    if (localStorage['product1'] === JSON.stringify(value) || localStorage['product2'] === JSON.stringify(value)) {
      return true;
    } else {
      return false;
    }
  }

  /**
 * Vérifie si le comparateur est rempli
 */
  isComparatorSet() {
    if (localStorage['product1'] && localStorage['product2']) {
      return true;
    } else {
      return false;
    }
  }


  /**
   * Affiche les 4 derniers articles
   */
  fourLasts() {
    return this.products.slice(this.products.length - 4, this.products.length).reverse();
  }

  /**
     * Supprimer un article
     * @param product
     */

  delete(product) {
    const index = this.products.findIndex(x => x.id === product.id);
    console.log(index);
    this.products.splice(index, 1);
    this.saveToLocalStorage(this.products);
  }

  /**
   * parse un objet en string et le sauvegarde dans le local storage
   * @param products
   */
  saveToLocalStorage(products) {
    const data = JSON.stringify(products);
    localStorage.setItem('products', data);
  }
}
