import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactlistService } from '../contactlist.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.page.html',
  styleUrls: ['./add-new-contact.page.scss'],
})

export class AddNewContactPage implements OnInit {
  categories=['family','celebrity','friend','best friend'];
  
  categorySelectedCategory:string = '';
  newContactObject = {}
  contactName: string = '';
  contactNumber: string = '';
  contactCategory:string = '';
  contactPriority: string = '';
  contactObject:string = '';
  
  
  
 
  
  
  constructor(public modalCtrl:ModalController, public contactListService:ContactlistService,private alertController:AlertController) { 
    
  }

 

  ngOnInit() {
 

    
  }

  async verification(){
    if(!this.contactName || !this.contactNumber || !this.categorySelectedCategory || !this.contactPriority ){
      const alert = this.alertController.create({
        message:'Please fill up the following form.All of these are required.',
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
      this.add();
    }
  }

  async add(){
    this.newContactObject = ({contactName:this.contactName, contactNumber:this.contactNumber, contactCategory:this.categorySelectedCategory,contactPriority:this.contactPriority})
    console.log(this.newContactObject);
    let uid = this.contactName + this.contactNumber + this.contactCategory + this.contactPriority
    
    if(uid){
      await this.contactListService.addContact(uid,this.newContactObject)
    }else{
      console.log("can't save empty task until you fill up all of them");
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
  


