import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public startNavBar: string = 'Menu'
  public navBarItens: Array<string> = ['Portfólio' , 'Sobre Mim', 'Entre em contato']



}
