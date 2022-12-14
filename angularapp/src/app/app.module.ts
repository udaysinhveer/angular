import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { StructuralDirectiveAssignmentComponent } from './structural-directive-assignment/structural-directive-assignment.component';
import { AttributesComponent } from './attributes/attributes.component';
import { DemoComponent } from './demo/demo.component';
import { SelectMyPicturesComponent } from './select-my-pictures/select-my-pictures.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { HooksComponent } from './hooks/hooks.component';
import { TenLectureAssignmentComponent } from './ten-lecture-assignment/ten-lecture-assignment.component';
import { TemplateForm01Component } from './template-form01/template-form01.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import{HttpClientModule} from '@angular/common/http';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp1Component } from './comp1/comp1.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CountPipe } from './count.pipe';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DemopostComponent } from './product/demopost/demopost.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { ProductsModule } from './product/products.module';
import { OrdersModule } from './orders/orders.module';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DataBindingComponent,
    DemoDirectivesComponent,
    NgSwitchComponent,
    StructuralDirectiveAssignmentComponent,
    AttributesComponent,
    DemoComponent,
    SelectMyPicturesComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    HooksComponent,
    TenLectureAssignmentComponent,
    TemplateForm01Component,
    ReactiveFormComponent,
    Service1Component,
    Service2Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp1Component,
    PipesDemoComponent,
    CountPipe,
    FilterPipeComponent,
    FilterPipe,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    DemopostComponent,
    PostdetailsComponent,
  ],
  imports: [
    BrowserModule,
    // ProductsModule, // this added before AppRoutingModule because it will throw error page not found 
    // OrdersModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('App module called');
    
  }
}
