import { TestBed } from '@angular/core/testing';

import { AjaxServicioService } from './ajax-servicio.service';

describe('AjaxServicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjaxServicioService = TestBed.get(AjaxServicioService);
    expect(service).toBeTruthy();
  });
});
