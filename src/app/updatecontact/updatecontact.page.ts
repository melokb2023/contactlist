import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactlistService } from '../contactlist.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.page.html',
  styleUrls: ['./updatecontact.page.scss'],
})
export class UpdatecontactPage implements OnInit {
  @Input() contact : any;
  categories =['family','celebrity','friend','best friend'];
  categorySelectedCategory:any;

  newContactObject = {}
  contactName:any;
  contactNumber:any;
  contactCategory:any;
  contactPriority:any;
  
 
  constructor(public modalCtrl:ModalController, public contactListService:ContactlistService,private alertController:AlertController) { }

  ngOnInit() {


    this.contactName = this.contact.value.contactName
    this.contactNumber = this.contact.value.contactNumber
    this.contactCategory = this.contact.value.contactCategory
    this.contactPriority = this.contact.value.contactPriority
    this.categorySelectedCategory = this.contact.value.contactCategory
    console.log(this.contact);

  }

  async verification(){
    if(!this.contactName || !this.contactNumber || !this.categorySelectedCategory || !this.contactPriority ){
      const alert = this.alertController.create({
        message:'You cannot leave a blank.Please try to update again',
        buttons: ['OK'],
      });
      alert.then((alert) => alert.present());
    }

    else if(this.contactNumber.length != 11){
      const alert = this.alertController.create({
        message:'Maximum is 11.Please complete it',
        buttons: ['OK'],
      });
      alert.then((alert) => alert.present());
    }
    
    else{
      this.update();
    }
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
