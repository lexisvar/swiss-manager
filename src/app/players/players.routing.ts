import { RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { PlayersComponent } from './players/players.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: "",
        component: PlayersComponent
    }
]);
