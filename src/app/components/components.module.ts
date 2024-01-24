import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import { FormsModule } from '@angular/forms';
import { DonutsComponent } from './donuts/donuts.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementComponent,
    DonutsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ], exports: [
    IncrementComponent,
    DonutsComponent
  ]
})
export class ComponentsModule { }
