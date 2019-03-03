import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
 newForm: {};
 approved: {};

  constructor(private _httpService: HttpService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.approved = {};
    this.displayApproved();
  }
  displayApproved(){
    //get new form data
    this._httpService.currentForm.subscribe(form => this.newForm = form)
    this.approved = this.newForm;
    console.log("Newest FOrm",this.approved);
  }
}
