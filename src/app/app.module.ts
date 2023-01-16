import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { MonitorItemComponent } from './monitor-item/monitor-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MonitorsComponent,
    MonitorItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
