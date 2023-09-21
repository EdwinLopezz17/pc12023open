import { TestBed } from '@angular/core/testing';

import { FullVenueService } from './full-venue.service';

describe('FullVenueServiceService', () => {
  let service: FullVenueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullVenueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
