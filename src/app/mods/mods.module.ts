import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ModsRoutingModule } from './mods-routing.module';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';



@NgModule({
  declarations: [HomeComponent, ModalComponent, AccordionComponent],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
