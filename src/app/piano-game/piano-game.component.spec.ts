import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoGameComponent } from './piano-game.component';

describe('PianoGameComponent', () => {
  let component: PianoGameComponent;
  let fixture: ComponentFixture<PianoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianoGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
