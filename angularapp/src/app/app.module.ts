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
import { CustomDirectivesDirective } from './custom-directives.directive';
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
    CustomDirectivesDirective,
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
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
