import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideimageService {
  
  images: any[];

  constructor() {

    this.images= [{
      name: 'Coca-Cola',
      src: 'https://cdn6.omidoo.com/sites/default/files/imagecache/1200x600/images/headline/201507/shutterstock291292739.jpg',
      description: 'Réduction du sucre sur les produits Coca-Cola ',
    },
    {
      name: 'Orange',
      src: 'https://i2.wp.com/soulscape.asia/wp-content/uploads/2017/02/Juicing-Recipes-1200.jpg?resize=1200%2C600&ssl=1',
      description: 'Du vrai ou du faux?',
    },
    {
      name: 'Des repas équilibres',
      src: 'https://www.n1motion.com/wp-content/uploads/2018/08/shutterstock_475214962-2-1200x600.jpg',
      description: 'Découvrez notre sélection de produit sains!'
    }
    ]};
}
