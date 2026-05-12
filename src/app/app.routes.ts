import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/home/home').then(m => m.Home) },
    { path: 'about', loadComponent: () => import('./components/about/about').then(m => m.About) },
    { path: 'education', loadComponent: () => import('./components/education/education').then(m => m.Education) },
    { path: 'steam-education', loadComponent: () => import('./components/steam-education/steam-education').then(m => m.SteamEducation) },
    { path: 'solutions/agriculture', loadComponent: () => import('./components/solutions/agriculture/agriculture').then(m => m.Agriculture) },
    { path: 'solutions/mapping', loadComponent: () => import('./components/solutions/mapping/mapping').then(m => m.Mapping) },
    { path: 'solutions/inspection', loadComponent: () => import('./components/solutions/inspection/inspection').then(m => m.Inspection) },
    { path: 'solutions/mining', loadComponent: () => import('./components/solutions/mining/mining').then(m => m.Mining) },
    { path: 'rpto', loadComponent: () => import('./components/rpto/rpto').then(m => m.Rpto) },
    { path: 'blog', loadComponent: () => import('./components/blog/blog').then(m => m.Blog) },
    { path: 'blog/:slug', loadComponent: () => import('./components/blog-post/blog-post').then(m => m.BlogPost) },
    { path: 'contact', loadComponent: () => import('./components/contact/contact').then(m => m.Contact) },
    { path: '**', redirectTo: '' }
];
