import {Component} from '@angular/core';
import {GiftService} from "../services/gift.service";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  constructor(private _gift: GiftService) {}

  get result(){
    return this._gift.resultados;
  }

}
