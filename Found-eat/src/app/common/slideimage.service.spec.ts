import { TestBed } from '@angular/core/testing';

import { SlideimageService } from './slideimage.service';

describe('SlideimageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlideimageService = TestBed.get(SlideimageService);
    expect(service).toBeTruthy();
  });
});
