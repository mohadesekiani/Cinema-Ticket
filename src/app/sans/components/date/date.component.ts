import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  options: any = { year: 'numeric', month: 'long', day: 'numeric' };
  today = new Date().toLocaleDateString('fa-IR', this.options);
}
