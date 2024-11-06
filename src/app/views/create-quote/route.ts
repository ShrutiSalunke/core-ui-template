import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./create-quote.component').then(m => m.CreateQuoteComponent),
    data: {
      title: 'CreateQuote'
    }
  }
];
