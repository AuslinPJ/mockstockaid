import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Http, Response} from '@angular/http';
import {DataService} from '../services/data.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { MdOptionSelectionChange ,MdSelect,MdAutocompleteSelectedEvent} from "@angular/material/material";

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  stateCtrl: FormControl;
  constructor(private http: Http,private dataService: DataService) {
    this.stateCtrl = new FormControl();
   }

symbol="";
allSymbols;
filteredSymbol: any;
@Output() selectedStock = new EventEmitter<any>();

  
  ngOnInit() {

    this.dataService.fetchData()
    .subscribe(
      (rescode) => {
        this.allSymbols = rescode.StockList;
        this.filteredSymbol = this.stateCtrl.valueChanges
          .startWith(null)
          .map(val => val ? this.filter(val) : this.allSymbols);
      }
  );
  
  }
  filter(Symbol) {
    return this.allSymbols.filter(Symb => new RegExp(`^${Symbol}`, '').test(Symb.Symbol)); 
   }
   
 
    displayFn(Symb) {
       return Symb ? Symb.Name : Symb;
    }
 
    selected(event: MdOptionSelectionChange, Symb: any) {
     if (event.source.selected) {
       this.selectedStock.emit(Symb);
       this.symbol=Symb.Symbol;
     }
   }


   sym="";
   primeEx="";
   stockName="";
   companyName="";
   searchStock(){
    this.http.get('https://api.iextrading.com/1.0/stock/'+this.symbol+'/quote').subscribe((res:Response)=>{
      const sName=res.json();
      console.log(sName);
      this.companyName=sName.companyName;
      this.sym=sName.symbol;
      this.primeEx=sName.primaryExchange;
    
    }
  )
  }
 /* myControl: FormControl = new FormControl();
  
    options = [
      'AAPL',
      'AMZN',
      'AXP'
     ];
*/
}
