import { TestBed } from '@angular/core/testing';

import { ChooseLangService } from './choose-lang.service';

describe('ChooseLangService', () => {
  let service: ChooseLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
