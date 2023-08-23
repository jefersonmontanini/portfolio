import { Component, Input } from '@angular/core';

export interface IItemCard {
  image: string;
  title: string;
  text: string;
  subText?: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() items! : Array<IItemCard>;

}
