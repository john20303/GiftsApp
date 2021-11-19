import {Component, ElementRef, ViewChild} from '@angular/core';
import {GiftService} from "../services/gift.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  data:string[] = [];

  constructor(private _gift: GiftService) {}


  buscar() {
    const valor = this.txtBuscar.nativeElement.value
    this._gift.buscarGift(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
