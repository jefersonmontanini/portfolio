import { Component } from '@angular/core';
import { IItemCard } from 'src/app/components/cards/cards.component';
import { ICarouselConfig, ICarouselItem } from 'src/app/components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public mainCarousel: any;
  public cards: any
  // public secondaryCarouseul: any;

  private configMainCarousel(): void {
    const config: ICarouselConfig = {
      name: 'carousel',
      timeTransition: 3000000,
      height: '500px'
    };
    const items: Array<ICarouselItem> = [
      { image: './../../../assets/img1.jpg', title: 'Camila Rota', text: 'Reposicionamento de imagem' },
      { image: './../../../assets/img2.jpg', title: 'enner e Geise', text: 'Casamentos' },
      { image: './../../../assets/img3.jpg', title: 'Breno Costa', text: 'Festas e eventos' },
      { image: './../../../assets/img4.jpg', title: 'Duo Fitnes', text: 'Produção corporativa' },
      { image: './../../../assets/img5.jpg', title: 'Ray Castro', text: 'Ensaio individual/casal' },
    ];

    this.mainCarousel = {
      config,
      items
    }
  }

  private _card(): void {
    const items: Array<IItemCard> = [
      {image: './../../../assets/600x600.jpg', title:'Lorem Ipsum', text:'Lorem ipsum dollor Lorem ipsum dollor Lorem ipsum dollor Lorem ipsum dollor'}
    ];
    this.cards = {
      items
    }
  }

  private configSecondaryCarousel(): void {
    const config: ICarouselConfig ={
      name: 'carouselTwo',
      timeTransition: 3000,
    };
    const items: Array<ICarouselItem> = [];
    // this.secondaryCarouseul = {
    //   config,
    //   items
    // }
  }

  ngOnInit() {
    this.configMainCarousel()
    this._card()
    // this.configSecondaryCarousel()
  }

}
