import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

// declare user model
model: any = {}

constructor() { }

ngOnInit() {
  // init property model
  this.model = new this.model();
}

/**
 * submit form
 */
onSubmit() {
  console.log(this.model);

  }
}
