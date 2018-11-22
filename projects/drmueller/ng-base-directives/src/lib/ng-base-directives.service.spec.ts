import { TestBed, inject } from '@angular/core/testing';

import { NgBaseDirectivesService } from './ng-base-directives.service';

describe('NgBaseDirectivesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgBaseDirectivesService]
    });
  });

  it('should be created', inject([NgBaseDirectivesService], (service: NgBaseDirectivesService) => {
    expect(service).toBeTruthy();
  }));
});
