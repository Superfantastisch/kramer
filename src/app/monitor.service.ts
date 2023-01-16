import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of, tap } from 'rxjs';
import { Monitor } from './models/monitor.i';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private MONITORS = ["BenQSC3211", "DellZT60", "HaierLE39B50", "LG50LA621Y", "MagRD24L", "NormandeND3276", "PanasonicTH-L32B6", "Philips55PFL6008", "Philips226V4LSB", "SamsungUA46F6400", "SharpLC50LE450M", "SamsungUA55F6400", "SonyKDL50W656"];

  constructor(private http: HttpClient) { }

  public getAllMonitors(): Observable<Monitor[]> {
    let allMonitorsReq = [];

    for (let index = 0; index < this.MONITORS.length; index++) {
      allMonitorsReq.push(this.http.get<Monitor>('./assets/JSONmonitors/' + this.MONITORS[index] + '.json'));
    }

    return forkJoin(allMonitorsReq);
  }
}
