import { PlayerModel } from '../../players/shared/player-model';

export class TournamentDetailsModel {
  id: number;
  name: string;
  rules: string[];
  registeredPlayers: PlayerModel[];
  startDate: Date;
  endDate: Date;
  status: TournamentStatus;
  description: string;
}

export enum TournamentStatus {
  NotStarted,
  InProgress,
  Completed
}
