import { TestBed } from '@angular/core/testing';

import { SubHeaderServiceService } from './sub-header-service.service';

describe('SubHeaderServiceService', () => {
  let service: SubHeaderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubHeaderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
