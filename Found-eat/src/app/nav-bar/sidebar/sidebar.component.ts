import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../common/login.service';
import { ProductService } from '../../common/product.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  isCollapsed: boolean;
  @Input()
  isAuth: boolean;

  @Output()
  notifyCollapse: EventEmitter<boolean> = new EventEmitter();


  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService, public productService: ProductService) {

    this.isCollapsed = true;
  }

  ngOnInit() {
    this.isAuth = false;
  }

  /**
* ferme la sidebar
*/
  collapse() {
    this.notifyCollapse.emit(false);
  }


  remove(product) {
    // 	if (localStorage['product1']){
    // 		localStorage.removeItem('product1');
    // 	}
    // else if(localStorage['product2']){
    // 		localStorage.removeItem('product2');
    // 	}

    this.productService.removeItem(product);
  }
}



