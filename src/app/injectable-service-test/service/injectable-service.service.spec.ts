import { TestBed } from '@angular/core/testing';

import { InjectableServiceService } from './injectable-service.service';

describe('InjectableServiceService', () => {
  let service: InjectableServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectableServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
