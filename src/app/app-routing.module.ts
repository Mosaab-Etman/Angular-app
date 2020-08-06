import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCompComponent } from './home-comp/home-comp.component';
import { NotfoundCompComponent } from './notfound-comp/notfound-comp.component';


const routes: Routes = [
  { path: 'collections', loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule)},
  { path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)},
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  { path: 'mods', loadChildren: () => import('./mods/mods.module').then(m => m.ModsModule)},
  { path: '', component: HomeCompComponent },
  { path: '**', component: NotfoundCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
