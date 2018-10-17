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
  constructor() { }

  ngOnInit() {
    this.val = '';
  }

}
