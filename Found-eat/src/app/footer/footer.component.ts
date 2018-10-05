import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
images:string[];
  constructor() { }

  ngOnInit() {
    this.images = [1,2,3].map(()=>`https://picsum.photos/1600/500?random&t=${Math.random()}`);  }

}
