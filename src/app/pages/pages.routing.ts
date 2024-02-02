import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesaComponent } from './promesa/promesa.component';



const routes: Routes = [
    {
        path:'dashboard', 
        component: PagesComponent,
        children:[
            {path:'', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'grafics1', component: Graficas1Component},
            {path: 'account-settings', component: AccountSettingComponent},
            {path: 'promesa', component: PromesaComponent}
        ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
