import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTournamentModalComponent } from './create-tournament-modal.component';

describe('CreateTournamentModalComponent', () => {
  let component: CreateTournamentModalComponent;
  let fixture: ComponentFixture<CreateTournamentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTournamentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTournamentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
