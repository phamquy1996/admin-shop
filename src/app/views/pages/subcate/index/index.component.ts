import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from './../../../../shared/services/subcate.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  listSubcates:any
  constructor(private router: Router, private subCategoryService: SubCategoryService) { }

  ngOnInit(): void {
    this.allSubcate(0);
    console.log(this.router.url);
  }

  allSubcate = (i:any) =>{
    this.subCategoryService.allSubcate(this.router.url).subscribe(data =>{
      this.listSubcates = data 
      console.log(data)
    })
  }
}
