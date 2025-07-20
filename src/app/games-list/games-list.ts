import { Component } from '@angular/core';
import { Game } from './game';
import { CarritoJuegosService } from '../carrito-juegos-service';

@Component({
  selector: 'app-games-list',
  standalone: false,
  templateUrl: './games-list.html',
  styleUrl: './games-list.scss'
})
export class GamesList {
  games: Game[] = [
  {
    nombre: 'God of war ragnarok',
    descripcion:'Kratos junto a su hijo atreus se enbarcan en una aventura para intentar evitar el ragnarok',
    precio: 20000,
    imagen: "/assets/img/GOWR.jpg",
    adquirido: false
  },
  {
    nombre: 'Fallout new vegas',
    descripcion:'Un mundo postapocaliptico en las vegas',
    precio: 18000,
    imagen: "/assets/img/newVegas.webp",
    adquirido: false
  },
  {
    nombre: 'Borderlands 4',
    descripcion:'....',
    precio: 0,
    imagen: "/assets/img/borderlands.avif",
    adquirido: false
  },
  ]

    constructor(private carrito: CarritoJuegosService){
    }

  addCarrito(game: Game): void{
    if(game.precio != 0 && game.precio > 0 && game.adquirido != true){
        this.carrito.addCarrito(game);
    }
  }
}
