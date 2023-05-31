import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewContactPage } from '../add-new-contact/add-new-contact.page';
import { ContactlistService } from '../contactlist.service';
import { UpdatecontactPage } from '../updatecontact/updatecontact.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contactList!:any[];
  

  constructor(public modalCtrl:ModalController, public contactListService:ContactlistService) {}

  async addContact() {
    const modal = await this.modalCtrl.create({
      component: AddNewContactPage,
    })
    modal.onDidDismiss().then(newContact =>{
      this.getAllContacts()
    })
    return await modal.present()
  }

  getAllContacts(){
    this.contactList = this.contactListService.getAllContacts()
    console.log(this.contactListService.getAllContacts());
  }

  delete(key: any) { 
    this.contactListService.deleteContact(key)
    this.getAllContacts()
  }

  async update(selectedContact: any){
    const modal = await this.modalCtrl.create({
      component: UpdatecontactPage,
      componentProps: {contact: selectedContact}
    })

    modal.onDidDismiss().then(()=>{
      this.getAllContacts()
    })
    
    return await modal.present()
  }


   
}



