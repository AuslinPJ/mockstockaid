import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  symbol1="";
  SelectedStockHandler(symbol:string)
  {
 this.symbol1=symbol;
console.log(this.symbol1);
}
}
