import { Contact, ContactNId } from './../Entities/Contact';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public http:HttpClient) { }

  getAllContact():Observable<any>{
    return this.http.get<any>(environment.baseUrl)
  }

  addContact(contact:ContactNId):Observable<any>{
    return this.http.post(environment.baseUrl, contact )
  }

  deleteContact(id:number){
    return this.http.delete(environment.baseUrl+"delete/"+id)
  }
}
