import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Gift, SerachGiftResponse} from "../interfaces/gifts";

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  private api_key: string = "7Tu17rPUpaZkpRVhmqqHSLHO0JxUOxUL&q=";
  private url = 'http://api.giphy.com/v1/gifs/search?api_key=';
  private limit = '&limit=20';

  private _historial: string[] = [];
  public resultados: Gift[] = [];

  constructor(private _http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }


  get historial() {
    return [...this._historial];
  }

  buscarGift(query: string = '') {
    query = query.trim().toLowerCase();
    if (query.trim().length === 0) {
      return;
    }
    if (!this._historial.includes(query)) {//Si no esxiste el query ingresado, solo asi lo agregaqmos!
      this._historial.unshift(query);//Esta es la función que nos permite agregar el query que no existe.
      this._historial = this._historial.splice(0, 10);
      //  Aqui se graba historial en el localstorage.
      localStorage.setItem('historial', JSON.stringify(this._historial));
    } else {
      alert('El dato ya esta ingresado');
    }
    this._http.get<SerachGiftResponse>(`${this.url}${this.api_key}${query}${this.limit}`).subscribe((res: any) => {
      console.log(res.data);
      this.resultados = res.data;
    })
  }
}
