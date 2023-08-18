import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-form-sans',
  templateUrl: './form-sans.component.html',
  styleUrls: ['./form-sans.component.scss'],
})
export class FormSansComponent {
  cinemaForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {
    this.cinemaForm = this.fb.group({
      seatCount: new FormControl(0, [Validators.required]),
      sansTime: new FormControl(
        {
          active: true,
          hall: 'سالن  ',
          id: 0,
          money: '000',
          time: 'time',
        },
        [Validators.required]
      ),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      payment: new FormControl(0, [Validators.required]),
    });
  }
}
