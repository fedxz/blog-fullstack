import { Routes } from '@angular/router';
import { Post } from './pages/post/post';

export const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'create-post', component: Post }
];
