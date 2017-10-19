import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { without } from 'lodash';
@Component({
  selector: 'app-create-tournament-modal',
  templateUrl: './create-tournament-modal.component.html',
  styleUrls: ['./create-tournament-modal.component.scss']
})
export class CreateTournamentModalComponent implements OnInit {
  rules: string[] = [];
  newRule: string;
  constructor(public dialogRef: MatDialogRef<CreateTournamentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.data = {
      players: [
        {
          id: 1,
          firstName: "Jasser",
          lastName: "Arioste"
        },
        {
          id: 2,
          firstName: "Nayk",
          lastName: "Segismar"
        }
      ]
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addRule() {
    console.log("Add rule was clicked", this.rules);
    let newRule = this.newRule + "-";
    this.rules.push(newRule);
    this.newRule = "";
  }

  deleteRule(rule) {
    console.log("Add rule was clicked");
    this.rules = without(this.rules,rule);
    
  }
}
