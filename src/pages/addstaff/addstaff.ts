import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {KonSpecSpecService} from '../../service/KonSpecService'
import {Http,RequestOptions,Headers} from '@angular/http'
import {HomePage} from '../home/home'
/**
 * Generated class for the AddstaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-addstaff',
  templateUrl: 'addstaff.html',
})
export class AddstaffPage {
data:Object={}
header:Headers;
value:RequestOptions
doEdit:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:KonSpecSpecService,public http:Http) {
  }
ngOnInit()
{
  if(this.navParams.get("data")!=null)
    {
      this.data=this.navParams.get("data");
      this.doEdit=true;
    }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddstaffPage');
  }
  submit()
  {
    console.log("Submit",this.data);
   // this.service.addStaff(this.data)
       this.header=new Headers({
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTcxNzBiZjNiNzg0YjBmMDRkYjJlZmYiLCJmaXJzdF9uYW1lIjoiQWhhbmEiLCJsYXN0X25hbWUiOiJLb25zcGVjIiwicGhvbmUiOiI3ODg3ODY3NjY2IiwiZW1haWwiOiJhcnVuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImR2ZjAyN3VhIiwicm9sZSI6IlNhbGVzIFN0YWZmIiwic3RhZmYiOiJOYW1lMSIsImNyZWF0ZWRfYXQiOiIyMDE4LTAxLTMxVDA3OjMxOjExLjc0OFoiLCJsaW5lX21hbmFnZXIiOiJOYW1lMSIsImlhdCI6MTUxNzQ3OTUxNiwiZXhwIjoxNTE3NTY1OTE2fQ.dvtb3jJtj1FudNoX4IASTpvn7pkk768641ITA2FsN14'
   })
        this.value=new RequestOptions({
            headers:this.header
           
        })
         this.http.post("http://crm.seventech.co:4636/api/admin/create",this.data,this.value).map(response=>response.json()).subscribe(data=>{
            this.navCtrl.push(HomePage)
         })
  }
        update()
        {
          this.service.updateStaff(this.data).subscribe(data=>{
            this.navCtrl.setRoot(HomePage)
          })
        }

}
