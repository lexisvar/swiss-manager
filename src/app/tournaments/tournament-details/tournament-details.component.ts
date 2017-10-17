import { Component, OnInit } from '@angular/core';
import { TournamentDetailsModel } from './tournament-details-model';
import { TournamentDetailsService } from '../../services/tournament-details.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.scss'],
  providers: [
    TournamentDetailsService
  ]
})
export class TournamentDetailsComponent implements OnInit {
  
  tournament: TournamentDetailsModel;

  constructor(
    private tournamentDetailsService: TournamentDetailsService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = +params['id'];
      this.tournamentDetailsService.getDetails(id).then((tournament: TournamentDetailsModel) => {
        this.tournament = tournament;
      });
    })
    
  }
}
