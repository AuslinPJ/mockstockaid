import { Component, OnInit,Input } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {
@Input() stock;
  
constructor(private http:Http) { }
filteredSymbol: any;
  ngOnInit() {
  }
  
  searchNews(){
    this.http.get('https://api.iextrading.com/1.0/stock/'+this.stock+'/news/last/5')
    .subscribe(
      (res:Response)=>{
        const s= res.json();
        this .filteredSymbol=s
        console.log(s);
        
      }
    )
  }
}
