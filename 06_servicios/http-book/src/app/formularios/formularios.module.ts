import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Datos1Component } from './datos1/datos1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    Datos1Component
  ],
  exports: [
    Datos1Component
  ]
})
export class FormulariosModule { }
