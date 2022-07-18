import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Cadastrotagts } from '../relatoriotag/tagts/cadastrotagts';
import { Service } from '../relatoriotag/tagservice/service';

@Component({
  selector: 'app-criartag',
  templateUrl: './criartag.page.html',
  styleUrls: ['./criartag.page.scss'],
})
export class CriartagPage implements OnInit {

  public tag: Cadastrotagts[];

  constructor(
    private tagService: Service,
    private alertController: AlertController
  ) { }

  // Função atualizar lista

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    
    this.atualizarLista()
  }
  async remove(key) {
    
    const alert = await this.alertController.create({
      header: 'Confirmar Remoção!',
      message: 'Deseja Apagar o usuario?',
      buttons: [
        {
      text: 'Cancelar',
      role: 'cancel',
      cssClass: 'danger',
      handler: (blah) =>{
        console.log('Confirm Cancel: blah');
      }
    },{
      text: 'Confirmar',
      cssClass: 'success',
      handler: () => {
        this.tagService.remove(key).then(
          ()=>{
            this.atualizarLista();
          }
        )
        
      }
    
    }
  ]

      
  });

    await alert.present();
}
 
atualizarLista(){
 return this.tagService.getall().then (
    res=>{
    console.log(res);
    this.tag = res;
    }
  )
}

//Fun Botão Refresh, para atualizar cadastro

doRefresh(event) {
  this.atualizarLista().then(
   ()=>{
     setTimeout(() => {
       console.log('Async operation has ended');
       event.target.complete();
     }, 2000);
   }
 )
}
}
