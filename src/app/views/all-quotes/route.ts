import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./all-quotes.component').then(m => m.AllQuotesComponent),
    data: {
      title: 'allQuotes'
    }
  }
];
