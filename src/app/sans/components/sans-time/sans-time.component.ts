import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ABDataService } from 'src/app/core/services/data/abstract-data.service';
import { Ipost } from 'src/app/core/shema/models/Ipost';
import { Isans } from 'src/app/core/shema/models/Isans';

@Component({
  selector: 'app-sans-time',
  templateUrl: './sans-time.component.html',
  styleUrls: ['./sans-time.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SansTimeComponent,
    },
  ],
})
export class SansTimeComponent implements ControlValueAccessor {
  sans: Array<Isans> = [];
  itemSans: Array<any> = [];
  selected: any | undefined;
  activeIndex: number = -1;
  constructor(
    private dataService: ABDataService,
    private route: ActivatedRoute
  ) {}
  // ########################################################
  //              control value accessor scope              #
  // ########################################################

  selectedTime: any = {
    active: false,
    hall: 'سالن',
    id: 0,
    money: '000',
    time: 'time',
  };
  disabled = false;
  touched = false;
  onChange = (selectedTime: number) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.selectedTime = obj;
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
    console.log(this.itemSans);
    this.selectedTime = this.itemSans[this.activeIndex];
    this.onChange(this.selectedTime);
    this.markAsTouched();
  }

  _id = this.route.snapshot.params['id'];
  selectedSans(item: any) {
    if (this.activeIndex !== -1) {
      this.itemSans[this.activeIndex].active = false;
    }
    item.active = !item.active;
    this.activeIndex = this.itemSans.indexOf(item);
    // console.log(this.itemSans[this.activeIndex]);
  }
  ngOnInit(): void {
    this.dataService.getFakedataSans(this._id).subscribe({
      next: (res) => {
        this.sans = res;
        this.itemSans = res.sans;
        // console.log(this.itemSans);
      },
      error: (err) => {
        console.log(err, 'خطای سرور');
      },
      complete: () => {
        console.log('complated req');
      },
    });
  }
}
