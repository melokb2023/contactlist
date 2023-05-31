import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactlistService } from '../contactlist.service';
@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.page.html',
  styleUrls: ['./updatecontact.page.scss'],
})
export class UpdatecontactPage implements OnInit {
  @Input() contact : any;
  categories =['family','celebrity'];
  categorySelectedCategory:any;

  newContactObject = {}
  contactName:any;
  contactNumber:any;
  contactCategory:any;
  contactPriority:any;
  
  
  constructor(public modalCtrl:ModalController, public contactListService:ContactlistService) { }

  ngOnInit() {


    this.contactName = this.contact.value.contactName
    this.contactNumber = this.contact.value.contactNumber
    this.contactCategory = this.contact.value.contactCategory
    this.contactPriority = this.contact.value.contactPriority
    this.categorySelectedCategory = this.contact.value.contactCategory
    console.log(this.contact);

  }

  selectCategory(index: any){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismiss(){
    await this.modalCtrl.dismiss()
  }

  async update(){
    this.newContactObject = ({contactName:this.contactName, contactNumber:this.contactNumber, contactPriority:this.contactPriority,contactCategory:this.categorySelectedCategory})
    let uid = this.contact.key
    await this.contactListService.updateContact(uid,this.newContactObject)
    this.dismiss()
  }

}
