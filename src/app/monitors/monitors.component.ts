import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Monitor } from '../models/monitor.i';
import { MonitorService } from '../monitor.service';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonitorsComponent implements OnInit {
  public monitors$: Observable<Monitor[]> = of([]);

  constructor(private _monitors: MonitorService) {
  }

  ngOnInit(): void {
    this.monitors$ = this._monitors.getAllMonitors();
  }
}
