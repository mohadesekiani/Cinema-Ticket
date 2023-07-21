import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from '../../shema/models/Ipost';

@Injectable({
  providedIn: 'root',
})
export abstract class ABDataService {
  abstract getFakedata(): Observable<Ipost[]>;
}
