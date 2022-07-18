import { Injectable, Provider } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Criarusuariots } from '../criarusuariots/criarusuario';


@Injectable({
  providedIn: 'root'
})
export class CriarusuarioService {

  //Utilizando o ionicStorage para Armazenar os Dados

    constructor(private storage: Storage) {
      this.init();
    }
     
    async init() {
                               // Se estiver usando, defina os drivers aqui: await this.storage.defineDriver(/*...*/);
      const storage = await this.storage.create();
      this.storage = storage;
    }
  
                        // Crie e exponha métodos que os usuários deste serviço podem
                                                    // chama
    public set(criarusuaio:Criarusuariots) {
      let key = Date.now().toString();
      this.storage.set(key, criarusuaio);
    }

    //importando de Criar usuariots

    public getall(){
      let criarusuariots:Criarusuariots[]=[];
     return this.storage.forEach(
      (value: Criarusuariots, key: string)=>{
      let criarusuario = new Criarusuariots;
      value.uid = key;
      criarusuario = value;
      criarusuariots.push(criarusuario);
      }
     ).then(
      res=>{
        return Promise.resolve(criarusuariots);
      }
     ).catch(
      err=>{
        return Promise.reject(err);
      }
     )
    }

    public get(key){
      return this.storage.get(key)
    }

    public update(key:string, criarusuario:Criarusuariots){
      
      criarusuario.uid = "";
      return this.storage.set(key, criarusuario)
    }

   public remove(key:string){
    return this.storage.remove(key)
    }
 }




