import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSansComponent } from './form-sans.component';

describe('FormSansComponent', () => {
  let component: FormSansComponent;
  let fixture: ComponentFixture<FormSansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSansComponent]
    });
    fixture = TestBed.createComponent(FormSansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
