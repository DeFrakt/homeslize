import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-declined',
  templateUrl: './declined.component.html',
  styleUrls: ['./declined.component.css']
})
export class DeclinedComponent implements OnInit {
  newForm: {};
  declined: {};

  constructor(private _httpService: HttpService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.declined = {};
    this.displayDecline();
  }
  displayDecline(){
    //get new form data
    this._httpService.currentForm.subscribe(form => this.newForm = form)
    this.declined = this.newForm;
    console.log("Newest FOrm",this.declined);
  }

}
