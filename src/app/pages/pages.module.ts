import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';


import { NgChartsModule } from 'ng2-charts';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';





@NgModule({
  declarations: [
    DashboardComponent, 
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    AccountSettingComponent,
    PromesaComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    NgChartsModule,
    ComponentsModule,
  ],
  exports: [
    DashboardComponent, 
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    AccountSettingComponent
  ]
})
export class PagesModule { }
