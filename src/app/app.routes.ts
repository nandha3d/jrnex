import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Agriculture } from './components/solutions/agriculture/agriculture';
import { Mapping } from './components/solutions/mapping/mapping';
import { Inspection } from './components/solutions/inspection/inspection';
import { Rpto } from './components/rpto/rpto';
import { Blog } from './components/blog/blog';
import { BlogPost } from './components/blog-post/blog-post';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'education', component: Education },
    { path: 'solutions/agriculture', component: Agriculture },
    { path: 'solutions/mapping', component: Mapping },
    { path: 'solutions/inspection', component: Inspection },
    { path: 'rpto', component: Rpto },
    { path: 'blog', component: Blog },
    { path: 'blog/:slug', component: BlogPost },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: '' }
];
