import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    LogoComponent,
    FooterComponent
  ],
  exports : [
    HeaderComponent,
    LogoComponent,
    FooterComponent
  ]
})
export class SharedModule { }
