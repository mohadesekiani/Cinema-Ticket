import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaSeatsComponent } from './cinema-seats.component';

describe('CinemaSeatsComponent', () => {
  let component: CinemaSeatsComponent;
  let fixture: ComponentFixture<CinemaSeatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinemaSeatsComponent]
    });
    fixture = TestBed.createComponent(CinemaSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
