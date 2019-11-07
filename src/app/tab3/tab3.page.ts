import { Component } from '@angular/core';

import { geralList, addAppToMyApps, returnAppToMyStore } from '../geral';
import { debuglog } from 'util';

export let shopList = geralList;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {
  constructor() {
    this.initializeItens();
  }
  itensShop: any;

  getItem(event: any) {
    this.initializeItens();
    const val = event.target.value;

    if (val && val !== '') {
      this.itensShop = this.itensShop.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  initializeItens() {
    this.itensShop = shopList;
  }

  installButtons(nome) {
    const val = nome;
    alert(val + ' Instalado!');
    addAppToMyApps(val);
  }

}
// por causa de bug, esse script pra botão que deveria estar no tab2 ta aqui....
export function deleteButton(nome) {
  const val = nome;
  returnAppToMyStore(val);
  alert(val + ' Desinstalado!');
}
