/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PilotService } from './pilot.service';

describe('Service: Pilot', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PilotService]
    });
  });

  it('should ...', inject([PilotService], (service: PilotService) => {
    expect(service).toBeTruthy();
  }));
});
