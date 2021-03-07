import { Component, OnInit } from '@angular/core';
import { Shipping } from './../../../../shared/models/Shipping'
import { NgForm } from '@angular/forms'
import { ShippingService } from './../../../../shared/services/shipping.service '
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  shipping: Shipping = new Shipping
  constructor(private shippingService: ShippingService) { }

  ngOnInit( ): void {
  }

  createShipping = (data:NgForm) =>{
    console.log(data.value)
    const payload: Shipping ={
      ...data.value
    }
    this.shippingService.addShipping(payload)
  }
}
