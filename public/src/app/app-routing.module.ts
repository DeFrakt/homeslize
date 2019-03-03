import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//app routes
import { ApprovedComponent } from './approved/approved.component';
import { DeclinedComponent } from './declined/declined.component';
import { ProductsComponent } from './products/products.component';
import { CcComponent } from './cc/cc.component';

const routes: Routes = [
  {path: 'approved', component: ApprovedComponent},
  {path: 'declined', component: DeclinedComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cc/:amount', component: CcComponent},
   //redirect if does not match above paths
  {path: '', pathMatch: 'full', redirectTo: '/products'},
  {path: '**', pathMatch: 'full', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

