import { Component, OnInit } from '@angular/core';
import { Cate } from './../../../../shared/models/cate'
import { NgForm } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { CateService } from './../../../../shared/services/cate.service'
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  cate : Cate = new Cate;
  url: any = '';
  constructor(private http: HttpClient, private cateService: CateService) { }
  ngOnInit(): void {

  }
  onFileChanged = async (event: any) =>  {
    event.target.files;
    var formData = new FormData();
    for (const key of Object.keys(event.target.files)) {
      console.log(event.target.files[key])
      formData.append('files', event.target.files[key])
    }
    const header = {'Content-Type': 'multipart/form-data'}
    
    console.log(formData)

    this.http.post('http://localhost:8082/upload/', formData, {responseType: 'text'}
    ).subscribe(
      (res) => this.cate.image = res,
      (err) => console.log(err)
    );

  }

  createCate = (productForm: NgForm) =>{
    const payload: Cate = {
      ...productForm.value,
      image : this.cate.image
    };
    this.cateService.addCate(payload)
  }
}
