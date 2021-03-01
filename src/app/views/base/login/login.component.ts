import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './../../../shared/services/auth.service'
import { UserLogin } from './../../../shared/models/user'
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin
  constructor(private router: Router, private authService: AuthService ) {
    console.log(this.router.url); 
  }

  ngOnInit(): void {
    // this.authService.userCount$.next(200)
    // if(localStorage.getItem('dataSource') == 'login'){
    //   this.router.navigate(['']);
    // }else{
    //   this.router.navigate(['login']);
    // }
  }
  onClickMe = () => {
    // console.log(this.userLogin)
    // localStorage.setItem('dataSource', 'login')
    // this.authService.auth$.next(localStorage.getItem('login'))
    // this.router.navigate(['']);
    // location.reload()
  }
  createProduct = (productForm: NgForm) =>{
    console.log(productForm)
    const payload: UserLogin = {
      ...productForm.value,
    };
    this.authService.login(payload)
    localStorage.setItem('dataSource', 'login')
    console.log(payload)
  }
}
// const payload: Product = {
//       ...productForm.value,
//       productId: "PROD_" + shortId.generate(),
//       productAdded: moment().unix(),
//       ratings: Math.floor(Math.random() * 5 + 1),
//       favourite: false,
//     };