import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../shared/services/auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 public anhquy = 0 ;
  constructor(private commom:AuthService) { }

  ngOnInit() {
    this.commom.userCount$.subscribe(count =>{
      this.anhquy = count
    })
  }

}
