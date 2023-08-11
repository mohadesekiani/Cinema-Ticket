import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SansComponent } from './sans.component';

describe('SansComponent', () => {
  let component: SansComponent;
  let fixture: ComponentFixture<SansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SansComponent]
    });
    fixture = TestBed.createComponent(SansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
