import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SansTimeComponent } from './sans-time.component';

describe('SansTimeComponent', () => {
  let component: SansTimeComponent;
  let fixture: ComponentFixture<SansTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SansTimeComponent]
    });
    fixture = TestBed.createComponent(SansTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
