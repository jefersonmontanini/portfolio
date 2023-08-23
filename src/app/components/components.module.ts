import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    CarouselComponent,
    HeaderComponent,
    NavBarComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    NavBarComponent,
    CardsComponent,
  ]
})
export class ComponentsModule { }
