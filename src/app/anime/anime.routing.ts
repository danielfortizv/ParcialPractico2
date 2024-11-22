import { Routes, RouterModule } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

const routes: Routes = [
  { path: 'animes', component: AnimeListComponent }, 
  { path: 'animes/:id', component: AnimeDetailComponent },
  { path: '', redirectTo: '/animes', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/animes' }
];

export const AnimeRoutes = RouterModule.forChild(routes);
