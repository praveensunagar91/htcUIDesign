import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-htc',
  templateUrl: './about-htc.component.html',
  styleUrls: ['./about-htc.component.css']
})
export class AboutHtcComponent implements OnInit {
  navbarFixed=false;

  valuesOptions: OwlOptions = {
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

  employeeOptions: OwlOptions = {
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

  constructor() { }


  ngOnInit(): void {
  }
  @HostListener('window:scroll',['$event'])
  onScroll(){
    if(window.scrollY>100){
      this.navbarFixed=true;
    }
    else{
      this.navbarFixed=false;
    }
  }
}
