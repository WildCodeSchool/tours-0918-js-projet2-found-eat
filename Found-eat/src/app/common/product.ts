import { NutritionalValue } from './nutritional-value';

export class Product {

  id: string;
  productName: string;
  brand: string;
  quantity: string;
  nutritional_value: NutritionalValue;
  packaging: string[];
  categorie: string[];
  labels: string[];
  country: string;
  ingredients: string;
  allergenes: string[];
  nova: number;
  nutriscore: string;
  image: string;
  keywords: string[];

}
