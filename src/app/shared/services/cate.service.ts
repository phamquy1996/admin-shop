import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cate } from './../models/cate'
@Injectable({
  providedIn: 'root',
})
export class CateService {
  //   url = environment.apiUrl;
  public cate:any = []
  constructor(private http: HttpClient) {}

  public addCate(payload: object) {
    console.log(payload);
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(payload);
    this.http
      .post('http://localhost:8082/api/v1/addCate', body, { headers: headers })
      .subscribe((data) => {
        console.log(data);
      });
  }

  public allCate() {
    return this.http.get('http://localhost:8082/api/v1/allCate')
  }
}
