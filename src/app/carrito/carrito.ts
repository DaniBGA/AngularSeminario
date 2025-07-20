import { Component } from '@angular/core';
import { CarritoJuegosService } from '../carrito-juegos-service';
import { Game } from '../games-list/game';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss'
})
export class Carrito {

  toBuy: Game[] = [];
  constructor(private carrito: CarritoJuegosService){
    carrito.toBuy.subscribe(c => this.toBuy = c);
  }
  calculateTotalPrice(): number {
    return this.toBuy.reduce((total, game) => total + game.precio, 0);
  }
}
