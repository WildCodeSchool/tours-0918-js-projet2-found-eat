import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(this.name);
    console.log(form);
  }

}
