import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service'
import { HttpClientModule } from '@angular/common/http';
//routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprovedComponent } from './approved/approved.component';
import { DeclinedComponent } from './declined/declined.component';
import { ProductsComponent } from './products/products.component';
import { CcComponent } from './cc/cc.component';
//forms
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ApprovedComponent,
    DeclinedComponent,
    ProductsComponent,
    CcComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
