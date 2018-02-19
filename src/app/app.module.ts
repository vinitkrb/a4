import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here.
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module for pagination.
import { ReactiveFormsModule } from '@angular/forms';// <-- import the module for form-validation.
import { D3Service } from 'd3-ng2-service';// <-- import the module for d3-chart.
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';// <-- import the module for ng2-chart.

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListComponent } from './list/list.component';
import { BindingComponent } from './binding/binding.component';
import { ShowerrorComponent } from './showerror/showerror.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { NavService } from './nav.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ListComponent,
    BindingComponent,
    ShowerrorComponent,
    DashboardComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [D3Service, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
