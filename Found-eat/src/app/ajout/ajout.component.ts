import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  @Input()
  mediaInput: any;

  @Input()
  modalInput: any;

  constructor() { }

  ngOnInit() {
  }

}
