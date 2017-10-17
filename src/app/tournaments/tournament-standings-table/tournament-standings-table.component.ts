import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tournament-standings-table',
  templateUrl: './tournament-standings-table.component.html',
  styleUrls: ['./tournament-standings-table.component.scss']
})
export class TournamentStandingsTableComponent implements OnInit {
  standings: any[];
  @Input() tournamentId: number;
  constructor() { }

  ngOnInit() {
    this.standings = [
      {
        id: 1,
        firstName: "Jasser Mark",
        lastName: "Arioste",
        wins: 2,
        losses: 3,
        totalOpponentScore: 15,
        tiebreakPoints: 30
      },
      {
        id: 2,
        firstName: "Junaico",
        lastName: "Segismar",
        wins: 5,
        losses: 0,
        totalOpponentScore: 15,
        tiebreakPoints: 75
      },
      {
        id: 3,
        firstName: "Argel Niño",
        lastName: "Bagas",
        wins: 4,
        losses: 1,
        totalOpponentScore: 15,
        tiebreakPoints: 60
      },
      {
        id: 4,
        firstName: "Joard",
        lastName: "Saquillon",
        wins: 3,
        losses: 2,
        totalOpponentScore: 14,
        tiebreakPoints: 42
      },
      {
        id: 5,
        firstName: "Edward",
        lastName: "Sillador",
        wins: 3,
        losses: 2,
        totalOpponentScore: 13,
        tiebreakPoints: 39
      }
    ]
  }

  onSort(event:any) {
    console.log(event);
    let column = event.column;
    this.standings.sort((a, b) => {
      return a[column.prop] - b[column.prop];  
      
    })
  }
}
