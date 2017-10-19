import { Injectable } from '@angular/core';
import { TournamentDetailsModel, TournamentStatus } from '../tournaments/tournament-details/tournament-details-model';

@Injectable()
export class TournamentDetailsService {

  constructor() { }

  getDetails(tournamentId: number): Promise <TournamentDetailsModel> {
    return new Promise((resolve, reject) => {
      let tournament = new TournamentDetailsModel()
      tournament.id = 1;
      tournament.startDate = new Date("October 9, 2017");
      tournament.endDate = new Date("October 13, 2017");
      tournament.status = TournamentStatus.Completed;
      tournament.description = "The quick brown fox jumps over the lazy dog near the river bank";
      tournament.rules = [
        "Touch move",
        `Use only one hand (same hand will be used to press the clock). Also
        applicable in castling.`,
        `Player cannot press the clock if move is not yet completed.`,
        `If player committed 5 offenses, he/she will forfeit the game.`,
        `Game time: 15 minutes per player`,
        `Tiebreaks: in case of a tie in 1st-3rd rankings, Tiebreak points will decide the final standings.`
      ]
      tournament.name = "KDDP October 2017 Swiss Tournament";
      tournament.rounds = [
        {
          roundNumber: 1,
          pairings: [
            {
              boardNumber: 1,
              white: {
                id: 1,
                firstName: "Jen",
                points: 0,
              },
              black: {
                id: 6,
                firstName: "Joard",
                points: 1
              }
            },
            {
              boardNumber: 2,
              white: {
                id: 2,
                firstName: "Nayk",
                points: 1
              },
              black: {
                id: 7,
                firstName: "Edward",
                points: 0
              }
            },
            {
              boardNumber: 5,
              white: {
                id: 1,
                lastName: "Arioste",
                firstName: "Jasser",
                points: 1,
                isDefaultWin: true
              },
              black: {
                id: 2,
                firstName: "Gerald",
                lastName: "Galanida",
                points: 0,
                isDefaultWin: false
              },
              status: "completed"
            }
          ]
        },
        {
          roundNumber: 2,
          pairings: [
            {
              boardNumber: 1,
              white: {
                id: 1,
                firstName: "Jen",
                points: 0,
              },
              black: {
                id: 6,
                firstName: "Joard",
                points: 1
              }
            },
            {
              boardNumber: 2,
              white: {
                id: 2,
                firstName: "Nayk",
                points: 1
              },
              black: {
                id: 7,
                firstName: "Edward",
                points: 0
              }
            },
            {
              boardNumber: 5,
              white: {
                id: 1,
                lastName: "Arioste",
                firstName: "Jasser",
                points: 1,
                isDefaultWin: true
              },
              black: {
                id: 2,
                firstName: "Gerald",
                lastName: "Galanida",
                points: 0,
                isDefaultWin: false
              },
              status: "completed"
            }
          ]
        },
        {
          roundNumber: 2,
          pairings: [
            {
              boardNumber: 1,
              white: {
                id: 1,
                firstName: "Jen",
                points: 0,
              },
              black: {
                id: 6,
                firstName: "Joard",
                points: 1
              }
            },
            {
              boardNumber: 2,
              white: {
                id: 2,
                firstName: "Nayk",
                points: 1
              },
              black: {
                id: 7,
                firstName: "Edward",
                points: 0
              }
            },
            {
              boardNumber: 5,
              white: {
                id: 1,
                lastName: "Arioste",
                firstName: "Jasser",
                points: 1,
                isDefaultWin: true
              },
              black: {
                id: 2,
                firstName: "Gerald",
                lastName: "Galanida",
                points: 0,
                isDefaultWin: false
              },
              status: "completed"
            }
          ]
        },
        {
          roundNumber: 2,
          pairings: [
            {
              boardNumber: 1,
              white: {
                id: 1,
                firstName: "Jen",
                points: 0,
              },
              black: {
                id: 6,
                firstName: "Joard",
                points: 1
              }
            },
            {
              boardNumber: 2,
              white: {
                id: 2,
                firstName: "Nayk",
                points: 1
              },
              black: {
                id: 7,
                firstName: "Edward",
                points: 0
              }
            },
            {
              boardNumber: 5,
              white: {
                id: 1,
                lastName: "Arioste",
                firstName: "Jasser",
                points: 1,
                isDefaultWin: true
              },
              black: {
                id: 2,
                firstName: "Gerald",
                lastName: "Galanida",
                points: 0,
                isDefaultWin: false
              },
              status: "completed"
            }
          ]
        },
        {
          roundNumber: 2,
          pairings: [
            {
              boardNumber: 1,
              white: {
                id: 1,
                firstName: "Jen",
                points: 0,
              },
              black: {
                id: 6,
                firstName: "Joard",
                points: 1
              }
            },
            {
              boardNumber: 2,
              white: {
                id: 2,
                firstName: "Nayk",
                points: 1
              },
              black: {
                id: 7,
                firstName: "Edward",
                points: 0
              }
            },
            {
              boardNumber: 5,
              white: {
                id: 1,
                lastName: "Arioste",
                firstName: "Jasser",
                points: 1,
                isDefaultWin: true
              },
              black: {
                id: 2,
                firstName: "Gerald",
                lastName: "Galanida",
                points: 0,
                isDefaultWin: false
              },
              status: "completed"
            }
          ]
        },
        {
          roundNumber: 2,
          pairings: [
            {
              boardNumber: 1,
              white: {
                id: 1,
                firstName: "Jen",
                points: 0,
              },
              black: {
                id: 6,
                firstName: "Joard",
                points: 1
              }
            },
            {
              boardNumber: 2,
              white: {
                id: 2,
                firstName: "Nayk",
                points: 1
              },
              black: {
                id: 7,
                firstName: "Edward",
                points: 0
              }
            },
            {
              boardNumber: 5,
              white: {
                id: 1,
                lastName: "Arioste",
                firstName: "Jasser",
                points: 1,
                isDefaultWin: true
              },
              black: {
                id: 2,
                firstName: "Gerald",
                lastName: "Galanida",
                points: 0,
                isDefaultWin: false
              },
              status: "completed"
            }
          ]
        },
        {
          roundNumber: 2,
          pairings: [
            {
              boardNumber: 1,
              white: {
                id: 1,
                firstName: "Jen",
                points: 0,
              },
              black: {
                id: 6,
                firstName: "Joard",
                points: 1
              }
            },
            {
              boardNumber: 2,
              white: {
                id: 2,
                firstName: "Nayk",
                points: 1
              },
              black: {
                id: 7,
                firstName: "Edward",
                points: 0
              }
            },
            {
              boardNumber: 5,
              white: {
                id: 1,
                lastName: "Arioste",
                firstName: "Jasser",
                points: 1,
                isDefaultWin: true
              },
              black: {
                id: 2,
                firstName: "Gerald",
                lastName: "Galanida",
                points: 0,
                isDefaultWin: false
              },
              status: "completed"
            }
          ]
        },
        {
          roundNumber: 2,
          pairings: [
            {
              boardNumber: 1,
              white: {
                id: 1,
                firstName: "Jen",
                points: 0,
              },
              black: {
                id: 6,
                firstName: "Joard",
                points: 1
              }
            },
            {
              boardNumber: 2,
              white: {
                id: 2,
                firstName: "Nayk",
                points: 1
              },
              black: {
                id: 7,
                firstName: "Edward",
                points: 0
              }
            },
            {
              boardNumber: 5,
              white: {
                id: 1,
                lastName: "Arioste",
                firstName: "Jasser",
                points: 1,
                isDefaultWin: true
              },
              black: {
                id: 2,
                firstName: "Gerald",
                lastName: "Galanida",
                points: 0,
                isDefaultWin: false
              },
              status: "completed"
            }
          ]
        },{
          roundNumber: 2,
          pairings: [
            {
              boardNumber: 1,
              white: {
                id: 1,
                firstName: "Jen",
                points: 0,
              },
              black: {
                id: 6,
                firstName: "Joard",
                points: 1
              }
            },
            {
              boardNumber: 2,
              white: {
                id: 2,
                firstName: "Nayk",
                points: 1
              },
              black: {
                id: 7,
                firstName: "Edward",
                points: 0
              }
            },
            {
              boardNumber: 5,
              white: {
                id: 1,
                lastName: "Arioste",
                firstName: "Jasser",
                points: 1,
                isDefaultWin: true
              },
              black: {
                id: 2,
                firstName: "Gerald",
                lastName: "Galanida",
                points: 0,
                isDefaultWin: false
              },
              status: "completed"
            }
          ]
        }
      ]
      resolve(tournament);
    })
  }
}
