import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Pikachu',
        description: 'Petite créature jaune très mignonne mais électrique !',
        createdDate: new Date(),
        snaps: 10,
        imageUrl:
          'https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png',
        location: 'Bourg-Palette',
      },
      {
        title: 'Carapuce',
        description:
          'Pokemon de type eau à choisir au début du jeu... I love Tortank !',
        createdDate: new Date(),
        snaps: 0,
        imageUrl:
          'https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/250px-Carapuce-RFVF.png',
        location: 'Azur',
      },
      {
        title: 'Salameche',
        description:
          "Première évolution pokemon avant d'avoir reptincelle et DRACEUFEUUUUU !",
        createdDate: new Date(),
        snaps: 350,

        imageUrl:
          'https://icon-library.com/images/charmander-icon/charmander-icon-4.jpg',
      },
    ];
  }
}
