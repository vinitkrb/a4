import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';// <-- Routing module

import { TableComponent } from '../app/table/table.component';
import { ListComponent } from '../app/list/list.component';
import { BindingComponent } from '../app/binding/binding.component';
import { ShowerrorComponent } from './showerror/showerror.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', redirectTo: '/binding', pathMatch: 'full' },
  { path: 'tables', component: TableComponent },
  { path: 'empTable', component: ListComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'showerror', component: ShowerrorComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
