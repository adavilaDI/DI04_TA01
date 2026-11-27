import { TestBed } from '@angular/core/testing';

import { Informe } from './informe';

describe('Informe', () => {
  let service: Informe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Informe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
