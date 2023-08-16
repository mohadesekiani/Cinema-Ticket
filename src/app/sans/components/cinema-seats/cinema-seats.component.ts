import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from 'src/app/state/counter/counter.action';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-cinema-seats',
  templateUrl: './cinema-seats.component.html',
  styleUrls: ['./cinema-seats.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CinemaSeatsComponent,
    },
  ],
})
export class CinemaSeatsComponent implements ControlValueAccessor {
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  //counter: number | undefined;
  rows = [
    [
      { active: false, id: 1 },
      { active: false, id: 2 },
      { active: false, id: 3 },
      { active: false, id: 4 },
      { active: false, id: 5 },
      { active: false, id: 6 },
      { active: false, id: 7 },
      /* ... more seats ... */
    ],
    [
      { active: false, id: 8 },
      { active: false, id: 10 },
      { active: false, id: 11 },
      { active: false, id: 12 },
      { active: false, id: 13 },
      { active: false, id: 14 },
      { active: false, id: 15 },
      /* ... more seats ... */
    ],
    [
      { active: false, id: 16 },
      { active: false, id: 17 },
      { active: false, id: 18 },
      { active: false, id: 19 },
      { active: false, id: 20 },
      { active: false, id: 21 },
      { active: false, id: 22 },
      /* ... more seats ... */
    ],
    [
      { active: false, id: 23 },
      { active: false, id: 24 },
      { active: false, id: 25 },
      { active: false, id: 26 },
      { active: false, id: 27 },
      { active: false, id: 28 },
      { active: false, id: 29 },
      /* ... more seats ... */
    ],
    [
      { active: false, id: 30 },
      { active: false, id: 31 },
      { active: false, id: 32 },
      { active: false, id: 33 },
      { active: false, id: 34 },
      { active: false, id: 35 },
      { active: false, id: 36 },
      /* ... more seats ... */
    ],
    [
      { active: false, id: 37 },
      { active: false, id: 38 },
      { active: false, id: 39 },
      { active: false, id: 40 },
      { active: false, id: 41 },
      { active: false, id: 42 },
      { active: false, id: 43 },
      /* ... more seats ... */
    ],
    [
      { active: false, id: 44 },
      { active: false, id: 45 },
      { active: false, id: 46 },
      { active: false, id: 47 },
      { active: false, id: 48 },
      { active: false, id: 49 },
      { active: false, id: 50 },
      /* ... more seats ... */
    ],
  ];
  ///count = 0;
  toggleSeat(seat: any) {
    seat.active = !seat.active;
    seat.active
      ? this.store.dispatch(increment())
      : this.store.dispatch(decrement());

    this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
    });
  }

  // ########################################################
  //              control value accessor scope              #
  // ########################################################
  counter: number = 0;
  disabled = false;
  touched = false;
  onChange = (counter: number) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.counter = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  //########################################
  refresValue() {
    this.onChange(this.counter);
    this.markAsTouched();
  }
}
