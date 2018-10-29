import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  model: any

  constructor() { }

  ngOnInit() {
  }

      /**
   * console.log du formulaire
   */
  onSubmit(form) {
    console.log(this.name);
    console.log(form);
  }

}
