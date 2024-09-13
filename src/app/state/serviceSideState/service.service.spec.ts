import { TestBed } from '@angular/core/testing';

import { ServiceState } from './service.service';

describe('ServiceService', () => {
  let service: ServiceState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
