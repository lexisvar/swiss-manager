import { NgModule } from '@angular/core';
import { PlayersComponent } from './players/players.component';
import { routing } from './players.routing';
import { PlayersTableComponent } from './players-table/players-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    routing,
    NgxDatatableModule,
    MatIconModule,
    CoreModule
  ],
  declarations: [PlayersComponent, PlayersTableComponent]
})
export class PlayersModule { }
