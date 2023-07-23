import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SighnupComponent } from './sighnup.component';

describe('SighnupComponent', () => {
  let component: SighnupComponent;
  let fixture: ComponentFixture<SighnupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SighnupComponent]
    });
    fixture = TestBed.createComponent(SighnupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
