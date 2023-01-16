import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Monitor } from '../models/monitor.i';
import { MonitorService } from '../monitor.service';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonitorsComponent implements OnInit {
  public monitors$!: Observable<Monitor[]>;
  public filterByVar = ''
  public filterVar = new FormControl('');

  constructor(private _monitors: MonitorService) {
  }

  ngOnInit(): void {
    this.monitors$ = this._monitors.getAllMonitors();
    this.filterVar.valueChanges.subscribe(val => {
      this.filterByVar = val || '';
    })
  }
}
