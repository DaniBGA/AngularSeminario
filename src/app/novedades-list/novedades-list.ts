import { Component, OnInit } from '@angular/core';
import { GamesNews } from '../games-news';


@Component({
  selector: 'app-novedades-list',
  standalone: false,
  templateUrl: './novedades-list.html',
  styleUrl: './novedades-list.scss'
})
export class NovedadesList implements OnInit {
  notis: any[] = []
  constructor(private news: GamesNews){
  }


  ngOnInit(): void {
    this.news.getData().subscribe(notis => {
      if (notis) {
        this.notis = notis;
      }
    });
  }
}
