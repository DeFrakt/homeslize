import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private formSource = new BehaviorSubject({});
  currentForm = this.formSource.asObservable();

  constructor(private _http: HttpClient) {}
  //credit card transaction
  ccTransaction(ccInfo: {}){
    return this._http.post('/api/cc', ccInfo);
  } 
  //change approved or declined JSON data
  changeForm(form: any) {
    this.formSource.next(form)
  }
}
