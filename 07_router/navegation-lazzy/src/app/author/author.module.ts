import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';
import { RouterModule, Routes } from '@angular/router/';

const routes: Routes = [
    { path: '', component: AuthorComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthorComponent]
})
export class AuthorModule { }
