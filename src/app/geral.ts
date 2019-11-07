import { myList } from './tab2/tab2.page';
import { shopList } from './tab3/tab3.page';

// tslint:disable-next-line: max-line-length
export let geralList = [{name: 'League of Legends', iconURL: 'http://2.bp.blogspot.com/-HqSOKIIV59A/U8WP4WFW28I/AAAAAAAAT5U/qTSiV9UgvUY/s1600/icon.png', Desc: 'Moba mundialmente famoso portado para celulares.'},
// tslint:disable-next-line: max-line-length
{name: 'Burrito Bison', iconURL: 'https://img.utdstc.com/icons/burrito-bison-launcha-libre-android.png:l', Desc: 'Drag and shoot infinity scroller no qual você esmaga ursos para ganhar pontos.'},
// tslint:disable-next-line: max-line-length
{name: 'Adventure Captalist', iconURL: 'https://cdn.wezift.com/assets/apps/adventure-capitalist/logo/b6051bc3aa08573d6c6ad6c8c925207a.png?mtime=20171005201239', Desc: 'Ganhe muito dinheiro nessa aventura capitalista começando com uma limonada.'},
// tslint:disable-next-line: max-line-length
{name: 'Pokemon GO', iconURL: 'https://icon-library.net/images/pokemon-go-icon-png/pokemon-go-icon-png-29.jpg', Desc: 'Capture Pokémons no mundo real! Colete e batalhe com outros jogadores.'},
// tslint:disable-next-line: max-line-length
{name: 'Clash of Clans', iconURL: 'https://cdn6.aptoide.com/imgs/8/1/c/81c96a0ff0ed273a5c23b7610801180b_icon.png?w=240', Desc: 'Jogo de estratégia com combates épicos. Construa sua vila, treine suas tropas e vá para a batalha'},
// tslint:disable-next-line: max-line-length
{name: 'Clash Royale', iconURL: 'https://i.pinimg.com/originals/01/dc/b7/01dcb721021425c85f6342d49d59ab0d.png', Desc: 'Clash Royale é um jogo em tempo real, de uma batalha player vs player no universo Clash.'},
// tslint:disable-next-line: max-line-length
{name: 'Brawl Stars', iconURL: 'https://i.pinimg.com/564x/1b/34/ea/1b34ea764ff65705ac8306571b0fd8f6.jpg', Desc: 'Batalhas multiplayer  como 3V3 e Battle Royale'},
// tslint:disable-next-line: max-line-length
{name: 'Call of Duty', iconURL: 'http://www.iconarchive.com/download/i1834/3xhumed/mega-games-pack-39/Call-of-Duty-World-at-War-11.ico', Desc: 'Battle Royale, Rápidos 5 v 5 e sobrevivência zumbi'},
// tslint:disable-next-line: max-line-length
{name: 'Jetpack Joyride', iconURL: 'https://images-na.ssl-images-amazon.com/images/I/A18-ma1iBrL.png', Desc: 'Jetpacks loucos, veículos épicos, e power-ups insanos! Colete tudo agora!'},
// tslint:disable-next-line: max-line-length
{name: 'Candy Crush Saga', iconURL: 'https://i.pinimg.com/originals/da/ae/a0/daaea05f83a70b6502303e733334a329.png', Desc: 'O mais doce jogo de quebra-cabeça! Combine e exploda doces para ganhar níveis!'},
// tslint:disable-next-line: max-line-length
{name: 'Subway Surfers', iconURL: 'https://www.stickpng.com/assets/images/589a3be05aa6293a4aac489d.png', Desc: 'Ajude Jake a escapar do inspetor mal-humorado e seu cachorro!'},
// tslint:disable-next-line: max-line-length
{name: 'Garena Free Fire', iconURL: 'https://d2jcw5q7j4vmo4.cloudfront.net/1S2taXva8BAOu_35fxmkAfMd-mU1ng1zLxvIVeIpoMPcP3wirRPMHxosLm2nBZgxvs8=w512', Desc: 'É o melhor jogo de tiro de sobrevivência disponível para celular.'},
// tslint:disable-next-line: max-line-length
{name: 'Mobile Legends: Bang Bang', iconURL: 'https://images-na.ssl-images-amazon.com/images/I/81cn2%2BLf61L.png', Desc: 'Um emocionante MOBA 5V5, agora com modo Battle Royale de 99 jogadores.'},
// tslint:disable-next-line: max-line-length
{name: 'Angry Birds 2', iconURL: 'https://www.iosicongallery.com/icons/angry-birds-2-2019-01-07/512.png', Desc: 'Jogue o mais popular jogo de Angry Birds do mundo!'},

];

export function getAppFromList(nome) {
    const value = geralList.findIndex(i => i.name === nome);
    return geralList[value];
}

export function addAppToMyApps(nome) {
    const value = geralList.findIndex(i => i.name === nome);
    if (value !== -1) {
        myList.push(geralList[value]);
        const value2 = shopList.findIndex(i => i.name === nome);
        if (value2 !== -1) {
            shopList.splice(value2, 1);
        }
    }
}

export function returnAppToMyStore(nome) {
    const value = shopList.findIndex(i => i.name === nome);
    if (value === -1) {
        const value2 = myList.findIndex(i => i.name === nome);
        shopList.push(myList[value2]);
        myList.splice(value2, 1);
    }
}
