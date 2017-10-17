import { RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: "",
        component: TournamentsComponent
    },
    {
        path: ":id",
        component: TournamentDetailsComponent
        // loadChildren: "app/tournament-details/tournament-details.component#TournamentDetailsComponent"
    }
]);
