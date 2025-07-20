import { Injectable } from '@angular/core';
import { Game } from './games-list/game';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarritoJuegosService {
  private _toBuy: Game[] = [];
  toBuy: BehaviorSubject<Game[]> =  new BehaviorSubject(this._toBuy)

  addCarrito(game: Game) {
    let item: Game | undefined = this._toBuy.find((v1) => v1.nombre == game.nombre);
    if(!item){
      game.adquirido = true,
      this._toBuy.push(game);
      alert('El juego ' +  game.nombre + ' fue añadido al carrito')
    }else{
      alert("El juego ya se encuentra adquirido")
    }
    console.log(this._toBuy)
    this.toBuy.next(this._toBuy) // equivale al emmitt
  }
  
}
