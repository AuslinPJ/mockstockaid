import { Component, OnInit ,Input,SimpleChanges} from '@angular/core';
import {Http, Response} from '@angular/http';
import {BchartService} from '../services/bchart.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  
  @Input() stock;
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

data1: any[];
public label: any =[]; 
public closee: any=[];
getValueFromChart(sym : String)
{
         this.bchartService.getchart().subscribe((r)=>
   {
    this.data1=r;
    Object.keys(this.data1).forEach(element => {
   
   this.label.push(this.data1[element].date);
   this.closee.push(this.data1[element].close);
  
  });console.log(this.label);console.log(this.closee);
  this.SetValuesAndUpdateChart(this.stock, this.label, this.closee);
}
)
 }
 SetValuesAndUpdateChart(symbol, label, closee) {
  this.hData.labels = label;
  this.hData.datasets[0] = {
    label: symbol ? symbol : '',
    data: closee,
    fill: false,
    borderColor: '#673ab7',
    
  }; }
  ngOnInit() {
  
  }

}
