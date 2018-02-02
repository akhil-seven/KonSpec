import {Http,RequestOptions,Headers} from '@angular/http'
import {Injectable} from '@angular/core'

import {Observable} from 'rxjs'
import 'rxjs'

@Injectable()
export class KonSpecSpecService
{
    header:Headers;
    data:any;
    requestoptions:RequestOptions;
    constructor(public http:Http) {
   this.header=new Headers({
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTcxNzBiZjNiNzg0YjBmMDRkYjJlZmYiLCJmaXJzdF9uYW1lIjoiQWhhbmEiLCJsYXN0X25hbWUiOiJLb25zcGVjIiwicGhvbmUiOiI3ODg3ODY3NjY2IiwiZW1haWwiOiJhcnVuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImR2ZjAyN3VhIiwicm9sZSI6IlNhbGVzIFN0YWZmIiwic3RhZmYiOiJOYW1lMSIsImNyZWF0ZWRfYXQiOiIyMDE4LTAxLTMxVDA3OjMxOjExLjc0OFoiLCJsaW5lX21hbmFnZXIiOiJOYW1lMSIsImlhdCI6MTUxNzQ3OTUxNiwiZXhwIjoxNTE3NTY1OTE2fQ.dvtb3jJtj1FudNoX4IASTpvn7pkk768641ITA2FsN14'
   })
    this.requestoptions=new RequestOptions({
        headers:this.header
    })
    

    }
     listSchedule():Observable<any>
     {
     return this.http.get("http://crm.seventech.co:4636/api/admin/list",this.requestoptions).map(response=>response.json())

     }
    addStaff(temp):Observable<any>
    {
        console.log("Temp==",temp)
        this.data=new RequestOptions({
            headers:this.header,
            params:temp
        })
        return this.http.post("http://crm.seventech.co:4636/api/admin/create",this.data).map(response=>response.json())
    }
    getStaffDetail(id):Observable<any>
    {
        return this.http.get("http://crm.seventech.co:4636/api/admin/"+id,this.requestoptions).map(response=>response.json())
    }
    updateStaff(data):Observable<any>
    {
        let id=data._id
          delete data._id;
          delete data.created_at;


          return this.http.put("http://crm.seventech.co:4636/api/admin/update/"+id,data,this.requestoptions).map(response=>response.json())
      
    }
    
}