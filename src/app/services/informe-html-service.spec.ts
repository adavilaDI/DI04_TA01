import { TestBed } from '@angular/core/testing';

import { InformeHtmlService } from './informe-html-service';

describe('InformeHtmlService', () => {
  let service: InformeHtmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeHtmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
