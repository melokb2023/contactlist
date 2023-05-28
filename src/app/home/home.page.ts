import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewContactPage } from '../add-new-contact/add-new-contact.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contactList = [{
    contactName: 'Kyle Melo',
    contactNumber:'09061072012',
    contactCategory:'Family',
    contactPriority:'high'
  },
{
    contactName: 'Mark Twain',
    contactNumber:'09347859017',
    contactCategory:'Family',
    contactPriority:'middle'

},
{
    contactName: 'John Lloyd Cruz',
    contactNumber:'09784598076',
    contactCategory:'Celebrity',
    contactPriority:'low'
}]
  

  constructor(public modalCtrl:ModalController) {}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component:AddNewContactPage
    })

    return await modal.present()
  }

}
