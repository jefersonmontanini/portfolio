import { Component, Input } from '@angular/core';

export interface ICarouselItem {
  image: string;
  title: string;
  text: string;
}

export interface ICarouselConfig {
  name: string;
  timeTransition?: number;
  height?: string;
  width?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() config!: ICarouselConfig;
  @Input() items!: Array<ICarouselItem>;
  public hasTransition!: boolean | string;
  
  ngOnInit(){
    this.hasTransition = this.config.timeTransition ? this.config.name : false ;
  }

}
