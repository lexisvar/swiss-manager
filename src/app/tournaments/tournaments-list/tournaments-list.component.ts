import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.scss']
})
export class TournamentsListComponent implements OnInit {
  columns: ({ prop: string; } | { name: string; })[];
  tournaments: any[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.tournaments = [
      {
        id: 1,
        name: "October 2017 Tournament",
        description: "Initiated by KDDP Chess Club, October 2017 Swiss Tournament is the first chess tournament for FY 2017. Sponsored by Burger king.",
        startDate: "Oct 9, 2017",
        endDate: "Oct 13, 2017",
        status: "finished"
      },
      {
        id: 2,
        name: "Winter 2017 Tournament",
        description: "Winter chess tournament for KDDP",
        startDate: "Dec 1, 2017",
        endDate: "Dec 5, 2017",
        status: "not started"
      }
    ]

    this.columns = [
      { prop: 'name' },
      { name: 'Description' },
    ]
  }

  goToDetails(tournament) {
    console.log("id ",tournament);
    this.router.navigate(["/tournament", tournament]);
  }
}
