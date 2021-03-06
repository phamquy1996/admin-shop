import { Component, OnInit } from '@angular/core';
import { ChildCateService } from './../../../shared/services/childcate.service'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private childCateService: ChildCateService) { }
  data:any
  ngOnInit(): void {
    this.childCateService.allCateandSubcate().subscribe(data=>{
      this.data = data
    })
  }

}
