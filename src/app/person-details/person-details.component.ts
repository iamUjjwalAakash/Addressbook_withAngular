import { ContactService } from './../service/contact.service';
import { Contact } from './../Entities/Contact';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit, OnChanges{

  constructor(public service:ContactService) { }
  contactList:Contact[]= []

  headerList:String[]=["Fullname","Address","City","State","Zip Code","Phone Number"]


  ngOnInit(): void {
    this.getPersonDetails();
  }


  getPersonDetails(){
    this.service.getAllContact().subscribe(list=>{this.contactList=list.data; console.log(this.contactList)}, error=>console.log(error))
  }

  deletePerson(id:number){
    this.service.deleteContact(id).subscribe(n=>{console.log(n); this.ngOnInit()});
  }

  ngOnChanges():void{
    
  }
}
