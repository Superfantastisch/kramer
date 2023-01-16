import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Monitor } from '../models/monitor.i';

@Component({
  selector: 'app-monitor-item',
  templateUrl: './monitor-item.component.html',
  styleUrls: ['./monitor-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonitorItemComponent {
  @Input() monitor!: Monitor;
  public isSelected = false;

  selectMonitor(): void {
    console.log('this.selectMonitor');
    if(Boolean(this.monitor.status)) {
      this.isSelected = !this.isSelected;
    }

  }
}
