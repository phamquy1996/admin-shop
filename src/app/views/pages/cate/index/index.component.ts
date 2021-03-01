import { Component, OnInit } from '@angular/core';
import { CateService } from './../../../../shared/services/cate.service'
import { Cate } from './../../../../shared/models/cate'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  cates:any;
  listCate:any
  constructor(private cateService: CateService) { 
    
  }

  ngOnInit():  void {
    this.cates = this.getallCate()

  }
  getallCate = () =>{
    console.log(this.cateService.allCate())
    this.cateService.allCate().subscribe(data=>{
      this.cates = data
      console.log(data)
    })
  }
}
