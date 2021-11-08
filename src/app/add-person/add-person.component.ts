import { ContactService } from './../service/contact.service';
import { Contact, ContactNId } from './../Entities/Contact';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  constructor(public router:Router, public service:ContactService) { }

  ngOnInit(): void {
  }

  contact:ContactNId={
    fname:"",
    address:"",
    city:"",
    state:"",
    zip:0,
    phone:0,
  };

  addContact(form:any){
    console.log(form.value)
    this.contact.address=form.value.address;
    this.contact.city=form.value.city;
    this.contact.fname=form.value.name;
    this.contact.phone=form.value.phone;
    this.contact.state=form.value.state;
    this.contact.zip=form.value.zip;

    console.log(this.contact)
    
    this.service.addContact(this.contact).subscribe(n=>console.log(n));
    
  }

  cityList:String[]=["Pune", "Mumbai", "Bangalore", "Hyderabad", "Ahmedabad"];
  stateList:String[]=["Maharashtra", "Karnataka","Telangana", "Gujarat"];

  cancle(){
    this.router.navigateByUrl("")
  }

  reset(){
    window.location.reload();
    console.log("re")
  }

  checkAdd(formDetails:any){

  }
}
