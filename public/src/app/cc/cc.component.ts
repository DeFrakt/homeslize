import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cc',
  templateUrl: './cc.component.html',
  styleUrls: ['./cc.component.css']
})
export class CcComponent implements OnInit {
  payment: any;
  amount: any;
  ccInfo: any;
  ccForm:any;
  form: any;
 

  constructor(private _httpService: HttpService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    //initialize form
    this.ccForm = {cardholder: "", number: "", expiration: "", cvc: "", avs_street: "", avs_zipcode: ""};
    this._route.params.subscribe(data => {
      //retrieve products
      this.amount = data['amount'];
      //start JSON cc object
      this.ccInfo = {
        "command": "cc:sale",
        "amount": this.amount+".00",
        "creditcard": {}
      }
    })  
  }

    ccTransaction(){
      //add CC info to original form
      this.ccInfo['creditcard'] = this.ccForm;
      //subscribe to usaEpay API
      console.log(this.ccInfo);
      this._httpService.ccTransaction(this.ccInfo).subscribe(data =>{
        //add approved or declined data
        this.form = JSON.parse(data['body']);
        //change form data in service for approved or declined
        this._httpService.changeForm(this.form)
        //redirect approved or declined
        if(this.form['result_code'] == "A"){
          //subscribe form data to service
          this._httpService.currentForm.subscribe(form => this.form = form)
          //redirect
          this.router.navigateByUrl('/approved');
        } else if(this.form['result_code'] == "E"){
          //redirect
          this.router.navigateByUrl('/declined');
        } else {
          this.router.navigateByUrl('/');
        }
       
      })
    }

}
