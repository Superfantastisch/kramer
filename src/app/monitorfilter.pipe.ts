import { Pipe, PipeTransform } from '@angular/core';
import { Monitor } from './models/monitor.i';

@Pipe({
  name: 'monitorfilter'
})
export class MonitorfilterPipe implements PipeTransform {
  transform(value: Monitor[], ...args: string[]): Monitor[] {
    console.log(args[0]);
    return value.filter(val => val.Name.includes(args[0]));
  }
}
