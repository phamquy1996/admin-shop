import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
//   url = environment.apiUrl;

  public userCount$ = new BehaviorSubject<number>(0);
  public auth$ = new BehaviorSubject<any>(localStorage.getItem('dataSource'));
  constructor(private http: HttpClient ) { }

  public login(payload:object){
    console.log(payload)
    const headers = { 'content-type': 'application/json'}   
    const body=JSON.stringify(payload);
    this.http.post('http://localhost:8082/api/auth/login', body,{'headers':headers}
    ).subscribe(data=>{
      console.log(data)
    })
  }

}