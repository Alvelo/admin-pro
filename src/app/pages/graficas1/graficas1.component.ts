import { Component } from '@angular/core';

import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: ``
})
export class Graficas1Component {
        /** logic of the grafics works */
        public labels1: string[] = [
          'Download Sales',
          'In-Store Sales',
          'Mail-Order Sales',
        ];
        public data1 = [350, 450,100]
        // public doughnutChartData: ChartData<'doughnut'> = {
        //   labels: this.labels1,
        //   datasets: [
        //     { data: [350, 450, 100],
        //       backgroundColor: ['#6857E6', '#009FEE', '#F02059'] },
        //   ], 
        // };
        // public doughnutChartType: ChartType = 'doughnut';
        
        /********************************************* */
}
