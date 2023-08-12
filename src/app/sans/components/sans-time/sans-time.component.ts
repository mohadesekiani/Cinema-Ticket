import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ABDataService } from 'src/app/core/services/data/abstract-data.service';
import { Ipost } from 'src/app/core/shema/models/Ipost';
import { Isans } from 'src/app/core/shema/models/Isans';

@Component({
  selector: 'app-sans-time',
  templateUrl: './sans-time.component.html',
  styleUrls: ['./sans-time.component.scss'],
})
export class SansTimeComponent {
  sans: Array<Isans> = [];

  constructor(private dataService: ABDataService) {}
  ngOnInit(): void {
    this.dataService.getFakedataSans().subscribe({
      next: (res) => {
        this.sans = res;
        console.log(this.sans);
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
