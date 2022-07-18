import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.page.html',
  styleUrls: ['./sair.page.scss'],
})
export class SairPage implements OnInit {

  //Função para navegar ao clicar no botão, não sendo nescessario alterar a função para nagegar para uma pagina diferente, apenas alterar rota no html

  constructor(public nav:NavController) { }
  abrirPagina(x){
    this.nav.navigateForward(x)
  }
  ngOnInit() {
  }

}
