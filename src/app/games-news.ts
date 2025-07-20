import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
  const url = 'https://687728c1dba809d901ee1cff.mockapi.io/api/newsgaming/noticia';
@Injectable({
  providedIn: 'root'
})
export class GamesNews {

  constructor(private http: HttpClient){
  }
  public getData(): Observable<any>{
    return this.http.get<any>(url);
  }
}
