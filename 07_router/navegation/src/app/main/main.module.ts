import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AuthorComponent } from './author/author.component';
import { LinksComponent } from './links/links.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, CatalogueComponent, AuthorComponent, LinksComponent, AboutComponent]
})
export class MainModule { }
