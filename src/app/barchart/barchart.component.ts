import { Component, OnInit, ViewChild,Input,SimpleChanges} from '@angular/core';
import {Http, Response} from '@angular/http';
import {BchartService} from '../services/bchart.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { UIChart } from "primeng/primeng";
import { Chart } from "../structure/chart";


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {
  @ViewChild("Chart") Chart: UIChart;
  @Input() stock;

data1=new Array<Chart>();
label=new Array<any>();
highh=new Array<any>();
  ngOnChanges(changes: SimpleChanges)
      {
    this.getValueFromChart(this.stock);
        
     }
  hData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
      }
    ]
  }  
 constructor(private bchartService:BchartService) { }


getValueFromChart(sym : string)
{
         this.bchartService.getchart(sym).subscribe((r)=>
   {
    this.data1=r;
    Object.keys(this.data1).forEach(element => {
   
   this.label.push(this.data1[element].date);
   this.highh.push(this.data1[element].high);
  
  });console.log(this.data1);console.log(this.label);console.log(this.highh);
  this.SetValuesAndUpdateChart(this.stock, this.label, this.highh);
}
)
 }
 SetValuesAndUpdateChart(symbol, label, highh) {
  this.hData.labels = label;
  this.hData.datasets[0] = {
    label: symbol ? symbol : '',
    data: highh,
    fill: false,
    borderColor: '#673ab7',
    
  }; this.Chart.refresh();
 }
  

}
