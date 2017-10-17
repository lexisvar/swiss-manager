import { TestBed, inject } from '@angular/core/testing';

import { TournamentDetailsService } from './tournament-details.service';

describe('TournamentDetailsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TournamentDetailsService]
    });
  });

  it('should ...', inject([TournamentDetailsService], (service: TournamentDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
