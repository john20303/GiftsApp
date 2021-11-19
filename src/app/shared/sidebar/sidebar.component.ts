import { Component, OnInit } from '@angular/core';
import {GiftService} from "../../gift/services/gift.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _gift: GiftService) { }

  ngOnInit(): void {
  }
  get historial(){
    return this._gift.historial;
  }

}
