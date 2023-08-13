import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from '../../shema/models/Ipost';
//import { Isans } from '../../shema/models/Isans';

@Injectable({
  providedIn: 'root',
})
export abstract class ABDataService {
  abstract getFakedata(): Observable<Ipost[]>;
  abstract getFakedataSans(id: number): Observable<any>;
}
