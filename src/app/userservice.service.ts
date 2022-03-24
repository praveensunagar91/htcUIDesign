import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

baseUrl:string="https://fakestoreapi.com/";
  constructor(private http:HttpClient) { }

  setHeaders(){
    return new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getData(){
    return this.http.get(`${this.baseUrl}products`,{headers:this.setHeaders()});
  }

  getDataById(id){
    return this.http.get(`${this.baseUrl}products/${id}`,{headers:this.setHeaders()});
  }

}
