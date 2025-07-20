import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameWorldGames } from './game-world-games/game-world-games';
import { NovedadesList } from './novedades-list/novedades-list';
import { Descuentos } from './descuentos/descuentos';
import { Carrito } from './carrito/carrito';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GameWorldGames
  },
  {
    path: 'carrito',
    component: Carrito
  },
  {
    path: 'novedades',
    component: NovedadesList
  },
  {
    path:'descuentos',
    component: Descuentos
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
