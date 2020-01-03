import { TestBed } from '@angular/core/testing';

import { MyutilserviceService } from './myutilservice.service';

describe('MyutilserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyutilserviceService = TestBed.get(MyutilserviceService);
    expect(service).toBeTruthy();
  });
});
