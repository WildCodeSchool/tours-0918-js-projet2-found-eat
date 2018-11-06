import { Component, OnInit } from '@angular/core';
import { SlideimageService } from '../common/slideimage.service';

@Component({
  selector: 'app-slideshow-update',
  templateUrl: './slideshow-update.component.html',
  styleUrls: ['./slideshow-update.component.css']
})
export class SlideshowUpdateComponent implements OnInit {

  images: any[];

  constructor(private service: SlideimageService) { }

  ngOnInit() {
  this.images = this.service.images;
  }

  update() {
    this.service.update();
  }
  
}
