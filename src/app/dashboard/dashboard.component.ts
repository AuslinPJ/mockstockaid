import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  symbol1="";
  value='';
  name='';
  sector='';
  SelectedStockHandler(symbol:any)
  {
 this.symbol1=symbol;
 this.value=symbol.Symbol;
this.name=symbol.Name;
this.sector=symbol.Sector;
console.log(this.symbol1);
console.log(this.value);
}

}
