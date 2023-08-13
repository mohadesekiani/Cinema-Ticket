import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  itemSans: Array<any> = [];
  constructor(
    private dataService: ABDataService,
    private route: ActivatedRoute,
  ) {}
  _id = this.route.snapshot.params['id'];
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
