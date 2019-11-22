import { deleteButton } from '../tab3/tab3.page';
import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';

export let myList = [];

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor(public alertCtrl: AlertController) {
    this.initializeItens();
  }

  itens: any;
  async showAlert(nome) {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Deseja desinstalar esse jogo?',
      buttons: [{text : 'Cancelar',
                 role: 'cancel'},
      {text: 'Deletar',
       handler: () => {
        this.deleteButton2(nome);
       }
      }]
    });

    await alert.present();
  }

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
