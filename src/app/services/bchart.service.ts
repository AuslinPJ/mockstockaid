import { Input} from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class BchartService {
  @Input() stock;
  constructor(private http:Http) { }
    getchart(){
              return this.http.get('https://api.iextrading.com/1.0/stock/'+this.stock+'/chart/'+1+'m').map(res=>res.json());
         }


}