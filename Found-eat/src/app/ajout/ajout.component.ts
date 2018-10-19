
import { ProductService } from './../common/product.service';
import { Product } from './../common/product';
import { Component, OnInit,} from '@angular/core';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  image: any;
  url = '';
  product: Product;

  constructor( private service: ProductService ) {}

  ngOnInit() {
    this.product = new Product();
  }

  onSelecfile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target.result;

      }
    }
  }

  add() {
    console.log('a');
    this.service.add(this.product);
    this.product = new Product();

  }


}
