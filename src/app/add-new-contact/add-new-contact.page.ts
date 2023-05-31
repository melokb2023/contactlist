import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactlistService } from '../contactlist.service';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.page.html',
  styleUrls: ['./add-new-contact.page.scss'],
})

export class AddNewContactPage implements OnInit {
  categories=['family','celebrity']
  
  categorySelectedCategory:string = '';
  newContactObject = {}
  contactName: string = '';
  contactNumber: string = '';
  contactCategory:string = '';
  contactPriority: string = '';
  contactObject:string = '';
  
  
 
  
  
  constructor(public modalCtrl:ModalController, public contactListService:ContactlistService) { }

  ngOnInit() {
    this.categories.push('family')
    this.categories.push('celebrity')

    
  }

  async add(){
    this.newContactObject = ({contactName:this.contactName, contactNumber:this.contactNumber, contactCategory:this.categorySelectedCategory,contactPriority:this.contactPriority})
    console.log(this.newContactObject);
    let uid = this.contactName + this.contactNumber
    
    if(uid){
      await this.contactListService.addContact(uid,this.newContactObject)
    }else{
      console.log("can't save empty task");
    }


    this.dismiss()
  }

  
  selectCategory(index: any){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.newContactObject)
  }

  }
  


