import { Component, OnInit ,Input,SimpleChanges} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  
  @Input() stock;
  ngOnChanges(changes: SimpleChanges) {
    
        
            }
  hData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
      }
    ]
  }  
 constructor(private http:Http) { }

data1: any[];
public label: any =[]; 
public closee: any=[];
 getchart(){
this.http.get('https://api.iextrading.com/1.0/stock/'+this.stock+'/chart/'+1+'m').subscribe((res:Response)=>
{
  this.data1=res.json();
  console.log(this.data1=res.json());

  this.data1.forEach(element => {
   
   this.label.push(element.date);
   this.closee.push(element.close);
  
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
    fill: true,
    borderColor: '#673ab7',
    backgroundColor: '#42A5F5'
  }; }
  ngOnInit() {
  
  }

}
