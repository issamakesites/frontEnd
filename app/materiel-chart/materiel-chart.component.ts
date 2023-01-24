import { Component, OnInit} from '@angular/core';
import { ChartData, ChartEvent, ChartType} from 'chart.js';
import { MaterielService } from '../materiel.service';
@Component({
  selector: 'app-materiel-chart',
  templateUrl: './materiel-chart.component.html',
  styleUrls: ['./materiel-chart.component.css']
})
export class MaterielChartComponent implements OnInit{
// Doughnut
public doughnutChartLabels: string[] = ['Affecté', 'Non affecté' ];
public chartOptions = {
 responsive: true,
 maintainAspectRatio: false,
 cutout: "75%",
 borderRadius:7,
 borderWidth:3,
 borderColor:"#fff",
 rotation:180,
 hoverOffset:20,
 hoverBorderColor:"#48A1D3",
}
data : any = []
constructor(private MaterielService: MaterielService){}
ngOnInit(){
  this.MaterielService.getMaterielAff().subscribe(materiel => {
    localStorage.setItem('datos1', JSON.stringify(materiel.length));
    });
  this.MaterielService.getMaterielDispo().subscribe(materiel => {
    localStorage.setItem('datos2', JSON.stringify(materiel.length));
    });
  console.log(this.doughnutChartData.datasets[0].data + "zawjaa")
  //this.doughnutChartData.datasets[0].data = [this.x, this.y]*/

    this.data[0]=parseInt(localStorage.getItem("datos1") || '{}')
    this.data[1]=parseInt(localStorage.getItem("datos2") || '{}')
   // this.data[1]=parseInt(localStorage.getItem("datos1"))
    this.doughnutChartData.datasets[0].data=this.data;
}
public doughnutChartData: ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [
    { 
     label: "article",
     data: this.data,
     backgroundColor:['#48A1D3','#7de6f1'],
     weight:1
   }
  ]
};
public doughnutChartType: ChartType = 'doughnut';

// events
public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}
}
