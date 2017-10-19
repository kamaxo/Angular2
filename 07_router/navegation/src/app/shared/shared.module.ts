import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    MenuComponent
  ],
  exports : [
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class SharedModule { }
