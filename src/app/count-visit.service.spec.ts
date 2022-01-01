import { TestBed } from '@angular/core/testing';

import { CountVisitService } from './count-visit.service';

describe('CountVisitService', () => {
  let service: CountVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
