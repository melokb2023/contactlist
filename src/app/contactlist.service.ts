import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class ContactlistService {

   
  index = 0;

    
  constructor(private storage: Storage) { 
    this.init()
  } 
  
  addContact(key:string,value:any){
    this.storage.set(key,value)
  }

  deleteContact(key: string){
    this.storage.remove(key) 
  }

  updateContact(key: string, newValue: any){
    this.storage.set(key, newValue)
    this.getAllContacts()
  }

    getAllContacts(){
      let contacts: any = []
      this.storage.forEach((key, value, index) => {
      contacts.push({'key':value, 'value':key})
      }); 
      return contacts 
    }

    async init(){
      await this.storage.create()
    }
}
