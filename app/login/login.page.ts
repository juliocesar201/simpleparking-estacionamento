import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
//


@Component({
  selector: 'app-folder',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class FolderPage implements OnInit {

  private usuario:string;
  private password:string

  constructor(public toastController: ToastController, public nav:NavController) { }

  //Validação de usuarios//

  login(x){
    if(
      this.usuario === 'lucas@simpleparking.com' && this.password === 'Sp@2022' ||
      this.usuario === 'julio.gomes@simpleparking.com' && this.password === 'Sp@2022' ||
      this.usuario === 'ana.araujo@simpleparking.com' && this.password === 'Sp@2022' ||
      this.usuario === 'nathanael.reis@simpleparking.com' && this.password === 'Sp@2022'
     )
     //mensagem login efetuado ou não com suceso//
     {
     this.nav.navigateForward(x);
      this.presentToast('Seja Bem-vindo!', 'success');
    }else {
      this.presentToast('ERRO, Usuario e/ou senha invalidos', 'danger');
    }
  }

  async presentToast( texto: string, cor:string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor ,
      duration: 2000,
    })
    toast.present();
  }

//função click do botão entrar//

  abrirPagina(x){
    this.nav.navigateForward(x)
  }
  ngOnInit() {
  }

}
