import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images: any[];

  constructor() { }

  ngOnInit() {

    this.images = [{
      name: 'Healthy Food',
      src: 'http://www.40dayreset.com/wp-content/uploads/2015/11/flavinoids-for-healthy-hear-1200x600.jpg',
      description: 'Come and see our variety of Healthy Foods',
    },
    {
      name: 'Strawberry',
      src: 'https://bodycomplete.co.uk/wp-content/uploads/2017/04/3697-Slogans-On-Healthy-Food-1200x600.jpg',
      description: 'Strawberry for one, Strawberries for all',
    },
    {
      name: 'Healthy Meals',
      src: 'https://www.n1motion.com/wp-content/uploads/2018/08/shutterstock_475214962-2-1200x600.jpg',
      description: 'All you need for Healthy meals'
    }
    ];
  }
}
