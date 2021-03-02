import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ChildCateService {
  //   url = environment.apiUrl;
  public cate:any = []
  public params:number = 0
  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.params = params['page'];
      console.log(this.params); // Print the parameter to the console. 
  });
  }

  public addChildCategory(payload: object) {
    console.log(payload);
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(payload);
    this.http
      .post('http://localhost:8082/api/v1/addChildCategory', body, { headers: headers })
      .subscribe((data) => {
        console.log(data)
      });
  }

  public allCateandSubcate () {
    return this.http.get('http://localhost:8082/api/v1/addChildCate')
  }
  
}
