import { TestBed } from '@angular/core/testing';
import { BasicAuthService } from './basic-auth.service';

describe('BasicAuthService', () => {
  let service: BasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
