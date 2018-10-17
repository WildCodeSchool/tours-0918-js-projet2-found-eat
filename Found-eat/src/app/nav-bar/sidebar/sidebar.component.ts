import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

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


  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) {

    this.isCollapsed = true;
  }

  ngOnInit() {
    this.isAuth = false;
  }

  collapse() {
    this.notifyCollapse.emit(false);
  }



}



