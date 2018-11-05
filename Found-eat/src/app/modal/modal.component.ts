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

  constructor(private loginService: LoginService, private productsService: ProductService) { }

  ngOnInit() {
  }

}
