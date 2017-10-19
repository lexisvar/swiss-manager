import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatChipsModule } from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatTooltipModule, MatListModule, MatCheckboxModule, MatDialogModule, MatInputModule, MatSelectModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { CreateTournamentModalComponent } from './create-tournament-modal/create-tournament-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule,
    MatListModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    NavBarComponent,
    MatTooltipModule,
    MatListModule,
    MatCheckboxModule,
    FooterComponent,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],

  declarations: [NavBarComponent, FooterComponent, CreateTournamentModalComponent],
  entryComponents: [
    CreateTournamentModalComponent
  ]
})
export class CoreModule { }
