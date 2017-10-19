import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue.component';
import { RouterModule, Routes } from '@angular/router/';

const routes: Routes = [
    { path: '', component: CatalogueComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatalogueComponent]
})
export class CatalogueModule { }
