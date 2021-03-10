import { Component, OnInit } from '@angular/core';
import { Childcate } from './../../../../shared/models/Childcate'
import { NgForm } from '@angular/forms'
import { ChildCateService } from './../../../../shared/services/childcate.service'
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  childcate : Childcate = new Childcate
  cates:any
  data:any
  listSubcate:any
  constructor(private childCateService: ChildCateService) { }

  ngOnInit(): void {
    this.childCateService.allCateandSubcate().subscribe(data=>{
      this.data = data
    })
  }

  createSubcate(subCategoryForm: NgForm){
    console.log(subCategoryForm.value)
    const payload: Childcate = {
      ...subCategoryForm.value
    }
    this.childCateService.addChildCategory(payload)
  }

  onCateChange=(data:any)=>{
    console.log(data.target.value)
    this.listSubcate = this.data.listSubcate.filter((item:any )=> item.author_id == data.target.value)
    console.log(this.data.listSubcate)
  }
}
