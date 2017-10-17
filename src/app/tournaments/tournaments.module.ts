import { NgModule } from '@angular/core';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { routing } from 'app/tournaments/tournaments.routing';
import { TournamentsListComponent } from './tournaments-list/tournaments-list.component';
import { CoreModule } from '../core/core.module';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { TournamentStandingsTableComponent } from './tournament-standings-table/tournament-standings-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [    
    routing,
    CoreModule,
    NgxDatatableModule
  ],
  declarations: [TournamentsComponent, TournamentsListComponent, TournamentDetailsComponent, TournamentStandingsTableComponent]
})
export class TournamentsModule { }
