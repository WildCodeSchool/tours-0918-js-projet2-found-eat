import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowUpdateComponent } from './slideshow-update.component';

describe('SlideshowUpdateComponent', () => {
  let component: SlideshowUpdateComponent;
  let fixture: ComponentFixture<SlideshowUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
