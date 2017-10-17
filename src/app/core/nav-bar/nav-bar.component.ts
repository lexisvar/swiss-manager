import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  navigateToPlayers() {
    console.log("NavBarComponent", "this.navigateToPlayers")
    this.router.navigate(["players"])
  }

  navigateToTournaments() {
    console.log("NavBarComponent", "this.navigateToTournaments")
    this.router.navigate(["tournaments"])
  }
}
