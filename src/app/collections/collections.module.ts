import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module'


@NgModule({
  declarations: [HomeComponent, TableComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ]
})
export class CollectionsModule { }
