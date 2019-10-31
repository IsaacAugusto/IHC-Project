import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {
    this.initializeItens();
  }

  lista = [{name: 'League of Legends', iconURL: 'http://2.bp.blogspot.com/-HqSOKIIV59A/U8WP4WFW28I/AAAAAAAAT5U/qTSiV9UgvUY/s1600/icon.png'},
          {name: 'Burrito Bison', iconURL: 'https://img.utdstc.com/icons/burrito-bison-launcha-libre-android.png:l'},
          // tslint:disable-next-line: max-line-length
          {name: 'Adventure Captalist', iconURL: 'https://cdn.wezift.com/assets/apps/adventure-capitalist/logo/b6051bc3aa08573d6c6ad6c8c925207a.png?mtime=20171005201239'}];

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
    this.itens = this.lista;
  }
}
