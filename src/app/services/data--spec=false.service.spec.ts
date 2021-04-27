import { TestBed } from '@angular/core/testing';

import { DataSpec=falseService } from './data--spec=false.service';

describe('DataSpec=falseService', () => {
  let service: DataSpec=falseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSpec=falseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
