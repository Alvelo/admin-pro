import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [
    {
        path:'dashboard', 
        component: PagesComponent,
        children:[
            {path:'', component: DashboardComponent, data: {title: 'Dashboard'}},
            {path: 'progress', component: ProgressComponent, data: {title: 'Progress'}},
            {path: 'grafics1', component: Graficas1Component,  data: {title: 'Graphics1'}},
            {path: 'account-settings', component: AccountSettingComponent,  data: {title: 'Account Settings'}},
            {path: 'promesa', component: PromesaComponent,  data: {title: 'Promess'}},
            {path: 'rxjs', component: RxjsComponent,  data: {title: 'Rxjs'}}
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
