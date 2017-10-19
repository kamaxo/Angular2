import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksComponent } from './links.component';
import { RouterModule, Routes } from '@angular/router/';

const routes: Routes = [
    { path: '', component: LinksComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LinksComponent]
})
export class LinksModule { }
