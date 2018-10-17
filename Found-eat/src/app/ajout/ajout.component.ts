import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  val: string;
  ene: string;
  lip: string;
  ac: string;
  glu: string;
  sug: string;
  fa: string;
  pr: string;
  se: string;
  so: string;
  kil: string;
  inge: string;
  nom: string;
  img: any;
url = '';
onSelecfile(event) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event) => {
      this.url = event.target.result;
    }
  }
}


  constructor() { }

  ngOnInit() {
    this.val = '';
  }

}
