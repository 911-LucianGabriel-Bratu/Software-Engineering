import { TestBed } from '@angular/core/testing';

import { BookdestinationService } from './bookdestination.service';

describe('BookdestinationService', () => {
  let service: BookdestinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookdestinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
