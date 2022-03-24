import { Component, ElementRef, OnInit, ViewChild,AfterViewInit, HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-htc-home',
  templateUrl: './htc-home.component.html',
  styleUrls: ['./htc-home.component.css']
})
export class HtcHomeComponent implements OnInit {

contact:FormGroup;
submitted=false;
navbarFixed=false;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  caseOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  constructor(private fb:FormBuilder) {

   }

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
