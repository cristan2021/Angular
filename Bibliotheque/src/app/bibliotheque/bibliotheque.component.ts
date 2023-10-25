import { Component } from '@angular/core';
import { livre } from './Livre';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent {
  livres: livre[] = [
    new livre('Angular', 'Mosh', 1),
    new livre('React', 'Mosh', 2),
    new livre('Vue', 'Mosh', 3),
    new livre('Angular', 'Mosh', 4),
    new livre('React', 'Mosh', 5)
  ];

  livrevide:livre = new livre('','',0);
ajoutlivre(){
  this.livres.push(this.livrevide);
}
}


