import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateTournamentModalComponent } from '../../core/create-tournament-modal/create-tournament-modal.component';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss'],
  providers: [
    MatDialog
  ]
})
export class TournamentsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCreateTournamentDialog() {  
    let dialogRef = this.dialog.open(CreateTournamentModalComponent, {
      width: '800px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
