import { TestBed } from '@angular/core/testing';

import { GsPlayerService } from './gs-player.service';

describe('GsPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsPlayerService = TestBed.get(GsPlayerService);
    expect(service).toBeTruthy();
  });
});
