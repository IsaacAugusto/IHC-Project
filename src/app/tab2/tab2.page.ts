import { deleteButton } from '../tab3/tab3.page';
import { Component } from '@angular/core';

export let myList = [];

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor() {
    this.initializeItens();
  }

  itens: any;

  getItem(event: any) {
    this.initializeItens();
    const val = event.target.value;

    if (val && val !== '') {
      this.itens = this.itens.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  initializeItens() {
    this.itens = myList;
  }

  playButton(nome) {
    const val = nome;
    alert(val + ' Iniciado!');
  }

  deleteButton2(nome) {
    deleteButton(nome);
  }

}
