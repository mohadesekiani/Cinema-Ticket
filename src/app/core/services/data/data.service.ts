import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from '../../shema/models/Ipost';
import { Isans } from '../../shema/models/Isans';
import { ABDataService } from './abstract-data.service';

@Injectable({
  providedIn: 'root',
})
/**
 * useinng for real api call on production mode
 */
export class DataService extends ABDataService {
  getFakedata(): Observable<Ipost[]> {
    throw new Error('Method not implemented.');
  }
  getFakedataSans(): Observable<Isans[]> {
    throw new Error('Method not implemented.');
  }
}
