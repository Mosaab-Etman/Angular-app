import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [HomeComponent, FormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
