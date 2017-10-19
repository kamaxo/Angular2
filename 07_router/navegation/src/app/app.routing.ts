import { AboutComponent } from './main/about/about.component';
import { LinksComponent } from './main/links/links.component';
import { AuthorComponent } from './main/author/author.component';
import { CatalogueComponent } from './main/catalogue/catalogue.component';
import { HomeComponent } from './main/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalogue', component: CatalogueComponent },
    { path: 'author', component: AuthorComponent },
    { path: 'links', component: LinksComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
