import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styles: ``
})
export class DonutsComponent implements OnInit {
      @Input() title: string = 'Sin titulo';
      @Input('labels') labels: string[] = ['Label1', 'label2', 'label3'];
      @Input('data') data: number[] = [100,200,50];


      ngOnInit(): void {
        this.doughnutChartData.labels = this.labels;
        this.doughnutChartData.datasets[0].data = this.data;
      }
    /** logic of the grafics works */
    // public doughnutChartLabels: string[] = [
    //   'Download Sales',
    //   'In-Store Sales',
    //   'Mail-Order Sales',
    // ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.labels,
      datasets: [
        { data: [350, 450, 100],
          backgroundColor: ['#6857E6', '#009FEE', '#F02059'] },
      ], 
    };
    public doughnutChartType: ChartType = 'doughnut';
    
    /********************************************* */
}
