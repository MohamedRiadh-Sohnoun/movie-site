import { TestBed } from '@angular/core/testing';

import { NavserfService } from './navserf.service';

describe('NavserfService', () => {
  let service: NavserfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavserfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
