import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { HomeComponent } from './home/home.component';
import { JumbortonComponent } from './jumborton/jumborton.component';
import { SharedModule } from '../shared/shared.module';
import { MediaComponent } from './media/media.component'



@NgModule({
  declarations: [HomeComponent, JumbortonComponent, MediaComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ]
})
export class ElementsModule { }
