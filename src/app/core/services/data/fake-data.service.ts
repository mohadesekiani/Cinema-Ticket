import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Ipost } from '../../shema/models/Ipost';
import { Isans } from '../../shema/models/Isans';
import { ABDataService } from './abstract-data.service';
import * as fakeData from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class FakeDataService extends ABDataService {
  constructor() {
    super();
  }
  /**
   * Receive fack data
   * @returns -  fack data in the format observeble
   */
  public getFakedata(): Observable<Ipost[]> {
    //console.log(fakeData.Posts);
    return of(fakeData.Posts).pipe(delay(3000));
  }
  public getFakedataSans(id:number): Observable<any> {
    return of(fakeData.Sans.find((item) => item.id === +id))
    .pipe(
      delay(3000)
    );
  }
}
