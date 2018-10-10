import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbAdminComponent } from './navb-admin.component';

describe('NavbAdminComponent', () => {
  let component: NavbAdminComponent;
  let fixture: ComponentFixture<NavbAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
