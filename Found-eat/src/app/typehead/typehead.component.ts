import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ProductService } from '../common/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-typehead',
  templateUrl: 'typehead.component.html',
})

export class TypeheadComponent implements OnInit {

  products: any[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.products = this.productService.getProductsNames();
  }

      /**
   * redirige vers la page produit
   */
  getProduct(input) {
    const inputValue = input.value;
    this.router.navigate([`produit/${inputValue}`]);
  }

      /**
   * recherche
   */
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.products.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
