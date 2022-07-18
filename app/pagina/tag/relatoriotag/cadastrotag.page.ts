import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { Cadastrotagts } from './tagts/cadastrotagts';
import { Service } from './tagservice/service';

@Component({
  selector: 'app-cadastrotag',
  templateUrl: './cadastrotag.page.html',
  styleUrls: ['./cadastrotag.page.scss'],
})
export class CadastrotagPage implements OnInit {
  public cadastrotagts: Cadastrotagts[];

  private tag:Cadastrotagts = new Cadastrotagts;
  private key:string = null;

  constructor(
    private cadastroTagService: Service,
    public alertController: AlertController,
    private activatedRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.key = this.activatedRouter.snapshot.paramMap.get("key");
    if (this.key){
      this.cadastroTagService.get(this.key).then(
        res=>{
        this.tag = res;
        }
      )
    }
  }

 onSubmit(){
    //alteração
    if (this.key) {
      this.cadastroTagService.update(this.key,this.tag)
    }
   // alterção
    else
    this.cadastroTagService.set(this.tag)
  }

    

}