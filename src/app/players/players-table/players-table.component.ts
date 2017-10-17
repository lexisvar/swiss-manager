import { Component, OnInit } from '@angular/core';
import { PlayerModel } from '../shared/player-model';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.scss']
})
export class PlayersTableComponent implements OnInit {
  players: PlayerModel[];
  columns: any[];
  constructor() { }

  ngOnInit() {
    this.players = [
      new PlayerModel(1, "Jasser Mark", "Arioste", 1560, 1, 3),
      new PlayerModel(2, "Junaico", "Segismar", 1700, 5, 0),
      new PlayerModel(3, "Joard", "Saquillon", 1620, 3, 2),
      new PlayerModel(3, "Argel Niño", "Bagas", 1640, 4, 1)
    ]
  }

}
