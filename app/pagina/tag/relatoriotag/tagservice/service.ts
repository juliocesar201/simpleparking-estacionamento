import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Cadastrotagts } from "../tagts/cadastrotagts";

@Injectable({
    providedIn: 'root'
  })

export class Service {
    
    constructor(private storage: Storage) {
        this.init();
      }
       
      async init() {
        // If using, define drivers here: await this.storage.defineDriver(/*...*/);
        const storage = await this.storage.create();
        this.storage = storage;
      }
    
      // Create and expose methods that users of this service can
      // call, for example:
      public set(tag:Cadastrotagts) {
        let key = Date.now().toString();
        this.storage.set(key, tag);
      }
    
      public getall(){
        let cadastrotagts:Cadastrotagts[]=[];
       return this.storage.forEach(
        (value: Cadastrotagts, key: string)=>{
        let tag = new Cadastrotagts;
        value.uid = key;
        tag = value;
        cadastrotagts.push(tag);
        }
       ).then(
        res=>{
          return Promise.resolve(cadastrotagts);
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
    
      public update(key:string, tag:Cadastrotagts){
        //let key = relatorio.uid;
        tag.uid = "";
        return this.storage.set(key, tag)
      }
    
      public remove(key:string){
       return this.storage.remove(key)
      }
    }
    
    //public add(relatorio:Relatoriots){
    //let key = Date.now().toString();      
    //return this.storage.create();
