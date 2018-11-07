import { Component, OnInit } from '@angular/core';
import { SlideimageService } from '../common/slideimage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slideshow-update',
  templateUrl: './slideshow-update.component.html',
  styleUrls: ['./slideshow-update.component.css']
})
export class SlideshowUpdateComponent implements OnInit {

  images: any[];

  constructor(private service: SlideimageService, private modalService: NgbModal) { }

  ngOnInit() {
    this.images = this.service.images;
  }

  update() {
    this.service.update();
  }

  // open of modal //
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
