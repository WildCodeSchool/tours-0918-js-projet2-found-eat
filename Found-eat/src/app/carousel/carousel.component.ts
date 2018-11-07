import { Component, OnInit } from '@angular/core';
import { SlideimageService } from '../common/slideimage.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images: any[];

  constructor(private service: SlideimageService) { }

  ngOnInit() {

    this.images = this.service.images;
  }
}
