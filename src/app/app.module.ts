
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { StudentModule } from './student/student.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/pages/index/index.component';
import { IndexModule } from './../app/views/base/index/index.module';
import { LoginModule } from './../app/views/base/login/login.module';
import { CateModule } from './views/pages/cate/cate.module'
import { SubCateModule } from './views/pages/subcate/subcate.module'
import { ChildCateModule } from './views/pages/childCate/childcate.module'
import { LoginComponent } from './views/base/login/login.component'
import { SharedModule } from './shared/shared.module' 
import { XhrInterceptor } from './http-client-interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SubcateComponent } from './views/pages/subcate/subcate.component';
import { ShippingModule } from './views/pages/shipping/shipping.module'
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    SubcateComponent,
  ],
  imports: [
    BrowserModule,
    StudentModule,
    AppRoutingModule,
    IndexModule,
    LoginModule,
    HttpClientModule,
    SharedModule,
    CateModule,
    SubCateModule,
    ChildCateModule,
    FormsModule,
    ShippingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }