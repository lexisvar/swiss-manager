import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "players",
        pathMatch: "full"
    },
    {
        path: "players",
        loadChildren: "app/players/players.module#PlayersModule"
    },
    {
        path: "tournaments",
        loadChildren: "app/tournaments/tournaments.module#TournamentsModule"
    },
    // {
    //   path: "**",
    //   redirectTo: "players",
    // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
