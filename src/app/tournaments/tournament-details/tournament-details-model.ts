export class TournamentDetailsModel {
  id: number;
  name: string;
  rules: string[];
  registeredPlayers: Player[];
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
