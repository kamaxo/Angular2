import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'catalogue', loadChildren: './catalogue/catalogue.module#CatalogueModule' },
    { path: 'author', loadChildren: './author/author.module#AuthorModule' },
    { path: 'links', loadChildren: './links/links.module#LinksModule' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
