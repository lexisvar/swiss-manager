import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pair-table',
  templateUrl: './pair-table.component.html',
  styleUrls: ['./pair-table.component.scss']
})
export class PairTableComponent implements OnInit {
  @Input() pairings: any[];

  constructor() { }

  ngOnInit() {
  }

  getCellClass({ row, column, value }): any {    
    return {
      'win': value.points === 1,
      'loss': value.points === 0
    };
  }
}

