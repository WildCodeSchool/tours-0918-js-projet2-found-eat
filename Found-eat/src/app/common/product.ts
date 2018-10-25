import { NutritionalValue } from './nutritional-value';

export class Product {

  id: string;
  productName: string;
  brand: string;
  quantity: string;
  nutritional_value: NutritionalValue;
  packaging: string; // array
  categorie: string; // array
  labels: string; // array
  country: string;
  ingredients: string;
  allergenes: string; // array
  nova: number;
  nutriscore: string;
  image: string;
  keywords: string; // array

}
