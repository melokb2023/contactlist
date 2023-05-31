import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class ContactlistService {


  constructor(private storage: Storage) { 
    this.init()
  } 
  
  addContact(key:any,value:any){
    this.storage.set(key,value)
  }

  deleteContact(key: any){
    this.storage.remove(key) 
  }

  updateContact(key: string, newValue: any){
    this.storage.set(key, newValue)
    this.getAllContacts()
  }

    getAllContacts(){
      let contacts: any = []
      this.storage.forEach((key: any, value: any, index: any) => {
      contacts.push({'key':value, 'value':key})
      }); 
      return contacts 
    }

    async init(){
      await this.storage.create()
    }
}
