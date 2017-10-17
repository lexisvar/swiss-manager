import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatChipsModule } from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatTooltipModule, MatListModule} from '@angular/material';
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
    MatListModule
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
    MatListModule
  ],

  declarations: [NavBarComponent]
})
export class CoreModule { }
