import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  products: any[];

  constructor(private service: NgbModal, private productService: ProductService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.products = this.productService.fourLasts();
  }

  openMedia(content: any) {
    this.service.open(content).result

      .then(resultat => {
        this.productService.delete(resultat);
        this.products = this.productService.fourLasts();
      })

      .catch(error => {
        console.log(error);
      });
  }
}
