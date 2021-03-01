import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from './../../../../shared/services/subcate.service'
import { CateService } from './../../../../shared/services/cate.service'
import { Subcate } from './../../../../shared/models/subcate'
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  subcate : Subcate = new Subcate;
  cates:any
  constructor(private subCategoryService: SubCategoryService, private CateService: CateService) { }

  ngOnInit(): void {
    this.cates = this.allCategory()
  }

  allCategory = () => {
    this.CateService.allCate().subscribe(data =>{
      this.cates = data
      console.log(data)
    })
  }

  createSubcate = (subCategoryForm: NgForm) =>{
    console.log(subCategoryForm.value)
    const payload: Subcate = {
      ...subCategoryForm.value,
      image: "anhquy"
    }
    this.subCategoryService.addSubcate(payload)
  }
}
