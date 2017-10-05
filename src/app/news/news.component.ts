import { Component, OnInit,Input,SimpleChanges } from '@angular/core';
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
ngOnChanges(changes: SimpleChanges)
{
this.searchNews(this.stock);
  
}
  ngOnInit() {
  }
  
  searchNews(Sym:string){
    this.http.get('https://api.iextrading.com/1.0/stock/'+Sym+'/news/last/5')
    .subscribe(
      (res:Response)=>{
        const s= res.json();
        this .filteredSymbol=s
        console.log(s);
        
      }
    )
  }
}
