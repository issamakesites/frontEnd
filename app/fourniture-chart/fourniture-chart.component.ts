import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { FournitureService } from '../fourniture.service';
@Component({
  selector: 'app-fourniture-chart',
  templateUrl: './fourniture-chart.component.html',
  styleUrls: ['./fourniture-chart.component.css']
})
export class FournitureChartComponent implements OnInit{
 // Doughnut
 public doughnutChartLabels: string[] = [ 'Nombre > 5', 'Nombre < 5', 'Rupture de stock' ];
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
data: any = []
constructor(private fournitureService: FournitureService){}
ngOnInit(){
  this.fournitureService.getFournitures().subscribe(fournitures => {
  let f1 = fournitures.filter(function(object) {
  return object.nombre > 5;
  });
  let f2 = fournitures.filter(function(object) {
  return object.nombre < 5 && object.nombre >0;
  });
  let f3 = fournitures.filter(function(object) {
    return object.nombre == 0;
    });
  localStorage.setItem('f1', JSON.stringify(f1.length));
  localStorage.setItem('f2', JSON.stringify(f2.length));
  localStorage.setItem('f3', JSON.stringify(f3.length));
  });

  
    this.data[0]=parseInt(localStorage.getItem("f1") || '{}')
    this.data[1]=parseInt(localStorage.getItem("f2") || '{}')
    this.data[2]=parseInt(localStorage.getItem("f3") || '{}')
    this.doughnutChartData.datasets[0].data=this.data;
}
 public doughnutChartData: ChartData<'doughnut'> = {
   labels: this.doughnutChartLabels,
   
   datasets: [
     { 
      label: "article",
      data: [],
      backgroundColor:['#48A1D3','#7de6f1','#ff006e'],
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
