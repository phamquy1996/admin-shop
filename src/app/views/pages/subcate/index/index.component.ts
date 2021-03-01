import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from './../../../../shared/services/subcate.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  listSubcates:any
  constructor(private activatedRoute: ActivatedRoute, private subCategoryService: SubCategoryService) { }
  url:any
  ngOnInit(): void {
    this.allSubcate(0);
    // console.log(this.router.url);
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(window.location)
      this.url = window.location.href
      this.allSubcate(params['page']);
    });
  }

  allSubcate = (i:any) =>{
    this.subCategoryService.allSubcate(i).subscribe(data =>{
      this.listSubcates = data 
      console.log(data)
    })
  }
}
