import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements OnInit {
  contact:FormGroup;
  submitted=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contact = this.fb.group({
      name : new FormControl(null,[Validators.required,Validators.pattern("^[A-Za-z -]+$")]),
      company : new FormControl(null,[Validators.required,Validators.pattern("^[A-Za-z -]+$")]),
      email : new FormControl(null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone : new FormControl(null,[Validators.required,Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]),
      suggestion : new FormControl(null,[Validators.required,Validators.pattern("^[A-Za-z -]+$")])
    })
  }

  get fcontrol(){
    return this.contact.controls;
  }

  submitContact(){
    this.submitted = true;
   if(this.contact.invalid){
     return;
   }
   else{
     console.log(this.contact.value);
   }
  }
}
