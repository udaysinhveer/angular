import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { DemopostComponent } from './product/demopost/demopost.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'post', component:DemopostComponent},
  {path: 'postdetails/:id', component: PostdetailsComponent},
  {path: 'product', loadChildren: './product/products.module#ProductsModule'}, // this is syntax of lazy loading 
  {path: 'orders', loadChildren:'./orders/orders.module#OrdersModule'},
  {path: '**', component:PagenotfoundComponent}  // this is wildcard route for page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log('Routing module called');
    
  }
};
