import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
//TODO - Añadir aquí las rutas de los componentes que se vayan a crear
  {
    path: 'prueba-servidor',
    loadComponent: () => import('./prueba-servidor/prueba-servidor.page').then((m) => m.PruebaServidorPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
