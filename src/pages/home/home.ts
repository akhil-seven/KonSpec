import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddstaffPage} from '../addstaff/addstaff'
import {KonSpecSpecService} from '../../service/KonSpecService'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 data:any;
 listStaff:boolean=false;
  constructor(public navCtrl: NavController,public service:KonSpecSpecService) {
    this.service.listSchedule().subscribe(data=>{
      this.data=data;
       this.listStaff=true
    })
  }
  
 addstaff()
 {
   this.navCtrl.push(AddstaffPage)
 }
 goEditPage(id)
 {
   this.service.getStaffDetail(id).subscribe((data)=>{
     this.navCtrl.push(AddstaffPage,{"data":data})
   })
 } 

}
