import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  caprese = false;
  ccInfo: any;
  pepperoni = false;
  payment: any;
  amount = 0;
  
  constructor(private _httpService: HttpService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.payment = {type: ""};
  }
 
  purchase(){
    console.log(this.caprese, this.pepperoni, this.payment['type']);
    //count prodcuts
    if(this.caprese == true){
      this.amount += 10;
    }
    if(this.pepperoni == true){
      this.amount += 10;
    }
    //send to appropriate form of payment
    switch(this.payment['type']){
      case "":
        alert("Please Pick a Payment Method");
        break;
      case "cc":
        this.router.navigateByUrl('/cc/'+this.amount);
        break;
      case "cash":
        this.router.navigateByUrl('/cash/'+this.amount);
        break;
      case "check":
      this.router.navigateByUrl('/check/'+this.amount);
        break;
      default:
        alert("Payment Error");
    }
  }
}
