import { Component } from '@angular/core';

@Component({
  selector: 'app-cinema-seats',
  templateUrl: './cinema-seats.component.html',
  styleUrls: ['./cinema-seats.component.scss'],
})
export class CinemaSeatsComponent {
  active: boolean = false;
  seates: any = {
    row1: [
      { id: 1, active: false },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: false },
      { id: 5, active: false },
      { id: 6, active: false },
      { id: 7, active: false },
    ],
    row2: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ],
    row3: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ],
  };
  // selectSeat(id: number) {
  //  let key = this.seates.row1.find((item: any) => {
  //     id = item.id;
  //   });
  //   this.seates.row1[]= !this.active;
  // }
}
