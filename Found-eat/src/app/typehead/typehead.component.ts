import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-typehead',
  templateUrl: 'typehead.component.html',
})

export class TypeheadComponent implements OnInit {

  products: any[];

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.products = this.productService.getProductsNames();
  }

  getProduct(input) {
    const inputValue = input.value;
    this.router.navigate([`produit/${inputValue}`]);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.products.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
