import { TestBed } from '@angular/core/testing';

import { IsOpenService } from './is-open.service';

describe('IsOpenService', () => {
  let service: IsOpenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsOpenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
