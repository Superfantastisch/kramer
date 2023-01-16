import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Monitor } from './models/monitor.i';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private MONITORS = ["BenQ SC3211", "Dell ZT60", "Haier LE39B50", "LG 50LA621Y", "Mag RD24L", "Normande ND3276", "Panasonic TH-L32B6", "Philips 55PFL6008", "Philips 226V4LSB", "Samsung UA46F6400", "Sharp LC50LE450M", "Samsung UA55F6400", "Sony KDL50W656"];

  constructor() { }

  public getAllMonitors(): Observable<Monitor[]> {
    return of([
      {"Name":"Sony KDL50W656","NativeResolution":"1920X1080","Size":256,"status":1},
      {"Name":"Sharp LC50LE450M","NativeResolution":"640X480","Size":128,"status":0},
      {"Name":"Samsung UA55F6400","NativeResolution":"1920X1080","Size":256,"status":1}
    ])
  }


}
