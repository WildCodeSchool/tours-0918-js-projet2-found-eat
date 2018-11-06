import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../common/login.service';
import {ProductService} from '../common/product.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  mediaInput: any;

  @Input()
  modalInput: any;

  constructor(private loginService: LoginService, public productsService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  delete( mediaInput: any) {
    this.productsService.delete( mediaInput );

  }

  getbyId(mediaInput) {
    this.productsService.getbyId(mediaInput);
    console.log(this.productsService.productToModify);
    this.router.navigate([`product/`, this.productsService.productToModify.productName]);
  }

}
