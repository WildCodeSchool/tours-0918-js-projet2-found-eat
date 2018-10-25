import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  products: any[];

  constructor(private service: NgbModal) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.products = JSON.parse(localStorage['products']);
    this.products = this.products.slice(0, 4);
  }

  openMedia(content: any) {
    this.service.open(content).result

      .then(resultat => {
        console.log(resultat);
      })

      .catch(error => {
        console.log(error);
      });
  }
}
