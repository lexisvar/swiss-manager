import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentStandingsTableComponent } from './tournament-standings-table.component';

describe('TournamentStandingsTableComponent', () => {
  let component: TournamentStandingsTableComponent;
  let fixture: ComponentFixture<TournamentStandingsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentStandingsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentStandingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
