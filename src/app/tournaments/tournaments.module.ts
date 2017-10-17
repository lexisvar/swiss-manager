import { NgModule } from '@angular/core';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { routing } from 'app/tournaments/tournaments.routing';
import { TournamentsListComponent } from './tournaments-list/tournaments-list.component';
import { CoreModule } from '../core/core.module';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';

@NgModule({
  imports: [    
    routing,
    CoreModule
  ],
  declarations: [TournamentsComponent, TournamentsListComponent, TournamentDetailsComponent]
})
export class TournamentsModule { }
