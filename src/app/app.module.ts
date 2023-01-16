import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { MonitorItemComponent } from './monitor-item/monitor-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MonitorfilterPipe } from './monitorfilter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MonitorsComponent,
    MonitorItemComponent,
    MonitorfilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
