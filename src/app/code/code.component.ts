import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor(private http: Http) { }
stockName="";
companyName="";
  searchStock(){
    this.http.get('https://api.iextrading.com/1.0/stock/'+this.stockName+'/quote').subscribe((res:Response)=>{
      const sName=res.json();
      console.log(sName);
      this.companyName=sName.companyName;
    }
  )
  }
  ngOnInit() {
  }
  myControl: FormControl = new FormControl();
  
    options = [
      'AAPL',
      'Samsung',
      'Microsoft'
     ];

}
